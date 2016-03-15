import("math.lib");
import("music.lib");
import("instrument.lib");
import("filter.lib");
import("effect.lib");
import("hoa.lib");


MetVolume = vslider("VolV",0,0,100,0.01)/(100);
MetVit = vslider("VolS",10,0,100,0.01)/100*4+1;
MetPhasor = (MetVit/100) : + ~ %(1000);
Metronome = osc(440), asr(0.01, 100, 0.9, MetPhasor < 500) : * <: attach(_, (abs : max ~ -(0.01) : hbargraph("metLevel",-1,1))) : *(MetVolume);
process = Metronome <: _,_;
