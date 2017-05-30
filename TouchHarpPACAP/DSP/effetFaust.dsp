import("math.lib");
import("music.lib");
import("instrument.lib");
import("filter.lib");
import("effect.lib");
import("hoa.lib");

/* Paramêtre */
numDeNoeud = 6;

/* Fonctions de base */
sah(switch, input) = switch , input : ((_,_ <: !,_,_,!), _ : select2) ~ _; // Sample and hold
metro(bpm) = (+(1) : %(60/bpm*44100)) ~ _ ;               // Phasor définit par un tempo en bpm
compteur(but, size) = (+(but): *(but) : %(size)) ~ _;     // Phasor activable par un bouton

// Cartopol
rayon(x,y) = (y : smooth(0.999)) , ((x : smooth(0.999)) *(-1)) : pow(2), pow(2) : + : pow(1/2);
angle(x,y) = ((x : smooth(0.999)) *(-1)) , (y : smooth(0.999)) : atan2;

// Outils généraux son
dryWet(Vol) = interpolate(Vol : smooth(0.999));
volume(i) = *(hslider("Vol%i", 0, 0, 100, 0.1)/100 : smooth(0.999))
            : visual(hbargraph("audioLevel%i",0,1));
visual(bargraph) = _ <: attach(_, (abs : max ~ -(0.0001) : bargraph));

/* Boutons génériques */
MetroS = hslider("VolS",0,0,100,0.01) * 1.5 + 30;

/* AUDIO */
// Metronome
Metronome = gen : env : visual(hbargraph("metLevel",0,1)) : vol <: _,_ with {
  gen = osc(440);
  env = *(asr(0.1, 90, 0.9, (metro(MetroS) : < (60/MetroS*22050))));
  vol = *( 0.0001);
};

GeneralLevel = hslider("VolL",0,0,100,0.01) : -(100) : db2linear : smooth(0.999);

// Looper Quantifié
recorder(i) = rwtable(bufferSize, 0.0, wcompt, _ , max(wcompt,rcompt)) * (input) with {
  But = hslider("opt%i",0,0,4,1) : sah(metro(MetroS) <: (_ , mem) : <);    // Change les informations de boutons sur le click
  bufferSize = 441000;                                // Taille Maximum de la boucle
  input = 1, But : min : smooth(0.99);                // Coupe l'audio en position "Mute"
  loopSize = (+(But == (2)) : *(1-(But == (2) <: _,mem : >))) ~ _ : max(10);        // Génère la taille de la boucle pour le lecteur
  wcompt = compteur((But ==(2)), bufferSize) : int;  // Compteur d'écriture
  rcompt = compteur((But ==(3)), loopSize) : int;    // Compteur de lecture
};

// Saturation
satu(i) =  _ <: _, (saturation : bandpass) : dryWet(controlB) with {
  controlX = hslider("SatX%i",0,0,200,0.1);   // Fréquence centrale du filtre passe band
  controlY = hslider("SatY%i",0,0,200,0.1);   // Coefficient e saturation
  controlB = button("SatB%i");                // Activation de l'effet
  saturation = cubicnl((controlY : smooth(0.99) : /(400) : +(0.5)),0);
  bandpass = bandpass6e(max(((controlX/189*2000)),50),max(((controlX/189*2000)+300),50)); // Band passante de 300Hz entre 50 et 2000 Hz
};

// Munger
munger(i) = _ <: _, (88300, 0.0, w , in , r : rwtable : o) : dryWet(dw)  with{
  controlX = hslider("MunX%i",0,0,200,0.1);   // Taille des grains
  controlY = hslider("MunY%i",0,0,200,0.1);   // Vitesse de lecture des grains
  controlB = button("MunB%i");                // Activation de l'effet
  dw = controlB : >(0);                       // Activation ou non de l'effet.
  w = 1 : + ~ %(88200) : int;         // Index d'écriture
  in = _;                              // Entrée audio
  size = controlX/189*15000+1000;            // Taille des grains en fonction de X (entre 1000 et 16000 samples)
  rphas = (controlY/100+0.2) : + ~ %(size);  // Lecteur de grains en fonction de la taille du grain et de Y
  r = rphas : +(p) : int;             // Index de lecture
  o = _ : *(sin(((rphas)/size)*3.14));// Envelloppe sur la sortie audio
  np = (rphas <: _, mem : <), _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;  // Déclencheur pour choisir un nouveau point de lecture
  p = noise : + (1) : *(30000) :  +((w<44100) * 44100) : np : min (70000) : max (1000); // Choix aléatoire de position de lecture
};

// Delay
smoothDelay(i) = _ <: _ , + ~ (sdelay(131072, 256, t) : *(f)) : dryWet(controlB) with{
  controlX = hslider("DelX%i",0,0,200,0.1);   // Temps de retard
  controlY = hslider("DelY%i",0,0,200,0.1);   // taux de feedback
  controlB = button("DelB%i");
  t = controlX/189*13000+5000 ;
  f = controlY/189 : min(0.99) : max(0) : smooth(0.99);
};

// Filtre résonant
filter(i) = _ <:  _, moog_vcf(reson,fc): dryWet(controlB) with {
  controlX = hslider("FilX%i",0,0,200,0.1);   // Fréquence centrale du filtre
  controlY = hslider("FilY%i",0,0,200,0.1);   // Niveau de résonance
  controlB = button("FilB%i");                // Activation de l'effet
  fc = controlX : smooth(0.99) : /(189) : *(2000) : +(50);
  reson = controlY : /(189) : min(0.99);
};

// Reverb
reverb(i) = _ <: _, (_ , rev : dryWet((controlY)/200)) : dryWet(controlB) with {
  controlX = hslider("RevX%i",0,0,200,0.1);   // Fréquence de coupure du coupe bas
  controlY = hslider("RevY%i",0,0,200,0.1);   // Largeur de la reverb et D/W
  controlB = button("RevB%i");                // Activation de l'effet
  rev = mono_freeverb((controlX/200), 0.5, 1-(controlY/200), 0.5);
};

//HarpeGenerateur
KEY = 60;	  // basic midi key
NCY = 15; 	// note cycle length
CCY = 15;	  // control cycle length
BPS = 360;	// general tempo (beat per sec)

harpe(C,N,b) = 	hand <: par(i, N, position(i+1)
							: string(C,Penta(b).degree2Hz(i), att, lvl)
							: pan((i+0.5)/N) )
				 	:> _,_
	with {
		att  = 4;
		hand = hslider("VolV", 0, 0, 100, 0.01) : /(10) : int : automat(MetroS*4, 8, 0.0);
		lvl  = 1;
		pan(p) = _ <: *(sqrt(1-p)), *(sqrt(p));
		position(a,x) = abs(x - a) < 0.5;
		db2linear(x)	= pow(10, x/20.0);

	};


//----------------------------------Penta-------------------------------
// Pentatonic scale with degree to midi and degree to Hz conversion
// USAGE: Penta(60).degree2midi(3) ==> 67 midikey
//        Penta(60).degree2Hz(4)   ==> 440 Hz
//-----------------------------------------------------------------------

Penta(key) = environment {

	A4Hz = 440;

	degree2midi(0) = key+0;
	degree2midi(1) = key+2;
	degree2midi(2) = key+4;
	degree2midi(3) = key+7;
	degree2midi(4) = key+9;
	degree2midi(d) = degree2midi(d-5)+12;

	degree2Hz(d) = A4Hz*semiton(degree2midi(d)-69) with { semiton(n) = 2.0^(n/12.0); };

};


//----------------------------------String-------------------------------
// A karplus-strong string.
//
// USAGE: string(440Hz, 4s, 1.0, button("play"))
// or	  button("play") : string(440Hz, 4s, 1.0)
//-----------------------------------------------------------------------

string(coef, freq, t60, level, trig) = noise*level
							: *(trig : trigger(freq2samples(freq)))
							: resonator(freq2samples(freq), att)
	with {
		resonator(d,a)	= (+ : @(d-1)) ~ (average : *(a));
		average(x)		= (x*(1+coef)+x'*(1-coef))/2;
		trigger(n) 		= upfront : + ~ decay(n) : >(0.0);
		upfront(x) 		= (x-x') > 0.0;
		decay(n,x)		= x - (x>0.0)/n;
		freq2samples(f) = 44100.0/f;
		att 			= pow(0.001,1.0/(freq*t60)); // attenuation coefficient
		random  		= +(12345)~*(1103515245);
		noise   		= random/2147483647.0;
	};

process = harpe(0.5,8,38), (noise*0.001) :> _ <: par(i, numDeNoeud, ((recorder(i) :
                               satu(i) :
                               munger(i) :
                               smoothDelay(i) :
                               filter(i) :
                               reverb(i) :
                               volume(i)
                               ),
                     rayon(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)),
                     angle(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)) :
                     map(3))) :>
                     decoderStereo(3) , Metronome :> *(GeneralLevel),*(GeneralLevel);
