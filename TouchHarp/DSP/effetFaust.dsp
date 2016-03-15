import("math.lib");
import("music.lib");
import("instrument.lib");
import("filter.lib");
import("effect.lib");
import("hoa.lib");

phasor(f) = f/SR : (+,1.0:fmod) ~ _;
metro(f) = phasor(f) <: _,mem : < ;
sah(f) = metro(f), _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
sah2(bang) = bang, _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
dryWet(Vol) = interpolate(Vol : smooth(0.999));

rayon(x,y) = (y : smooth(0.999)) , ((x : smooth(0.999)) *(-1)) : pow(2), pow(2) : + : pow(1/2);
angle(x,y) = ((x : smooth(0.999)) *(-1)) , (y : smooth(0.999)) : atan2;

volume(Vol) = *(Vol : smooth(0.999));

MetVolume = vslider("VolV",0,0,100,0.01)/(100);
MetVit = vslider("VolS",10,0,100,0.01)/100*4+1;
MetPhasor = (MetVit/100) : + ~ %(1000);
Metronome = osc(440), asr(0.01, 100, 0.9, MetPhasor < 500) : * <: attach(_, (abs : max ~ -(0.01) : hbargraph("metLevel",-1,1))) : *(MetVolume);

looper2(sel) = _ : *(min(1, sel)) <: *(sel : <(3) : smooth(0.99)), (rwtable(441020, 0.0, w, i, r) : *(sel > 2 : smooth(0.99))) :> _ with {
  rec = int(sel) : ==(2) : sah2(MetPhasor <: (_, mem) : <) <: _, 1 , (_ : @(100)) : _ , - : *;
  play = int(sel) : ==(3) : sah2(MetPhasor <: (_, mem) : <) <: _, 1 , (_ : @(100)) : _ , - : *;
  w = max(0, 1 - abs(int(sel)-2)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (rec, _, 0 : select2 : %(441000)) : int;
  i = _;
  size = max(0, 1 - abs(int(sel)-2)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (rec, _, 0 : select2) : max(100) : min(441000);
  r = max(0, 1 - abs(int(sel)-3)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (play, _, 0 : select2 : %(size)) :int;
};

trans(X, Y, B, sig)  =
	sig , (fdelay1s(d,sig)*fmin(d/256,1) + fdelay1s(d+256,sig)*(1-fmin(d/256,1))) : dryWet(B)
	   	with {
      chorus(v) = sdelay(8192, 256, (v/189*8100));
      s = X : smooth(0.99) : /(189) : *(-6);
			i = 1 - pow(2, s/12);
			d = i : (+ : +(256) : fmod(_,256)) ~ _;
	        };

satu(X,Y,B) =  _ <: _, effet : dryWet(B) with {
  effet = cubicnl((Y : smooth(0.99) : /(400) : +(0.5)),0) : bandpass6e(max(((X/189*2000)),50),max(((X/189*2000)+300),50));
};

munger(X,Y,B) = _ <: _, (88300, 0.0, w , i , r : rwtable : o) : dryWet(dw)  with{
  dw = B : >(0);
  w = 1 : + ~ %(88200) : int;
  i = _;
  size = X/189*15000+1000;
  rphas = (Y/100+0.2) : + ~ %(size); // phasor à la bonne vitesse
  r = rphas : +(p) : int;
  o = _ : *(sin(((rphas)/size)*3.14));
  np = (rphas <: _, mem : <), _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
  p = noise : + (1) : *(30000) :  +((w<44100) * 44100) : np : min (70000) : max (1000);
};

filter(X,Y,B) = _ <:  _, moog_vcf(reson,fc): dryWet(B) with {
  fc = X : smooth(0.99) : /(189) : *(2000) : +(50);
  reson = Y : /(189) : min(0.99);
};

smoothDelay(X,Y,B) = _ <: _ , + ~ (sdelay(131072, 256, t) : *(f)) : dryWet(B) with{
  t = X/189*13000+5000 ;
  f = Y/189 : min(0.99) : max(0) : smooth(0.99);
};

reverb(X,Y,B) = _ <: _, (_ , mono_freeverb((X/200), 0.5, 1-(Y/200), 0.5) : dryWet((Y)/200)) : dryWet(B);

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
		hand = hslider("VolH", 4, 0, 100, 1) : /(10) : int : automat(360, 5, 0.0);
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

numDeNoeud = 6;

process = harpe(0.5,11,38) <:
                  par(i, numDeNoeud,
                    ((looper2(hslider("opt%i",0,0,4,1)) :
                      satu(hslider("SatX%i",50,0,200,0.1), hslider("SatY%i",0,0,200,0.1),button("SatB%i")) :
                      munger(hslider("MunX%i",50,0,200,0.1), hslider("MunY%i",0,0,200,0.1),button("MunB%i")) :
                      smoothDelay(hslider("DelX%i",100,0,200,0.1), hslider("DelY%i",0,0,200,0.1),button("DelB%i")) :
                      filter(hslider("FilX%i",150,0,200,0.1), hslider("FilY%i",0,0,200,0.1),button("FilB%i")) :
    				          reverb(hslider("RevX%i",200,0,200,0.1), hslider("RevY%i",0,0,200,0.1),button("RevB%i")) :
                      volume(hslider("Vol%i", 0, 0, 100, 0.1)) <:
                      attach(_, (abs : max ~ -(0.01) : hbargraph("audioLevel%i",-1,10)))),
                    rayon(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)),
      							angle(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)) :
                    map(3)))
                  :> decoderStereo(3), (Metronome <: _,_) :> _,_ ;
