import("math.lib");
import("music.lib");
import("filter.lib");
import("effect.lib");
import("hoa.lib");
import("instrument.lib");

//General
phasor(f) = f/SR : (+,1.0:fmod) ~ _;
metro(f) = phasor(f) <: _,mem : < ;
transpose (w, x, s, sig)  =
	fdelay1s(d,sig)*fmin(d/x,1) + fdelay1s(d+w,sig)*(1-fmin(d/x,1))
	   	with {
			i = 1 - pow(2, s/12);
			d = i : (+ : +(w) : fmod(_,w)) ~ _;
	        };

rayon(x,y) = (y : smooth(0.999)) , ((x : smooth(0.999)) *(-1)) : pow(2), pow(2) : + : pow(1/2);
angle(x,y) = ((x : smooth(0.999)) *(-1)) , (y : smooth(0.999)) : atan2;

// Effets !

transpositeur(Mov) = transpose(256, 256, (Mov : smooth(0.99) : -(80) : /(15.6) : *(-1)));
saturator(Mov) = cubicnl((Mov : smooth(0.99) : -(80) : /(120)),0);
filter(Mov) = moog_vcf(0.99,(Mov : smooth(0.99): -(80) : *(6)) : +(30));
resonant(Mov) = _ <:  resonlp((Mov : smooth(0.99) : -(80) : *(2) : +(200)),600,0.6),
                      resonlp((Mov : smooth(0.99) : -(80) : *(3) : +(200)),600,0.5),
                      resonlp((Mov : smooth(0.99) : -(80) : *(4) : +(200)),600,0.4),
                      resonlp((Mov : smooth(0.99) : -(80) : *(5) : +(200)),600,0.3):> _;
smoothdelay(Mov, Vol) = par(i, 2, voice(Mov, Vol)) with
	{
		voice(Mov,Vol) 	= (+ : sdelay(N, interp, (Mov : -(80) : *(8)) : *(SR : /(1000.0)))) ~ *(Vol/101.0);
		N 		= int(2^19);
		interp 	= 10*SR/1000.0;
	}; // Smooth Delay by Y.Orlarey
reverb(Mov) = monoReverb(0.5, 0.5, (Mov : smooth(0.99) : -(80) : /(120)), 0);
volume(Vol) = *(Vol : smooth(0.999));

dryWet(Vol) = interpolate(Vol : /(100) : smooth(0.999));

numDeNoeud = 6;

metro(f) = phasor(f) <: _,mem : < ;
phasor(f) = f/SR : (+,1.0:fmod) ~ _;
sah(t) = metro(1/(t/1000)), _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
// Tous les effets les controleur entre 80 et 200 !!
mtof(mid) = 2 : pow((mid : -(69)): /(12)) : *(440) : smooth(0.99);
gen(dec) = osc(mtof((noise : @(dec) : +(1) : *(20) : +(40)) : sah(200))) : *(asr(0.01, 100, 0.1, pulsen(0.1*SR,0.2*SR)));

Noeud = par(i, numDeNoeud, (
							map(3,(
										gen(i) : *(noise : @(i) : +(1) : /(2) : sah(200) : <(hslider("Vol%i", 0, 0, 100, 0.1)/100) : smooth(0.99))
              			<: _ , transpositeur(hslider("OctMov%i",100,80,200,1)) : dryWet(hslider("OctVol%i",0,0,100,1))
              			<: _ , saturator(hslider("SatMov%i",100,80,200,1)) : dryWet(hslider("SatVol%i",0,0,100,1))
										<: _ , filter(hslider("FilMov%i",100,80,200,1)) : dryWet(hslider("FilVol%i",0,0,100,1))
										<: _ , resonant(hslider("ResMov%i",100,80,200,1)) : dryWet(hslider("ResVol%i",0,0,100,1))
										<: smoothdelay(hslider("DelMov%i",100,80,200,1),hslider("DelVol%i",0,0,100,1))
										:> _ <: _ , reverb(hslider("RevMov%i",100,80,200,1)) : dryWet(hslider("RevVol%i",0,0,100,1))
              			: volume(hslider("Vol%i", 0, 0, 100, 0.1))),
									rayon(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)),
									angle(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)))
							: decoderStereo(3))) :> _,_;

process =  Noeud;

//process = osc(440) : *(hslider("volume",0,0,1,0.01)) ;
/*
process = _ <: if((int(hslider("opt%1",0,0,3,1)), 3 : <), 0, 1) , _ , looper(int(hslider("opt%1",0,0,3,1)))
	: select2
	: *((if((int(hslider("opt%1",0,0,3,1)), 1 : <), 0, 1))
	: smooth(0.99))
	<: _ , transpositeur(hslider("OctMov",100,80,200,1)) : dryWet(hslider("OctVol",0,0,100,1))
	<: _ , saturator(hslider("SatMov",100,80,200,1)) : dryWet(hslider("SatVol",0,0,100,1))
	<: _ , filter(hslider("FilMov",100,80,200,1)) : dryWet(hslider("FilVol",0,0,100,1))
	<: _ , resonant(hslider("ResMov",100,80,200,1)) : dryWet(hslider("ResVol",0,0,100,1))
	<: smoothdelay(hslider("DelMov",100,80,200,1),hslider("DelVol",0,0,100,1))
	:> _
;*/

// Définition de la freeverb

combtuningL1    = 1116;
combtuningL2    = 1188;
combtuningL3    = 1277;
combtuningL4    = 1356;
combtuningL5    = 1422;
combtuningL6    = 1491;
combtuningL7    = 1557;
combtuningL8    = 1617;

allpasstuningL1 = 556;
allpasstuningL2 = 441;
allpasstuningL3 = 341;
allpasstuningL4 = 225;

// Comb and Allpass filters
//-------------------------

allpass(dt,fb) = (_,_ <: (*(fb),_:+:@(dt)), -) ~ _ : (!,_);

comb(dt, fb, damp) = (+:@(dt)) ~ (*(1-damp) : (+ ~ *(damp)) : *(fb));

// Reverb components
//------------------

monoReverb(fb1, fb2, damp, spread)
    = _ <:  comb(combtuningL1+spread, fb1, damp),
            comb(combtuningL2+spread, fb1, damp),
            comb(combtuningL3+spread, fb1, damp),
            comb(combtuningL4+spread, fb1, damp),
            comb(combtuningL5+spread, fb1, damp),
            comb(combtuningL6+spread, fb1, damp),
            comb(combtuningL7+spread, fb1, damp),
            comb(combtuningL8+spread, fb1, damp)
        +>
            allpass (allpasstuningL1+spread, fb2)
        :   allpass (allpasstuningL2+spread, fb2)
        :   allpass (allpasstuningL3+spread, fb2)
        :   allpass (allpasstuningL4+spread, fb2)
        ;

//process = par(i, 6, hslider("volume%i",0,0,1,0.01));
