import("math.lib");
import("music.lib");
import("instrument.lib");
import("filter.lib");
import("effect.lib");
import("hoa.lib");

// Looper > Fre > Mun >

phasor(f) = f/SR : (+,1.0:fmod) ~ _;
metro(f) = phasor(f) <: _,mem : < ;
sah(f) = metro(f), _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
sah2(bang) = bang, _ : ((_,_ <: !,_,_,!), _ : select2) ~ _;
dryWet(Vol) = interpolate(Vol : smooth(0.999));

rayon(x,y) = (y : smooth(0.999)) , ((x : smooth(0.999)) *(-1)) : pow(2), pow(2) : + : pow(1/2);
angle(x,y) = ((x : smooth(0.999)) *(-1)) , (y : smooth(0.999)) : atan2;

volume(Vol) = *(Vol : smooth(0.999));

MetPhasor = (10/100) : + ~ %(1000);

looper2(sel) = _ : *(min(1, sel)) <: *(sel : <(3) : smooth(0.99)), rwtable(441000, 0.0, w, i, r) :> _ with {
  rec = int(sel) : ==(2) : sah2(MetPhasor <: (_, mem) : <) <: _, 1 , (_ : @(100)) : _ , - : *;
  play = int(sel) : ==(3) : sah2(MetPhasor <: (_, mem) : <) <: _, 1 , (_ : @(100)) : _ , - : *;
  w = max(0, 1 - abs(int(sel)-2)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (rec, _, 0 : select2 : %(441000)) : int;
  i = _;
  size = max(0, 1 - abs(int(sel)-2)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (rec, _, 0 : select2) : max(100);
  r = max(0, 1 - abs(int(sel)-3)) : sah2(MetPhasor <: (_, mem) : <) : + ~ (play, _, 0 : select2 : %(size)) :int;
};

freeze(X,Y,B) = _ <: _,(4420, 0.0, w, i, r : rwtable <: @(9500), @(19000), _ :> fil : *(50)) : dryWet(dw) with{
  fil = bandpass12e((((X :smooth(0.999))/189*3000)+50),(((X :smooth(0.999))/189*3000)+1000));
  dw = B : >(0);
  keep = B : >(0) <: _, 1 , (_ : @(4410)) : _ , - : *;
  w = 1 : + ~ (keep, _, 0 : select2) : min(4410) : int;
  i = _ : *(sin(( (1 : + ~(keep,_, 0 : select2) : %(4410)) /4410)*3.14));
  r = (Y/100+0.2) : + ~ (keep, _, 0 : select2) : %(4410) : int;
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

ringM(X,Y,B) = _ <: _, _ , sin(phasor(X*2+30)*6.28) : _ , (* : +~ *(min(Y/189, 0.99))) : dryWet(B);

reson(X,Y,B) = _ <:_ ,(_ <: par(i, 4, (resonlp((X/189*500 : smooth(0.99) : *(i+1) : +(200)), X/189*100+50,0.6))) :> _) : dryWet(B);

reverb(X,Y,B) = _ <: _ , (_ ,(satrev : _,!) : dryWet((X+Y)/400)) : dryWet(B);

numDeNoeud = 6;

process = _ <: par(i, numDeNoeud, (
							map(3,(
				          looper2(hslider("opt%i", 0, 0, 4, 1)) :
                  freeze(hslider("FreX%i",100,80,200,0.1), hslider("FreY%i",0,0,100,0.1), button("FreB%i")) :
				          munger(hslider("MunX%i",100,80,200,0.1), hslider("MunY%i",0,0,100,0.1), button("MunB%i")) :
				          reson(hslider("ResX%i",100,80,200,0.1), hslider("ResY%i",0,0,100,0.1), button("ResB%i")) :
				          ringM(hslider("RinX%i",100,80,200,0.1), hslider("RinY%i",0,0,100,0.1), button("RinB%i")) :
				          reverb(hslider("RevX%i",100,80,200,0.1), hslider("RevY%i",0,0,100,0.1), button("RevB%i")) :
                  volume(hslider("Vol%i", 0, 0, 100, 0.1))),
								rayon(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)),
								angle(hslider("MovX%i",0,-15,15,0.01), hslider("MovY%i",5,-15,15,0.01)))))
              :> _,_,_,_,_,_,_;
