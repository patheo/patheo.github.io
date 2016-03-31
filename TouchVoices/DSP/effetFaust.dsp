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
  vol = *(hslider("VolV", 0, 0, 100, 0.1) : -(100) : db2linear : smooth(0.999));
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

process = (noise*0.001),_ :> _ <: par(i, numDeNoeud, ((recorder(i) :
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
