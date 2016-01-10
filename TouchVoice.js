/* ------------------------------------------------------------
Code generated with Faust 2.0.a41 (http://faust.grame.fr)
------------------------------------------------------------ */
/*
 faust2webaudio

 Primarily written by Myles Borins
 During the Spring 2013 offering of Music 420b with Julius Smith
 A bit during the Summer of 2013 with the help of Joshua Kit Clayton
 And finally a sprint during the late fall of 2013 to get everything working
 A Special thanks to Yann Orlarey and Stéphane Letz

 faust2webaudio is distributed under the terms the MIT or GPL2 Licenses.
 Choose the license that best suits your project. The text of the MIT and GPL
 licenses are at the root directory.

 Additional code : GRAME 2014

 */

'use strict';

var faust = faust || {};



function TouchVoiceModule(global, foreign, buffer) {

	'use asm';

	var HEAP32 = new global.Int32Array(buffer);
	var HEAPF32 = new global.Float32Array(buffer);

	var imul = global.Math.imul;
	var log = global.Math.log;

	var atan2f = global.Math.atan2;
	var cosf = global.Math.cos;
	var floorf = global.Math.floor;
	var max = global.Math.max;
	var min = global.Math.min;
	var powf = global.Math.pow;
	var sinf = global.Math.sin;
	function faustpower2_f(value) {
		value = +(value);
		return +((value * value));

	}

	function fmodf(x, y) { x = +x; y = +y; return +(x % y); }
	function log10f(a) { a = +a; return +(+log(a) / +log(10.)); }

	function getNumInputsTouchVoiceSIG0(dsp) {
		dsp = dsp | 0;
		return 0;
	}

	function getNumOutputsTouchVoiceSIG0(dsp) {
		dsp = dsp | 0;
		return 1;
	}

	function instanceInitTouchVoiceSIG0(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		var i2 = 0;
		for (i2 = 0; (((i2 | 0) < 2) | 0); i2 = (((i2 | 0) + 1) | 0)) {
			HEAP32[dsp + 1839476 + ((i2 | 0) << 2) >> 2] = 0;

		}

	}

	function fillTouchVoiceSIG0(dsp, count, output) {
		dsp = dsp | 0;
		count = count | 0;
		output = output | 0;
		var i = 0;
		for (i = 0; (((i | 0) < (count | 0)) | 0); i = (((i | 0) + 1) | 0)) {
			HEAP32[dsp + 1839476 + (0 << 2) >> 2] = ((1 + (HEAP32[dsp + 1839476 + (1 << 2) >> 2] | 0)) | 0);
			HEAPF32[output + ((i | 0) << 2) >> 2] = +(sinf(+(9.58738e-05 * +((((HEAP32[dsp + 1839476 + (0 << 2) >> 2] | 0) - 1) | 0)))));
			HEAP32[dsp + 1839476 + (1 << 2) >> 2] = (HEAP32[dsp + 1839476 + (0 << 2) >> 2] | 0);

		}

	}

	function getNumInputs(dsp) {
		dsp = dsp | 0;
		return 0;
	}

	function getNumOutputs(dsp) {
		dsp = dsp | 0;
		return 2;
	}

	function classInit(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		instanceInitTouchVoiceSIG0(dsp, (samplingFreq | 0));
		fillTouchVoiceSIG0(dsp, 65536, (dsp + 0 | 0));

	}

	function instanceInit(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		var i0 = 0;
		var i1 = 0;
		var i3 = 0;
		var i4 = 0;
		var i5 = 0;
		var i6 = 0;
		var i7 = 0;
		var i8 = 0;
		var i9 = 0;
		var i10 = 0;
		var i11 = 0;
		var i12 = 0;
		var i13 = 0;
		var i14 = 0;
		var i15 = 0;
		var i16 = 0;
		var i17 = 0;
		var i18 = 0;
		var i19 = 0;
		var i20 = 0;
		var i21 = 0;
		var i22 = 0;
		var i23 = 0;
		var i24 = 0;
		var i25 = 0;
		var i26 = 0;
		var i27 = 0;
		var i28 = 0;
		var i29 = 0;
		var i30 = 0;
		var i31 = 0;
		var i32 = 0;
		var i33 = 0;
		var i34 = 0;
		var i35 = 0;
		var i36 = 0;
		var i37 = 0;
		var i38 = 0;
		var i39 = 0;
		var i40 = 0;
		var i41 = 0;
		var i42 = 0;
		var i43 = 0;
		var i44 = 0;
		var i45 = 0;
		var i46 = 0;
		var i47 = 0;
		var i48 = 0;
		var i49 = 0;
		var i50 = 0;
		var i51 = 0;
		HEAP32[dsp + 1839492 >> 2] = (samplingFreq | 0);
		HEAPF32[dsp + 1839484 >> 2] = +(0.);
		for (i0 = 0; (((i0 | 0) < 2) | 0); i0 = (((i0 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839132 + ((i0 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839488 >> 2] = +(0.);
		for (i1 = 0; (((i1 | 0) < 2) | 0); i1 = (((i1 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839140 + ((i1 | 0) << 2) >> 2] = 0.;

		}
		HEAP32[dsp + 1839496 >> 2] = ((min(192000, ((max(1, (HEAP32[dsp + 1839492 >> 2] | 0))) | 0))) | 0);
		HEAPF32[dsp + 1839500 >> 2] = +((HEAP32[dsp + 1839496 >> 2] | 0));
		HEAPF32[dsp + 1839504 >> 2] = +(200. / +(HEAPF32[dsp + 1839500 >> 2]));
		HEAPF32[dsp + 1839508 >> 2] = +(4. / +(HEAPF32[dsp + 1839500 >> 2]));
		for (i3 = 0; (((i3 | 0) < 2) | 0); i3 = (((i3 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839148 + ((i3 | 0) << 2) >> 2] = 0.;

		}
		HEAP32[dsp + 1839512 >> 2] = 0;
		for (i4 = 0; (((i4 | 0) < 1024) | 0); i4 = (((i4 | 0) + 1) | 0)) {
			HEAP32[dsp + 1835008 + ((i4 | 0) << 2) >> 2] = 0;

		}
		for (i5 = 0; (((i5 | 0) < 7) | 0); i5 = (((i5 | 0) + 1) | 0)) {
			HEAP32[dsp + 1839104 + ((i5 | 0) << 2) >> 2] = 0;

		}
		for (i6 = 0; (((i6 | 0) < 2) | 0); i6 = (((i6 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839156 + ((i6 | 0) << 2) >> 2] = 0.;

		}
		for (i7 = 0; (((i7 | 0) < 2) | 0); i7 = (((i7 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839164 + ((i7 | 0) << 2) >> 2] = 0.;

		}
		for (i8 = 0; (((i8 | 0) < 2) | 0); i8 = (((i8 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839172 + ((i8 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839516 >> 2] = +(0.);
		for (i9 = 0; (((i9 | 0) < 2) | 0); i9 = (((i9 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839180 + ((i9 | 0) << 2) >> 2] = 0.;

		}
		for (i10 = 0; (((i10 | 0) < 65536) | 0); i10 = (((i10 | 0) + 1) | 0)) {
			HEAPF32[dsp + 262144 + ((i10 | 0) << 2) >> 2] = 0.;

		}
		HEAP32[dsp + 1839520 >> 2] = ~~(+(0.333333 * +((HEAP32[dsp + 1839496 >> 2] | 0))));
		for (i11 = 0; (((i11 | 0) < 2) | 0); i11 = (((i11 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839188 + ((i11 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839524 >> 2] = +(0.);
		for (i12 = 0; (((i12 | 0) < 2) | 0); i12 = (((i12 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839196 + ((i12 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839528 >> 2] = +(0.);
		for (i13 = 0; (((i13 | 0) < 2) | 0); i13 = (((i13 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839204 + ((i13 | 0) << 2) >> 2] = 0.;

		}
		for (i14 = 0; (((i14 | 0) < 2) | 0); i14 = (((i14 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839212 + ((i14 | 0) << 2) >> 2] = 0.;

		}
		for (i15 = 0; (((i15 | 0) < 2) | 0); i15 = (((i15 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839220 + ((i15 | 0) << 2) >> 2] = 0.;

		}
		for (i16 = 0; (((i16 | 0) < 2) | 0); i16 = (((i16 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839228 + ((i16 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839532 >> 2] = +(0.);
		for (i17 = 0; (((i17 | 0) < 2) | 0); i17 = (((i17 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839236 + ((i17 | 0) << 2) >> 2] = 0.;

		}
		for (i18 = 0; (((i18 | 0) < 65536) | 0); i18 = (((i18 | 0) + 1) | 0)) {
			HEAPF32[dsp + 524288 + ((i18 | 0) << 2) >> 2] = 0.;

		}
		for (i19 = 0; (((i19 | 0) < 2) | 0); i19 = (((i19 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839244 + ((i19 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839536 >> 2] = +(0.);
		for (i20 = 0; (((i20 | 0) < 2) | 0); i20 = (((i20 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839252 + ((i20 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839540 >> 2] = +(0.);
		for (i21 = 0; (((i21 | 0) < 2) | 0); i21 = (((i21 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839260 + ((i21 | 0) << 2) >> 2] = 0.;

		}
		for (i22 = 0; (((i22 | 0) < 2) | 0); i22 = (((i22 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839268 + ((i22 | 0) << 2) >> 2] = 0.;

		}
		for (i23 = 0; (((i23 | 0) < 2) | 0); i23 = (((i23 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839276 + ((i23 | 0) << 2) >> 2] = 0.;

		}
		for (i24 = 0; (((i24 | 0) < 2) | 0); i24 = (((i24 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839284 + ((i24 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839544 >> 2] = +(0.);
		for (i25 = 0; (((i25 | 0) < 2) | 0); i25 = (((i25 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839292 + ((i25 | 0) << 2) >> 2] = 0.;

		}
		for (i26 = 0; (((i26 | 0) < 65536) | 0); i26 = (((i26 | 0) + 1) | 0)) {
			HEAPF32[dsp + 786432 + ((i26 | 0) << 2) >> 2] = 0.;

		}
		for (i27 = 0; (((i27 | 0) < 2) | 0); i27 = (((i27 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839300 + ((i27 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839548 >> 2] = +(0.);
		for (i28 = 0; (((i28 | 0) < 2) | 0); i28 = (((i28 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839308 + ((i28 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839552 >> 2] = +(0.);
		for (i29 = 0; (((i29 | 0) < 2) | 0); i29 = (((i29 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839316 + ((i29 | 0) << 2) >> 2] = 0.;

		}
		for (i30 = 0; (((i30 | 0) < 2) | 0); i30 = (((i30 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839324 + ((i30 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839556 >> 2] = +(0.);
		for (i31 = 0; (((i31 | 0) < 2) | 0); i31 = (((i31 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839332 + ((i31 | 0) << 2) >> 2] = 0.;

		}
		for (i32 = 0; (((i32 | 0) < 2) | 0); i32 = (((i32 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839340 + ((i32 | 0) << 2) >> 2] = 0.;

		}
		for (i33 = 0; (((i33 | 0) < 2) | 0); i33 = (((i33 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839348 + ((i33 | 0) << 2) >> 2] = 0.;

		}
		for (i34 = 0; (((i34 | 0) < 65536) | 0); i34 = (((i34 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1048576 + ((i34 | 0) << 2) >> 2] = 0.;

		}
		for (i35 = 0; (((i35 | 0) < 2) | 0); i35 = (((i35 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839356 + ((i35 | 0) << 2) >> 2] = 0.;

		}
		for (i36 = 0; (((i36 | 0) < 2) | 0); i36 = (((i36 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839364 + ((i36 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839560 >> 2] = +(0.);
		for (i37 = 0; (((i37 | 0) < 2) | 0); i37 = (((i37 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839372 + ((i37 | 0) << 2) >> 2] = 0.;

		}
		for (i38 = 0; (((i38 | 0) < 2) | 0); i38 = (((i38 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839380 + ((i38 | 0) << 2) >> 2] = 0.;

		}
		for (i39 = 0; (((i39 | 0) < 2) | 0); i39 = (((i39 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839388 + ((i39 | 0) << 2) >> 2] = 0.;

		}
		for (i40 = 0; (((i40 | 0) < 65536) | 0); i40 = (((i40 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1310720 + ((i40 | 0) << 2) >> 2] = 0.;

		}
		for (i41 = 0; (((i41 | 0) < 2) | 0); i41 = (((i41 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839396 + ((i41 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839564 >> 2] = +(0.);
		for (i42 = 0; (((i42 | 0) < 2) | 0); i42 = (((i42 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839404 + ((i42 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839568 >> 2] = +(0.);
		for (i43 = 0; (((i43 | 0) < 2) | 0); i43 = (((i43 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839412 + ((i43 | 0) << 2) >> 2] = 0.;

		}
		for (i44 = 0; (((i44 | 0) < 2) | 0); i44 = (((i44 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839420 + ((i44 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839572 >> 2] = +(0.);
		for (i45 = 0; (((i45 | 0) < 2) | 0); i45 = (((i45 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839428 + ((i45 | 0) << 2) >> 2] = 0.;

		}
		for (i46 = 0; (((i46 | 0) < 2) | 0); i46 = (((i46 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839436 + ((i46 | 0) << 2) >> 2] = 0.;

		}
		for (i47 = 0; (((i47 | 0) < 2) | 0); i47 = (((i47 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839444 + ((i47 | 0) << 2) >> 2] = 0.;

		}
		for (i48 = 0; (((i48 | 0) < 65536) | 0); i48 = (((i48 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1572864 + ((i48 | 0) << 2) >> 2] = 0.;

		}
		for (i49 = 0; (((i49 | 0) < 2) | 0); i49 = (((i49 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839452 + ((i49 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839576 >> 2] = +(0.);
		for (i50 = 0; (((i50 | 0) < 2) | 0); i50 = (((i50 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839460 + ((i50 | 0) << 2) >> 2] = 0.;

		}
		HEAPF32[dsp + 1839580 >> 2] = +(0.);
		for (i51 = 0; (((i51 | 0) < 2) | 0); i51 = (((i51 | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839468 + ((i51 | 0) << 2) >> 2] = 0.;

		}

	}

	function init(dsp, samplingFreq) {
		dsp = dsp | 0;
		samplingFreq = samplingFreq | 0;
		classInit(dsp, samplingFreq);
		instanceInit(dsp, samplingFreq);
	}

	function setValue(dsp, offset, value) {
		dsp = dsp | 0;
		offset = offset | 0;
		value = +value;
		HEAPF32[dsp + offset >> 2] = value;
	}

	function getValue(dsp, offset) {
		dsp = dsp | 0;
		offset = offset | 0;
		return +HEAPF32[dsp + offset >> 2];
	}

	function compute(dsp, count, inputs, outputs) {
		dsp = dsp | 0;
		count = count | 0;
		inputs = inputs | 0;
		outputs = outputs | 0;
		var output0 = 0;
		var output1 = 0;
		var fSlow0 = 0.;
		var fSlow1 = 0.;
		var fSlow2 = 0.;
		var fSlow3 = 0.;
		var fSlow4 = 0.;
		var fSlow5 = 0.;
		var fSlow6 = 0.;
		var fSlow7 = 0.;
		var fSlow8 = 0.;
		var fSlow9 = 0.;
		var fSlow10 = 0.;
		var fSlow11 = 0.;
		var fSlow12 = 0.;
		var fSlow13 = 0.;
		var fSlow14 = 0.;
		var fSlow15 = 0.;
		var fSlow16 = 0.;
		var fSlow17 = 0.;
		var i = 0;
		var fTemp0 = 0.;
		var fTemp1 = 0.;
		var iTemp2 = 0;
		var iTemp3 = 0;
		var fTemp4 = 0.;
		var fTemp5 = 0.;
		var fTemp6 = 0.;
		var fTemp7 = 0.;
		var fTemp8 = 0.;
		var fTemp9 = 0.;
		var fTemp10 = 0.;
		var fTemp11 = 0.;
		var fTemp12 = 0.;
		var fTemp13 = 0.;
		var fTemp14 = 0.;
		var fTemp15 = 0.;
		var fTemp16 = 0.;
		var fTemp17 = 0.;
		var fTemp18 = 0.;
		var fTemp19 = 0.;
		var fTemp20 = 0.;
		var fTemp21 = 0.;
		var fTemp22 = 0.;
		var fTemp23 = 0.;
		var fTemp24 = 0.;
		var fTemp25 = 0.;
		var fTemp26 = 0.;
		var fTemp27 = 0.;
		var fTemp28 = 0.;
		var fTemp29 = 0.;
		var fTemp30 = 0.;
		var fTemp31 = 0.;
		var fTemp32 = 0.;
		var fTemp33 = 0.;
		var fTemp34 = 0.;
		var iTemp35 = 0;
		var fSel0 = 0.;
		var fTemp36 = 0.;
		var fTemp37 = 0.;
		var fTemp38 = 0.;
		var fTemp39 = 0.;
		var fTemp40 = 0.;
		var iTemp41 = 0;
		var iTemp42 = 0;
		var fTemp43 = 0.;
		var fTemp44 = 0.;
		var fTemp45 = 0.;
		var fTemp46 = 0.;
		var fTemp47 = 0.;
		var fTemp48 = 0.;
		var fTemp49 = 0.;
		var fTemp50 = 0.;
		var fTemp51 = 0.;
		var fTemp52 = 0.;
		var fTemp53 = 0.;
		var fTemp54 = 0.;
		var fTemp55 = 0.;
		var fTemp56 = 0.;
		var fTemp57 = 0.;
		var fTemp58 = 0.;
		var fTemp59 = 0.;
		var fTemp60 = 0.;
		var fTemp61 = 0.;
		var fTemp62 = 0.;
		var fTemp63 = 0.;
		var fTemp64 = 0.;
		var fTemp65 = 0.;
		var fTemp66 = 0.;
		var fTemp67 = 0.;
		var fTemp68 = 0.;
		var fTemp69 = 0.;
		var fTemp70 = 0.;
		var fTemp71 = 0.;
		var fTemp72 = 0.;
		var fTemp73 = 0.;
		var fTemp74 = 0.;
		var fTemp75 = 0.;
		var fTemp76 = 0.;
		var fTemp77 = 0.;
		var fTemp78 = 0.;
		var iTemp79 = 0;
		var iTemp80 = 0;
		var fTemp81 = 0.;
		var fTemp82 = 0.;
		var fTemp83 = 0.;
		var fTemp84 = 0.;
		var fTemp85 = 0.;
		var fTemp86 = 0.;
		var fTemp87 = 0.;
		var fTemp88 = 0.;
		var fTemp89 = 0.;
		var fTemp90 = 0.;
		var fTemp91 = 0.;
		var fTemp92 = 0.;
		var fTemp93 = 0.;
		var fTemp94 = 0.;
		var fTemp95 = 0.;
		var fTemp96 = 0.;
		var fTemp97 = 0.;
		var fTemp98 = 0.;
		var fTemp99 = 0.;
		var fTemp100 = 0.;
		var fTemp101 = 0.;
		var fTemp102 = 0.;
		var fTemp103 = 0.;
		var fTemp104 = 0.;
		var fTemp105 = 0.;
		var fTemp106 = 0.;
		var fTemp107 = 0.;
		var fTemp108 = 0.;
		var fTemp109 = 0.;
		var fTemp110 = 0.;
		var fTemp111 = 0.;
		var fTemp112 = 0.;
		var fTemp113 = 0.;
		var fTemp114 = 0.;
		var iTemp115 = 0;
		var iTemp116 = 0;
		var fTemp117 = 0.;
		var fTemp118 = 0.;
		var fTemp119 = 0.;
		var fTemp120 = 0.;
		var fTemp121 = 0.;
		var fTemp122 = 0.;
		var fTemp123 = 0.;
		var fTemp124 = 0.;
		var fTemp125 = 0.;
		var fTemp126 = 0.;
		var fTemp127 = 0.;
		var fTemp128 = 0.;
		var fTemp129 = 0.;
		var fTemp130 = 0.;
		var fTemp131 = 0.;
		var fTemp132 = 0.;
		var fTemp133 = 0.;
		var fTemp134 = 0.;
		var fTemp135 = 0.;
		var fTemp136 = 0.;
		var fTemp137 = 0.;
		var fTemp138 = 0.;
		var fTemp139 = 0.;
		var fTemp140 = 0.;
		var fTemp141 = 0.;
		var fTemp142 = 0.;
		var fTemp143 = 0.;
		var fTemp144 = 0.;
		var fTemp145 = 0.;
		var fTemp146 = 0.;
		var fTemp147 = 0.;
		var fTemp148 = 0.;
		var fTemp149 = 0.;
		var fSel1 = 0.;
		var fTemp150 = 0.;
		var fTemp151 = 0.;
		var fTemp152 = 0.;
		var fTemp153 = 0.;
		var iTemp154 = 0;
		var iTemp155 = 0;
		var fTemp156 = 0.;
		var fTemp157 = 0.;
		var fTemp158 = 0.;
		var fTemp159 = 0.;
		var fTemp160 = 0.;
		var fTemp161 = 0.;
		var fTemp162 = 0.;
		var fTemp163 = 0.;
		var fTemp164 = 0.;
		var fTemp165 = 0.;
		var fTemp166 = 0.;
		var fTemp167 = 0.;
		var fTemp168 = 0.;
		var fTemp169 = 0.;
		var fTemp170 = 0.;
		var fTemp171 = 0.;
		var fTemp172 = 0.;
		var fTemp173 = 0.;
		var fTemp174 = 0.;
		var fTemp175 = 0.;
		var fTemp176 = 0.;
		var fTemp177 = 0.;
		var fTemp178 = 0.;
		var fTemp179 = 0.;
		var fTemp180 = 0.;
		var fTemp181 = 0.;
		var fTemp182 = 0.;
		var fTemp183 = 0.;
		var fTemp184 = 0.;
		var fTemp185 = 0.;
		var fTemp186 = 0.;
		var fTemp187 = 0.;
		var fTemp188 = 0.;
		var fTemp189 = 0.;
		var iTemp190 = 0;
		var iTemp191 = 0;
		var fTemp192 = 0.;
		var fTemp193 = 0.;
		var fTemp194 = 0.;
		var fTemp195 = 0.;
		var fTemp196 = 0.;
		var fTemp197 = 0.;
		var fTemp198 = 0.;
		var fTemp199 = 0.;
		var fTemp200 = 0.;
		var fTemp201 = 0.;
		var fTemp202 = 0.;
		var fTemp203 = 0.;
		var fTemp204 = 0.;
		var fTemp205 = 0.;
		var fTemp206 = 0.;
		var fTemp207 = 0.;
		var fTemp208 = 0.;
		var fTemp209 = 0.;
		var fTemp210 = 0.;
		var fTemp211 = 0.;
		var fTemp212 = 0.;
		var fTemp213 = 0.;
		var fTemp214 = 0.;
		var fTemp215 = 0.;
		var fTemp216 = 0.;
		var fTemp217 = 0.;
		var fTemp218 = 0.;
		var fTemp219 = 0.;
		var fTemp220 = 0.;
		var fTemp221 = 0.;
		var fTemp222 = 0.;
		var j0 = 6;
		output0 = (HEAP32[outputs + (0 << 2) >> 2] | 0);
		output1 = (HEAP32[outputs + (1 << 2) >> 2] | 0);
		fSlow0 = +(0.001 * +(+(HEAPF32[dsp + 1839484 >> 2])));
		fSlow1 = +(0.001 * +(+(HEAPF32[dsp + 1839488 >> 2])));
		fSlow2 = +(+(HEAPF32[dsp + 1839516 >> 2]));
		fSlow3 = +(0.001 * +(+(HEAPF32[dsp + 1839524 >> 2])));
		fSlow4 = +(0.001 * +(+(HEAPF32[dsp + 1839528 >> 2])));
		fSlow5 = +(+(HEAPF32[dsp + 1839532 >> 2]));
		fSlow6 = +(0.001 * +(+(HEAPF32[dsp + 1839536 >> 2])));
		fSlow7 = +(0.001 * +(+(HEAPF32[dsp + 1839540 >> 2])));
		fSlow8 = +(+(HEAPF32[dsp + 1839544 >> 2]));
		fSlow9 = +(0.001 * +(+(HEAPF32[dsp + 1839548 >> 2])));
		fSlow10 = +(0.001 * +(+(HEAPF32[dsp + 1839552 >> 2])));
		fSlow11 = +(+(HEAPF32[dsp + 1839556 >> 2]));
		fSlow12 = +(+(HEAPF32[dsp + 1839560 >> 2]));
		fSlow13 = +(0.001 * +(+(HEAPF32[dsp + 1839564 >> 2])));
		fSlow14 = +(0.001 * +(+(HEAPF32[dsp + 1839568 >> 2])));
		fSlow15 = +(+(HEAPF32[dsp + 1839572 >> 2]));
		fSlow16 = +(0.001 * +(+(HEAPF32[dsp + 1839576 >> 2])));
		fSlow17 = +(0.001 * +(+(HEAPF32[dsp + 1839580 >> 2])));
		for (i = 0; (((i | 0) < (count | 0)) | 0); i = (((i | 0) + 1) | 0)) {
			HEAPF32[dsp + 1839132 + (0 << 2) >> 2] = +(+(fSlow0) + +(0.999 * +(HEAPF32[dsp + 1839132 + (1 << 2) >> 2])));
			fTemp0 = +(0. - +(HEAPF32[dsp + 1839132 + (0 << 2) >> 2]));
			HEAPF32[dsp + 1839140 + (0 << 2) >> 2] = +(+(fSlow1) + +(0.999 * +(HEAPF32[dsp + 1839140 + (1 << 2) >> 2])));
			fTemp1 = +(powf(+(+(faustpower2_f(+(fTemp0))) + +(faustpower2_f(+(HEAPF32[dsp + 1839140 + (0 << 2) >> 2])))), 0.5));
			iTemp2 = ((+(fTemp1) > 1.) | 0);
			iTemp3 = ((+(fTemp1) < 1.) | 0);
			fTemp4 = +(+((iTemp2 | 0)) + +(+(fTemp1) * +((iTemp3 | 0))));
			fTemp5 = +(1. + +(1.38629 * +(0. - +(+(fTemp4) - 1.))));
			fTemp6 = +(2. * +(fTemp4));
			fTemp7 = +(+(2. * +(+(+(fTemp4) * +(((+(fTemp6) > 0.) | 0))) * +(((+(fTemp6) <= 1.) | 0)))) + +(((+(fTemp6) > 1.) | 0)));
			fTemp8 = +(atan2f(+(fTemp0), +(HEAPF32[dsp + 1839140 + (0 << 2) >> 2])));
			fTemp9 = +(+(fTemp7) * +(cosf(+(fTemp8))));
			fTemp10 = +(0.285714 * +(fTemp9));
			fTemp11 = +(1.38629 * +(fTemp4));
			fTemp12 = +(+(fTemp11) - 0.693147);
			fTemp13 = +(2.4663 * +(fTemp12));
			fTemp14 = +(+(2.4663 * +(+(+(fTemp12) * +(((+(fTemp13) > 0.) | 0))) * +(((+(fTemp13) <= 1.) | 0)))) + +(((+(fTemp13) > 1.) | 0)));
			fTemp15 = +(2. * +(fTemp8));
			fTemp16 = +(+(fTemp14) * +(cosf(+(fTemp15))));
			fTemp17 = +(0.285714 * +(fTemp16));
			fTemp18 = +(+(fTemp11) - 1.09861);
			fTemp19 = +(3.47606 * +(fTemp18));
			fTemp20 = +(+(3.47606 * +(+(+(fTemp18) * +(((+(fTemp19) > 0.) | 0))) * +(((+(fTemp19) <= 1.) | 0)))) + +(((+(fTemp19) > 1.) | 0)));
			fTemp21 = +(3. * +(fTemp8));
			fTemp22 = +(+(fTemp20) * +(cosf(+(fTemp21))));
			fTemp23 = +(0.285714 * +(fTemp22));
			fTemp24 = +(0.707107 * +(+(+(+(fTemp10) + 0.142857) + +(fTemp17)) + +(fTemp23)));
			fTemp25 = +(+(sinf(+(fTemp8))) * +(fTemp7));
			fTemp26 = +(0.202031 * +(fTemp25));
			fTemp27 = +(+(sinf(+(fTemp15))) * +(fTemp14));
			fTemp28 = +(0.285714 * +(fTemp27));
			fTemp29 = +(+(sinf(+(fTemp21))) * +(fTemp20));
			fTemp30 = +(0.202031 * +(fTemp22));
			fTemp31 = +(0.285714 * +(fTemp25));
			fTemp32 = +(0.285714 * +(fTemp29));
			fTemp33 = +(0.202031 * +(fTemp9));
			fTemp34 = +(+(HEAPF32[dsp + 1839508 >> 2]) + +(HEAPF32[dsp + 1839148 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839148 + (0 << 2) >> 2] = +(+(fTemp34) - +(floorf(+(fTemp34))));
			iTemp35 = ((+(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839148 + (0 << 2) >> 2]))) << 2) >> 2]) > 0.9999) | 0);
			HEAP32[dsp + 1835008 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 1023) | 0) << 2) >> 2] = (iTemp35 | 0);
			HEAP32[dsp + 1839104 + (0 << 2) >> 2] = ((12345 + (imul(1103515245, (HEAP32[dsp + 1839104 + (1 << 2) >> 2] | 0)) | 0)) | 0);
			fSel0 = 0.;
			if (((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0) != 0) | 0) {
				fSel0 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (6 << 2) >> 2] | 0)));

			} else {
				fSel0 = +(HEAPF32[dsp + 1839156 + (1 << 2) >> 2]);

			}
			HEAPF32[dsp + 1839156 + (0 << 2) >> 2] = +(fSel0);
			fTemp36 = +(+(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839156 + (0 << 2) >> 2])))) + +(HEAPF32[dsp + 1839164 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839164 + (0 << 2) >> 2] = +(+(fTemp36) - +(floorf(+(fTemp36))));
			fTemp37 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (5 << 2) >> 2] | 0)));
			HEAPF32[dsp + 1839172 + (0 << 2) >> 2] = +((iTemp35 | 0)?+(fTemp37):+(HEAPF32[dsp + 1839172 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839180 + (0 << 2) >> 2] = +(+(0.001 * +(((+(HEAPF32[dsp + 1839172 + (0 << 2) >> 2]) < +(fSlow2)) | 0))) + +(0.999 * +(HEAPF32[dsp + 1839180 + (1 << 2) >> 2])));
			HEAPF32[dsp + 262144 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(+(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839164 + (0 << 2) >> 2]))) << 2) >> 2]) * +(HEAPF32[dsp + 1839180 + (0 << 2) >> 2])) + +(HEAPF32[dsp + 1839188 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839188 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 262144 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			fTemp38 = +(+(+(faustpower2_f(+(fTemp1))) * +((iTemp2 | 0))) + +((iTemp3 | 0)));
			HEAPF32[dsp + 1839196 + (0 << 2) >> 2] = +(+(fSlow3) + +(0.999 * +(HEAPF32[dsp + 1839196 + (1 << 2) >> 2])));
			fTemp39 = +(0. - +(HEAPF32[dsp + 1839196 + (0 << 2) >> 2]));
			HEAPF32[dsp + 1839204 + (0 << 2) >> 2] = +(+(fSlow4) + +(0.999 * +(HEAPF32[dsp + 1839204 + (1 << 2) >> 2])));
			fTemp40 = +(powf(+(+(faustpower2_f(+(fTemp39))) + +(faustpower2_f(+(HEAPF32[dsp + 1839204 + (0 << 2) >> 2])))), 0.5));
			iTemp41 = ((+(fTemp40) > 1.) | 0);
			iTemp42 = ((+(fTemp40) < 1.) | 0);
			fTemp43 = +(+((iTemp41 | 0)) + +(+(fTemp40) * +((iTemp42 | 0))));
			fTemp44 = +(1.38629 * +(fTemp43));
			fTemp45 = +(+(fTemp44) - 0.693147);
			fTemp46 = +(2.4663 * +(fTemp45));
			fTemp47 = +(+(2.4663 * +(+(+(fTemp45) * +(((+(fTemp46) > 0.) | 0))) * +(((+(fTemp46) <= 1.) | 0)))) + +(((+(fTemp46) > 1.) | 0)));
			fTemp48 = +(atan2f(+(fTemp39), +(HEAPF32[dsp + 1839204 + (0 << 2) >> 2])));
			fTemp49 = +(2. * +(fTemp48));
			fTemp50 = +(+(fTemp47) * +(cosf(+(fTemp49))));
			fTemp51 = +(0.285714 * +(fTemp50));
			fTemp52 = +(2. * +(fTemp43));
			fTemp53 = +(+(2. * +(+(+(fTemp43) * +(((+(fTemp52) > 0.) | 0))) * +(((+(fTemp52) <= 1.) | 0)))) + +(((+(fTemp52) > 1.) | 0)));
			fTemp54 = +(+(sinf(+(fTemp48))) * +(fTemp53));
			fTemp55 = +(+(fTemp53) * +(cosf(+(fTemp48))));
			fTemp56 = +(0.285714 * +(fTemp55));
			fTemp57 = +(+(sinf(+(fTemp49))) * +(fTemp47));
			fTemp58 = +(3. * +(fTemp48));
			fTemp59 = +(+(fTemp44) - 1.09861);
			fTemp60 = +(3.47606 * +(fTemp59));
			fTemp61 = +(+(3.47606 * +(+(+(fTemp59) * +(((+(fTemp60) > 0.) | 0))) * +(((+(fTemp60) <= 1.) | 0)))) + +(((+(fTemp60) > 1.) | 0)));
			fTemp62 = +(+(sinf(+(fTemp58))) * +(fTemp61));
			fTemp63 = +(+(fTemp61) * +(cosf(+(fTemp58))));
			fTemp64 = +(0.285714 * +(fTemp63));
			fTemp65 = +(0.707107 * +(+(+(0.142857 + +(fTemp56)) + +(fTemp51)) + +(fTemp64)));
			fTemp66 = +(0.202031 * +(fTemp54));
			fTemp67 = +(0.285714 * +(fTemp57));
			fTemp68 = +(0.202031 * +(fTemp63));
			fTemp69 = +(0.285714 * +(fTemp54));
			fTemp70 = +(0.285714 * +(fTemp62));
			fTemp71 = +(0.202031 * +(fTemp55));
			fTemp72 = +(1. + +(1.38629 * +(0. - +(+(fTemp43) - 1.))));
			fTemp73 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (4 << 2) >> 2] | 0)));
			HEAPF32[dsp + 1839212 + (0 << 2) >> 2] = +((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0)?+(fTemp73):+(HEAPF32[dsp + 1839212 + (1 << 2) >> 2]));
			fTemp74 = +(+(HEAPF32[dsp + 1839220 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839212 + (0 << 2) >> 2])))));
			HEAPF32[dsp + 1839220 + (0 << 2) >> 2] = +(+(fTemp74) - +(floorf(+(fTemp74))));
			fTemp75 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (3 << 2) >> 2] | 0)));
			HEAPF32[dsp + 1839228 + (0 << 2) >> 2] = +((iTemp35 | 0)?+(fTemp75):+(HEAPF32[dsp + 1839228 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839236 + (0 << 2) >> 2] = +(+(0.999 * +(HEAPF32[dsp + 1839236 + (1 << 2) >> 2])) + +(0.001 * +(((+(HEAPF32[dsp + 1839228 + (0 << 2) >> 2]) < +(fSlow5)) | 0))));
			HEAPF32[dsp + 524288 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(HEAPF32[dsp + 1839244 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839220 + (0 << 2) >> 2]))) << 2) >> 2]) * +(HEAPF32[dsp + 1839236 + (0 << 2) >> 2])));
			HEAPF32[dsp + 1839244 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 524288 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			fTemp76 = +(+(+(faustpower2_f(+(fTemp40))) * +((iTemp41 | 0))) + +((iTemp42 | 0)));
			HEAPF32[dsp + 1839252 + (0 << 2) >> 2] = +(+(fSlow6) + +(0.999 * +(HEAPF32[dsp + 1839252 + (1 << 2) >> 2])));
			fTemp77 = +(0. - +(HEAPF32[dsp + 1839252 + (0 << 2) >> 2]));
			HEAPF32[dsp + 1839260 + (0 << 2) >> 2] = +(+(fSlow7) + +(0.999 * +(HEAPF32[dsp + 1839260 + (1 << 2) >> 2])));
			fTemp78 = +(powf(+(+(faustpower2_f(+(fTemp77))) + +(faustpower2_f(+(HEAPF32[dsp + 1839260 + (0 << 2) >> 2])))), 0.5));
			iTemp79 = ((+(fTemp78) > 1.) | 0);
			iTemp80 = ((+(fTemp78) < 1.) | 0);
			fTemp81 = +(+((iTemp79 | 0)) + +(+(fTemp78) * +((iTemp80 | 0))));
			fTemp82 = +(1. + +(1.38629 * +(0. - +(+(fTemp81) - 1.))));
			fTemp83 = +(2. * +(fTemp81));
			fTemp84 = +(+(2. * +(+(+(fTemp81) * +(((+(fTemp83) > 0.) | 0))) * +(((+(fTemp83) <= 1.) | 0)))) + +(((+(fTemp83) > 1.) | 0)));
			fTemp85 = +(atan2f(+(fTemp77), +(HEAPF32[dsp + 1839260 + (0 << 2) >> 2])));
			fTemp86 = +(+(fTemp84) * +(cosf(+(fTemp85))));
			fTemp87 = +(0.285714 * +(fTemp86));
			fTemp88 = +(1.38629 * +(fTemp81));
			fTemp89 = +(+(fTemp88) - 0.693147);
			fTemp90 = +(2.4663 * +(fTemp89));
			fTemp91 = +(+(2.4663 * +(+(+(fTemp89) * +(((+(fTemp90) > 0.) | 0))) * +(((+(fTemp90) <= 1.) | 0)))) + +(((+(fTemp90) > 1.) | 0)));
			fTemp92 = +(2. * +(fTemp85));
			fTemp93 = +(+(fTemp91) * +(cosf(+(fTemp92))));
			fTemp94 = +(0.285714 * +(fTemp93));
			fTemp95 = +(+(fTemp88) - 1.09861);
			fTemp96 = +(3.47606 * +(fTemp95));
			fTemp97 = +(+(3.47606 * +(+(+(fTemp95) * +(((+(fTemp96) > 0.) | 0))) * +(((+(fTemp96) <= 1.) | 0)))) + +(((+(fTemp96) > 1.) | 0)));
			fTemp98 = +(3. * +(fTemp85));
			fTemp99 = +(+(fTemp97) * +(cosf(+(fTemp98))));
			fTemp100 = +(0.285714 * +(fTemp99));
			fTemp101 = +(0.707107 * +(+(+(+(fTemp87) + 0.142857) + +(fTemp94)) + +(fTemp100)));
			fTemp102 = +(+(sinf(+(fTemp85))) * +(fTemp84));
			fTemp103 = +(0.202031 * +(fTemp102));
			fTemp104 = +(+(sinf(+(fTemp92))) * +(fTemp91));
			fTemp105 = +(0.285714 * +(fTemp104));
			fTemp106 = +(+(sinf(+(fTemp98))) * +(fTemp97));
			fTemp107 = +(0.202031 * +(fTemp99));
			fTemp108 = +(0.285714 * +(fTemp102));
			fTemp109 = +(0.285714 * +(fTemp106));
			fTemp110 = +(0.202031 * +(fTemp86));
			HEAPF32[dsp + 1839268 + (0 << 2) >> 2] = +((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0)?+(fTemp37):+(HEAPF32[dsp + 1839268 + (1 << 2) >> 2]));
			fTemp111 = +(+(HEAPF32[dsp + 1839276 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839268 + (0 << 2) >> 2])))));
			HEAPF32[dsp + 1839276 + (0 << 2) >> 2] = +(+(fTemp111) - +(floorf(+(fTemp111))));
			HEAPF32[dsp + 1839284 + (0 << 2) >> 2] = +((iTemp35 | 0)?+(fTemp73):+(HEAPF32[dsp + 1839284 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839292 + (0 << 2) >> 2] = +(+(0.999 * +(HEAPF32[dsp + 1839292 + (1 << 2) >> 2])) + +(0.001 * +(((+(HEAPF32[dsp + 1839284 + (0 << 2) >> 2]) < +(fSlow8)) | 0))));
			HEAPF32[dsp + 786432 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(HEAPF32[dsp + 1839300 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839276 + (0 << 2) >> 2]))) << 2) >> 2]) * +(HEAPF32[dsp + 1839292 + (0 << 2) >> 2])));
			HEAPF32[dsp + 1839300 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 786432 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			fTemp112 = +(+(+(faustpower2_f(+(fTemp78))) * +((iTemp79 | 0))) + +((iTemp80 | 0)));
			HEAPF32[dsp + 1839308 + (0 << 2) >> 2] = +(+(fSlow9) + +(0.999 * +(HEAPF32[dsp + 1839308 + (1 << 2) >> 2])));
			HEAPF32[dsp + 1839316 + (0 << 2) >> 2] = +(+(fSlow10) + +(0.999 * +(HEAPF32[dsp + 1839316 + (1 << 2) >> 2])));
			fTemp113 = +(0. - +(HEAPF32[dsp + 1839316 + (0 << 2) >> 2]));
			fTemp114 = +(powf(+(+(faustpower2_f(+(HEAPF32[dsp + 1839308 + (0 << 2) >> 2]))) + +(faustpower2_f(+(fTemp113)))), 0.5));
			iTemp115 = ((+(fTemp114) > 1.) | 0);
			iTemp116 = ((+(fTemp114) < 1.) | 0);
			fTemp117 = +(+((iTemp115 | 0)) + +(+(fTemp114) * +((iTemp116 | 0))));
			fTemp118 = +(1.38629 * +(fTemp117));
			fTemp119 = +(+(fTemp118) - 0.693147);
			fTemp120 = +(2.4663 * +(fTemp119));
			fTemp121 = +(+(2.4663 * +(+(+(fTemp119) * +(((+(fTemp120) > 0.) | 0))) * +(((+(fTemp120) <= 1.) | 0)))) + +(((+(fTemp120) > 1.) | 0)));
			fTemp122 = +(atan2f(+(fTemp113), +(HEAPF32[dsp + 1839308 + (0 << 2) >> 2])));
			fTemp123 = +(2. * +(fTemp122));
			fTemp124 = +(+(fTemp121) * +(cosf(+(fTemp123))));
			fTemp125 = +(2. * +(fTemp117));
			fTemp126 = +(+(2. * +(+(+(fTemp117) * +(((+(fTemp125) > 0.) | 0))) * +(((+(fTemp125) <= 1.) | 0)))) + +(((+(fTemp125) > 1.) | 0)));
			fTemp127 = +(+(sinf(+(fTemp122))) * +(fTemp126));
			fTemp128 = +(0.202031 * +(fTemp127));
			fTemp129 = +(+(fTemp126) * +(cosf(+(fTemp122))));
			fTemp130 = +(+(sinf(+(fTemp123))) * +(fTemp121));
			fTemp131 = +(0.285714 * +(fTemp130));
			fTemp132 = +(3. * +(fTemp122));
			fTemp133 = +(+(fTemp118) - 1.09861);
			fTemp134 = +(3.47606 * +(fTemp133));
			fTemp135 = +(+(3.47606 * +(+(+(fTemp133) * +(((+(fTemp134) > 0.) | 0))) * +(((+(fTemp134) <= 1.) | 0)))) + +(((+(fTemp134) > 1.) | 0)));
			fTemp136 = +(+(sinf(+(fTemp132))) * +(fTemp135));
			fTemp137 = +(+(fTemp135) * +(cosf(+(fTemp132))));
			fTemp138 = +(0.202031 * +(fTemp137));
			fTemp139 = +(0.285714 * +(fTemp129));
			fTemp140 = +(0.285714 * +(fTemp124));
			fTemp141 = +(0.285714 * +(fTemp137));
			fTemp142 = +(0.707107 * +(+(+(0.142857 + +(fTemp139)) + +(fTemp140)) + +(fTemp141)));
			fTemp143 = +(0.285714 * +(fTemp127));
			fTemp144 = +(0.285714 * +(fTemp136));
			fTemp145 = +(0.202031 * +(fTemp129));
			fTemp146 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (2 << 2) >> 2] | 0)));
			HEAPF32[dsp + 1839324 + (0 << 2) >> 2] = +((iTemp35 | 0)?+(fTemp146):+(HEAPF32[dsp + 1839324 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839332 + (0 << 2) >> 2] = +(+(0.999 * +(HEAPF32[dsp + 1839332 + (1 << 2) >> 2])) + +(0.001 * +(((+(HEAPF32[dsp + 1839324 + (0 << 2) >> 2]) < +(fSlow11)) | 0))));
			HEAPF32[dsp + 1839340 + (0 << 2) >> 2] = +((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0)?+(fTemp75):+(HEAPF32[dsp + 1839340 + (1 << 2) >> 2]));
			fTemp147 = +(+(HEAPF32[dsp + 1839348 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839340 + (0 << 2) >> 2])))));
			HEAPF32[dsp + 1839348 + (0 << 2) >> 2] = +(+(fTemp147) - +(floorf(+(fTemp147))));
			HEAPF32[dsp + 1048576 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(HEAPF32[dsp + 1839356 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839332 + (0 << 2) >> 2]) * +(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839348 + (0 << 2) >> 2]))) << 2) >> 2])));
			HEAPF32[dsp + 1839356 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 1048576 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			fTemp148 = +(1. + +(1.38629 * +(0. - +(+(fTemp117) - 1.))));
			fTemp149 = +(+(+(faustpower2_f(+(fTemp114))) * +((iTemp115 | 0))) + +((iTemp116 | 0)));
			fSel1 = 0.;
			if (((iTemp35 | 0) != 0) | 0) {
				fSel1 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (0 << 2) >> 2] | 0)));

			} else {
				fSel1 = +(HEAPF32[dsp + 1839364 + (1 << 2) >> 2]);

			}
			HEAPF32[dsp + 1839364 + (0 << 2) >> 2] = +(fSel1);
			HEAPF32[dsp + 1839372 + (0 << 2) >> 2] = +(+(0.999 * +(HEAPF32[dsp + 1839372 + (1 << 2) >> 2])) + +(0.001 * +(((+(HEAPF32[dsp + 1839364 + (0 << 2) >> 2]) < +(fSlow12)) | 0))));
			fTemp150 = +(4.65661e-10 * +((HEAP32[dsp + 1839104 + (1 << 2) >> 2] | 0)));
			HEAPF32[dsp + 1839380 + (0 << 2) >> 2] = +((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0)?+(fTemp150):+(HEAPF32[dsp + 1839380 + (1 << 2) >> 2]));
			fTemp151 = +(+(HEAPF32[dsp + 1839388 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839380 + (0 << 2) >> 2])))));
			HEAPF32[dsp + 1839388 + (0 << 2) >> 2] = +(+(fTemp151) - +(floorf(+(fTemp151))));
			HEAPF32[dsp + 1310720 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(HEAPF32[dsp + 1839396 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839372 + (0 << 2) >> 2]) * +(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839388 + (0 << 2) >> 2]))) << 2) >> 2])));
			HEAPF32[dsp + 1839396 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 1310720 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			HEAPF32[dsp + 1839404 + (0 << 2) >> 2] = +(+(fSlow13) + +(0.999 * +(HEAPF32[dsp + 1839404 + (1 << 2) >> 2])));
			HEAPF32[dsp + 1839412 + (0 << 2) >> 2] = +(+(fSlow14) + +(0.999 * +(HEAPF32[dsp + 1839412 + (1 << 2) >> 2])));
			fTemp152 = +(0. - +(HEAPF32[dsp + 1839412 + (0 << 2) >> 2]));
			fTemp153 = +(powf(+(+(faustpower2_f(+(HEAPF32[dsp + 1839404 + (0 << 2) >> 2]))) + +(faustpower2_f(+(fTemp152)))), 0.5));
			iTemp154 = ((+(fTemp153) > 1.) | 0);
			iTemp155 = ((+(fTemp153) < 1.) | 0);
			fTemp156 = +(+((iTemp154 | 0)) + +(+(fTemp153) * +((iTemp155 | 0))));
			fTemp157 = +(1. + +(1.38629 * +(0. - +(+(fTemp156) - 1.))));
			fTemp158 = +(2. * +(fTemp156));
			fTemp159 = +(+(2. * +(+(+(fTemp156) * +(((+(fTemp158) > 0.) | 0))) * +(((+(fTemp158) <= 1.) | 0)))) + +(((+(fTemp158) > 1.) | 0)));
			fTemp160 = +(atan2f(+(fTemp152), +(HEAPF32[dsp + 1839404 + (0 << 2) >> 2])));
			fTemp161 = +(+(fTemp159) * +(cosf(+(fTemp160))));
			fTemp162 = +(0.285714 * +(fTemp161));
			fTemp163 = +(1.38629 * +(fTemp156));
			fTemp164 = +(+(fTemp163) - 0.693147);
			fTemp165 = +(2.4663 * +(fTemp164));
			fTemp166 = +(+(2.4663 * +(+(+(fTemp164) * +(((+(fTemp165) > 0.) | 0))) * +(((+(fTemp165) <= 1.) | 0)))) + +(((+(fTemp165) > 1.) | 0)));
			fTemp167 = +(2. * +(fTemp160));
			fTemp168 = +(+(fTemp166) * +(cosf(+(fTemp167))));
			fTemp169 = +(0.285714 * +(fTemp168));
			fTemp170 = +(+(fTemp163) - 1.09861);
			fTemp171 = +(3.47606 * +(fTemp170));
			fTemp172 = +(+(3.47606 * +(+(+(fTemp170) * +(((+(fTemp171) > 0.) | 0))) * +(((+(fTemp171) <= 1.) | 0)))) + +(((+(fTemp171) > 1.) | 0)));
			fTemp173 = +(3. * +(fTemp160));
			fTemp174 = +(+(fTemp172) * +(cosf(+(fTemp173))));
			fTemp175 = +(0.285714 * +(fTemp174));
			fTemp176 = +(0.707107 * +(+(+(0.142857 + +(fTemp162)) + +(fTemp169)) + +(fTemp175)));
			fTemp177 = +(+(sinf(+(fTemp160))) * +(fTemp159));
			fTemp178 = +(0.202031 * +(fTemp177));
			fTemp179 = +(+(sinf(+(fTemp167))) * +(fTemp166));
			fTemp180 = +(0.285714 * +(fTemp179));
			fTemp181 = +(+(sinf(+(fTemp173))) * +(fTemp172));
			fTemp182 = +(0.202031 * +(fTemp174));
			fTemp183 = +(0.285714 * +(fTemp177));
			fTemp184 = +(0.285714 * +(fTemp181));
			fTemp185 = +(0.202031 * +(fTemp161));
			fTemp186 = +(+(+(faustpower2_f(+(fTemp153))) * +((iTemp154 | 0))) + +((iTemp155 | 0)));
			HEAPF32[dsp + 1839420 + (0 << 2) >> 2] = +((iTemp35 | 0)?+(fTemp150):+(HEAPF32[dsp + 1839420 + (1 << 2) >> 2]));
			HEAPF32[dsp + 1839428 + (0 << 2) >> 2] = +(+(0.999 * +(HEAPF32[dsp + 1839428 + (1 << 2) >> 2])) + +(0.001 * +(((+(HEAPF32[dsp + 1839420 + (0 << 2) >> 2]) < +(fSlow15)) | 0))));
			HEAPF32[dsp + 1839436 + (0 << 2) >> 2] = +((HEAP32[dsp + 1835008 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - 1000) | 0) & 1023) | 0) << 2) >> 2] | 0)?+(fTemp146):+(HEAPF32[dsp + 1839436 + (1 << 2) >> 2]));
			fTemp187 = +(+(HEAPF32[dsp + 1839444 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839504 >> 2]) * +(1. + +(1. + +(HEAPF32[dsp + 1839436 + (0 << 2) >> 2])))));
			HEAPF32[dsp + 1839444 + (0 << 2) >> 2] = +(+(fTemp187) - +(floorf(+(fTemp187))));
			HEAPF32[dsp + 1572864 + ((((HEAP32[dsp + 1839512 >> 2] | 0) & 65535) | 0) << 2) >> 2] = +(+(HEAPF32[dsp + 1839452 + (1 << 2) >> 2]) + +(+(HEAPF32[dsp + 1839428 + (0 << 2) >> 2]) * +(HEAPF32[dsp + 0 + (~~(+(65536. * +(HEAPF32[dsp + 1839444 + (0 << 2) >> 2]))) << 2) >> 2])));
			HEAPF32[dsp + 1839452 + (0 << 2) >> 2] = +(0.5 * +(HEAPF32[dsp + 1572864 + ((((((HEAP32[dsp + 1839512 >> 2] | 0) - (HEAP32[dsp + 1839520 >> 2] | 0)) | 0) & 65535) | 0) << 2) >> 2]));
			HEAPF32[dsp + 1839460 + (0 << 2) >> 2] = +(+(fSlow16) + +(0.999 * +(HEAPF32[dsp + 1839460 + (1 << 2) >> 2])));
			HEAPF32[dsp + 1839468 + (0 << 2) >> 2] = +(+(fSlow17) + +(0.999 * +(HEAPF32[dsp + 1839468 + (1 << 2) >> 2])));
			fTemp188 = +(0. - +(HEAPF32[dsp + 1839468 + (0 << 2) >> 2]));
			fTemp189 = +(powf(+(+(faustpower2_f(+(HEAPF32[dsp + 1839460 + (0 << 2) >> 2]))) + +(faustpower2_f(+(fTemp188)))), 0.5));
			iTemp190 = ((+(fTemp189) > 1.) | 0);
			iTemp191 = ((+(fTemp189) < 1.) | 0);
			fTemp192 = +(+((iTemp190 | 0)) + +(+(fTemp189) * +((iTemp191 | 0))));
			fTemp193 = +(1. + +(1.38629 * +(0. - +(+(fTemp192) - 1.))));
			fTemp194 = +(2. * +(fTemp192));
			fTemp195 = +(+(2. * +(+(+(fTemp192) * +(((+(fTemp194) > 0.) | 0))) * +(((+(fTemp194) <= 1.) | 0)))) + +(((+(fTemp194) > 1.) | 0)));
			fTemp196 = +(atan2f(+(fTemp188), +(HEAPF32[dsp + 1839460 + (0 << 2) >> 2])));
			fTemp197 = +(+(fTemp195) * +(cosf(+(fTemp196))));
			fTemp198 = +(0.285714 * +(fTemp197));
			fTemp199 = +(1.38629 * +(fTemp192));
			fTemp200 = +(+(fTemp199) - 0.693147);
			fTemp201 = +(2.4663 * +(fTemp200));
			fTemp202 = +(+(2.4663 * +(+(+(fTemp200) * +(((+(fTemp201) > 0.) | 0))) * +(((+(fTemp201) <= 1.) | 0)))) + +(((+(fTemp201) > 1.) | 0)));
			fTemp203 = +(2. * +(fTemp196));
			fTemp204 = +(+(fTemp202) * +(cosf(+(fTemp203))));
			fTemp205 = +(0.285714 * +(fTemp204));
			fTemp206 = +(+(fTemp199) - 1.09861);
			fTemp207 = +(3.47606 * +(fTemp206));
			fTemp208 = +(+(3.47606 * +(+(+(fTemp206) * +(((+(fTemp207) > 0.) | 0))) * +(((+(fTemp207) <= 1.) | 0)))) + +(((+(fTemp207) > 1.) | 0)));
			fTemp209 = +(3. * +(fTemp196));
			fTemp210 = +(+(fTemp208) * +(cosf(+(fTemp209))));
			fTemp211 = +(0.285714 * +(fTemp210));
			fTemp212 = +(0.707107 * +(+(+(0.142857 + +(fTemp198)) + +(fTemp205)) + +(fTemp211)));
			fTemp213 = +(+(sinf(+(fTemp196))) * +(fTemp195));
			fTemp214 = +(0.202031 * +(fTemp213));
			fTemp215 = +(+(sinf(+(fTemp203))) * +(fTemp202));
			fTemp216 = +(0.285714 * +(fTemp215));
			fTemp217 = +(+(sinf(+(fTemp209))) * +(fTemp208));
			fTemp218 = +(0.202031 * +(fTemp210));
			fTemp219 = +(0.285714 * +(fTemp213));
			fTemp220 = +(0.285714 * +(fTemp217));
			fTemp221 = +(0.202031 * +(fTemp197));
			fTemp222 = +(+(+(faustpower2_f(+(fTemp189))) * +((iTemp190 | 0))) + +((iTemp191 | 0)));
			HEAPF32[output0 + ((i | 0) << 2) >> 2] = +(+(+(+(+(+(+(+(+(fTemp5) * +(+(+(+(+(fTemp24) + +(0.987688 * +(+(+(+(+(+(+(fTemp26) + 0.142857) + +(0.202031 * +(fTemp9))) + +(fTemp28)) + +(1.7495e-17 * +(fTemp16))) + +(0.202031 * +(fTemp29))) - +(fTemp30)))) + +(0.809017 * +(+(+(+(+(+(+(fTemp31) + 0.142857) + +(1.7495e-17 * +(fTemp9))) + +(3.49899e-17 * +(fTemp27))) - +(fTemp17)) - +(fTemp32)) - +(5.24849e-17 * +(fTemp22))))) + +(0.45399 * +(+(+(+(+(+(+(0.202031 * +(fTemp25)) + 0.142857) - +(fTemp33)) - +(fTemp28)) - +(5.24849e-17 * +(fTemp16))) + +(0.202031 * +(fTemp29))) + +(0.202031 * +(fTemp22))))) + +(1.22465e-16 * +(+(+(+(fTemp17) + +(+(+(+(3.49899e-17 * +(fTemp25)) + 0.142857) - +(fTemp10)) - +(6.99798e-17 * +(fTemp27)))) + +(1.0497e-16 * +(fTemp29))) - +(fTemp23))))) * +(HEAPF32[dsp + 1839188 + (0 << 2) >> 2])) / +(fTemp38)) + +(+(+(+(+(+(1.22465e-16 * +(+(+(+(fTemp51) + +(+(+(0.142857 + +(3.49899e-17 * +(fTemp54))) - +(fTemp56)) - +(6.99798e-17 * +(fTemp57)))) + +(1.0497e-16 * +(fTemp62))) - +(fTemp64))) + +(+(+(+(fTemp65) + +(0.987688 * +(+(+(+(1.7495e-17 * +(fTemp50)) + +(+(+(0.142857 + +(fTemp66)) + +(0.202031 * +(fTemp55))) + +(fTemp67))) + +(0.202031 * +(fTemp62))) - +(fTemp68)))) + +(0.809017 * +(+(+(+(+(+(0.142857 + +(fTemp69)) + +(1.7495e-17 * +(fTemp55))) + +(3.49899e-17 * +(fTemp57))) - +(fTemp51)) - +(fTemp70)) - +(5.24849e-17 * +(fTemp63))))) + +(0.45399 * +(+(+(+(+(+(0.142857 + +(0.202031 * +(fTemp54))) - +(fTemp71)) - +(fTemp67)) - +(5.24849e-17 * +(fTemp50))) + +(0.202031 * +(fTemp62))) + +(0.202031 * +(fTemp63)))))) * +(fTemp72)) * +(HEAPF32[dsp + 1839244 + (0 << 2) >> 2])) / +(fTemp76)) + +(+(+(+(fTemp82) * +(+(+(+(+(fTemp101) + +(0.987688 * +(+(+(+(+(+(+(fTemp103) + 0.142857) + +(0.202031 * +(fTemp86))) + +(fTemp105)) + +(1.7495e-17 * +(fTemp93))) + +(0.202031 * +(fTemp106))) - +(fTemp107)))) + +(0.809017 * +(+(+(+(+(+(+(fTemp108) + 0.142857) + +(1.7495e-17 * +(fTemp86))) + +(3.49899e-17 * +(fTemp104))) - +(fTemp94)) - +(fTemp109)) - +(5.24849e-17 * +(fTemp99))))) + +(0.45399 * +(+(+(+(+(+(+(0.202031 * +(fTemp102)) + 0.142857) - +(fTemp110)) - +(fTemp105)) - +(5.24849e-17 * +(fTemp93))) + +(0.202031 * +(fTemp106))) + +(0.202031 * +(fTemp99))))) + +(1.22465e-16 * +(+(+(+(fTemp94) + +(+(+(+(3.49899e-17 * +(fTemp102)) + 0.142857) - +(fTemp87)) - +(6.99798e-17 * +(fTemp104)))) + +(1.0497e-16 * +(fTemp106))) - +(fTemp100))))) * +(HEAPF32[dsp + 1839300 + (0 << 2) >> 2])) / +(fTemp112)))) + +(+(+(+(+(+(+(+(0.987688 * +(+(+(+(1.7495e-17 * +(fTemp124)) + +(+(+(0.142857 + +(fTemp128)) + +(0.202031 * +(fTemp129))) + +(fTemp131))) + +(0.202031 * +(fTemp136))) - +(fTemp138))) + +(fTemp142)) + +(0.809017 * +(+(+(+(+(+(+(fTemp143) + 0.142857) + +(1.7495e-17 * +(fTemp129))) + +(3.49899e-17 * +(fTemp130))) - +(fTemp140)) - +(fTemp144)) - +(5.24849e-17 * +(fTemp137))))) + +(0.45399 * +(+(+(+(+(+(+(0.202031 * +(fTemp127)) + 0.142857) - +(fTemp145)) - +(fTemp131)) - +(5.24849e-17 * +(fTemp124))) + +(0.202031 * +(fTemp136))) + +(0.202031 * +(fTemp137))))) + +(1.22465e-16 * +(+(+(+(+(+(+(3.49899e-17 * +(fTemp127)) + 0.142857) - +(fTemp139)) - +(6.99798e-17 * +(fTemp130))) + +(fTemp140)) + +(1.0497e-16 * +(fTemp136))) - +(fTemp141)))) * +(HEAPF32[dsp + 1839356 + (0 << 2) >> 2])) * +(fTemp148)) / +(fTemp149))) + +(+(+(+(HEAPF32[dsp + 1839396 + (0 << 2) >> 2]) * +(fTemp157)) * +(+(+(+(+(fTemp176) + +(0.987688 * +(+(+(+(+(+(0.142857 + +(fTemp178)) + +(0.202031 * +(fTemp161))) + +(fTemp180)) + +(1.7495e-17 * +(fTemp168))) + +(0.202031 * +(fTemp181))) - +(fTemp182)))) + +(0.809017 * +(+(+(+(+(+(0.142857 + +(fTemp183)) + +(1.7495e-17 * +(fTemp161))) + +(3.49899e-17 * +(fTemp179))) - +(fTemp169)) - +(fTemp184)) - +(5.24849e-17 * +(fTemp174))))) + +(0.45399 * +(+(+(+(+(+(0.142857 + +(0.202031 * +(fTemp177))) - +(fTemp185)) - +(fTemp180)) - +(5.24849e-17 * +(fTemp168))) + +(0.202031 * +(fTemp181))) + +(0.202031 * +(fTemp174))))) + +(1.22465e-16 * +(+(+(+(fTemp169) + +(+(+(0.142857 + +(3.49899e-17 * +(fTemp177))) - +(fTemp162)) - +(6.99798e-17 * +(fTemp179)))) + +(1.0497e-16 * +(fTemp181))) - +(fTemp175))))) / +(fTemp186))) + +(+(+(+(HEAPF32[dsp + 1839452 + (0 << 2) >> 2]) * +(fTemp193)) * +(+(+(+(+(fTemp212) + +(0.987688 * +(+(+(+(1.7495e-17 * +(fTemp204)) + +(+(+(0.142857 + +(fTemp214)) + +(0.202031 * +(fTemp197))) + +(fTemp216))) + +(0.202031 * +(fTemp217))) - +(fTemp218)))) + +(0.809017 * +(+(+(+(+(+(0.142857 + +(fTemp219)) + +(1.7495e-17 * +(fTemp197))) + +(3.49899e-17 * +(fTemp215))) - +(fTemp205)) - +(fTemp220)) - +(5.24849e-17 * +(fTemp210))))) + +(0.45399 * +(+(+(+(+(+(0.142857 + +(0.202031 * +(fTemp213))) - +(fTemp221)) - +(fTemp216)) - +(5.24849e-17 * +(fTemp204))) + +(0.202031 * +(fTemp217))) + +(0.202031 * +(fTemp210))))) + +(1.22465e-16 * +(+(+(+(fTemp205) + +(+(+(0.142857 + +(3.49899e-17 * +(fTemp213))) - +(fTemp198)) - +(6.99798e-17 * +(fTemp215)))) + +(1.0497e-16 * +(fTemp217))) - +(fTemp211))))) / +(fTemp222))));
			HEAPF32[output1 + ((i | 0) << 2) >> 2] = +(+(+(+(+(+(+(+(+(+(+(+(+(0.45399 * +(+(+(+(+(fTemp180) + +(+(0.142857 - +(fTemp178)) - +(0.202031 * +(fTemp161)))) + +(8.74748e-17 * +(fTemp168))) - +(0.202031 * +(fTemp181))) + +(0.202031 * +(fTemp174)))) + +(fTemp176)) + +(0.809017 * +(+(+(fTemp184) + +(+(+(+(0.142857 - +(fTemp183)) - +(5.24849e-17 * +(fTemp161))) + +(1.0497e-16 * +(fTemp179))) - +(fTemp169))) + +(1.57455e-16 * +(fTemp174))))) + +(0.987688 * +(+(+(+(+(+(fTemp185) + +(0.142857 - +(0.202031 * +(fTemp177)))) - +(fTemp180)) - +(1.22465e-16 * +(fTemp168))) - +(0.202031 * +(fTemp181))) - +(fTemp182)))) * +(HEAPF32[dsp + 1839396 + (0 << 2) >> 2])) * +(fTemp157)) / +(fTemp186)) + +(+(+(+(+(+(+(0.45399 * +(+(+(+(+(fTemp216) + +(+(0.142857 - +(fTemp214)) - +(0.202031 * +(fTemp197)))) + +(8.74748e-17 * +(fTemp204))) - +(0.202031 * +(fTemp217))) + +(0.202031 * +(fTemp210)))) + +(fTemp212)) + +(0.809017 * +(+(+(fTemp220) + +(+(+(+(0.142857 - +(fTemp219)) - +(5.24849e-17 * +(fTemp197))) + +(1.0497e-16 * +(fTemp215))) - +(fTemp205))) + +(1.57455e-16 * +(fTemp210))))) + +(0.987688 * +(+(+(+(+(+(fTemp221) + +(0.142857 - +(0.202031 * +(fTemp213)))) - +(fTemp216)) - +(1.22465e-16 * +(fTemp204))) - +(0.202031 * +(fTemp217))) - +(fTemp218)))) * +(HEAPF32[dsp + 1839452 + (0 << 2) >> 2])) * +(fTemp193)) / +(fTemp222))) + +(+(+(+(+(+(+(0.45399 * +(+(+(+(+(+(0.142857 - +(fTemp128)) - +(0.202031 * +(fTemp129))) + +(fTemp131)) + +(8.74748e-17 * +(fTemp124))) - +(0.202031 * +(fTemp136))) + +(0.202031 * +(fTemp137)))) + +(fTemp142)) + +(0.809017 * +(+(+(fTemp144) + +(+(+(1.0497e-16 * +(fTemp130)) + +(+(0.142857 - +(fTemp143)) - +(5.24849e-17 * +(fTemp129)))) - +(fTemp140))) + +(1.57455e-16 * +(fTemp137))))) + +(0.987688 * +(+(+(+(+(+(fTemp145) + +(0.142857 - +(0.202031 * +(fTemp127)))) - +(fTemp131)) - +(1.22465e-16 * +(fTemp124))) - +(0.202031 * +(fTemp136))) - +(fTemp138)))) * +(HEAPF32[dsp + 1839356 + (0 << 2) >> 2])) * +(fTemp148)) / +(fTemp149))) + +(+(+(+(+(+(+(0.45399 * +(+(+(+(+(+(0.142857 - +(fTemp66)) - +(0.202031 * +(fTemp55))) + +(fTemp67)) + +(8.74748e-17 * +(fTemp50))) - +(0.202031 * +(fTemp62))) + +(0.202031 * +(fTemp63)))) + +(fTemp65)) + +(0.809017 * +(+(+(+(+(+(0.142857 - +(fTemp69)) - +(5.24849e-17 * +(fTemp55))) + +(1.0497e-16 * +(fTemp57))) - +(fTemp51)) + +(fTemp70)) + +(1.57455e-16 * +(fTemp63))))) + +(0.987688 * +(+(+(+(+(+(0.142857 - +(0.202031 * +(fTemp54))) + +(fTemp71)) - +(fTemp67)) - +(1.22465e-16 * +(fTemp50))) - +(0.202031 * +(fTemp62))) - +(fTemp68)))) * +(fTemp72)) * +(HEAPF32[dsp + 1839244 + (0 << 2) >> 2])) / +(fTemp76))) + +(+(+(+(fTemp82) * +(+(+(+(fTemp101) + +(0.45399 * +(+(0.202031 * +(fTemp99)) + +(+(+(+(fTemp105) + +(+(0.142857 - +(fTemp103)) - +(0.202031 * +(fTemp86)))) + +(8.74748e-17 * +(fTemp93))) - +(0.202031 * +(fTemp106)))))) + +(0.809017 * +(+(+(fTemp109) + +(+(+(+(0.142857 - +(fTemp108)) - +(5.24849e-17 * +(fTemp86))) + +(1.0497e-16 * +(fTemp104))) - +(fTemp94))) + +(1.57455e-16 * +(fTemp99))))) + +(0.987688 * +(+(+(+(+(+(fTemp110) + +(0.142857 - +(0.202031 * +(fTemp102)))) - +(fTemp105)) - +(1.22465e-16 * +(fTemp93))) - +(0.202031 * +(fTemp106))) - +(fTemp107))))) * +(HEAPF32[dsp + 1839300 + (0 << 2) >> 2])) / +(fTemp112))) + +(+(+(+(fTemp5) * +(+(+(0.809017 * +(+(+(fTemp32) + +(+(+(+(0.142857 - +(fTemp31)) - +(5.24849e-17 * +(fTemp9))) + +(1.0497e-16 * +(fTemp27))) - +(fTemp17))) + +(1.57455e-16 * +(fTemp22)))) + +(+(fTemp24) + +(0.45399 * +(+(0.202031 * +(fTemp22)) + +(+(+(+(fTemp28) + +(+(0.142857 - +(fTemp26)) - +(0.202031 * +(fTemp9)))) + +(8.74748e-17 * +(fTemp16))) - +(0.202031 * +(fTemp29))))))) + +(0.987688 * +(+(+(+(+(+(fTemp33) + +(0.142857 - +(0.202031 * +(fTemp25)))) - +(fTemp28)) - +(1.22465e-16 * +(fTemp16))) - +(0.202031 * +(fTemp29))) - +(fTemp30))))) * +(HEAPF32[dsp + 1839188 + (0 << 2) >> 2])) / +(fTemp38))));
			HEAPF32[dsp + 1839132 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839132 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839140 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839140 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839148 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839148 + (0 << 2) >> 2]);
			HEAP32[dsp + 1839512 >> 2] = (((HEAP32[dsp + 1839512 >> 2] | 0) + 1) | 0);
			for (j0 = 6; (((j0 | 0) > 0) | 0); j0 = (((j0 | 0) - 1) | 0)) {
				HEAP32[dsp + 1839104 + ((j0 | 0) << 2) >> 2] = (HEAP32[dsp + 1839104 + ((((j0 | 0) - 1) | 0) << 2) >> 2] | 0);

			}
			HEAPF32[dsp + 1839156 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839156 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839164 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839164 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839172 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839172 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839180 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839180 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839188 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839188 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839196 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839196 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839204 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839204 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839212 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839212 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839220 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839220 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839228 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839228 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839236 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839236 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839244 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839244 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839252 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839252 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839260 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839260 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839268 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839268 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839276 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839276 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839284 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839284 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839292 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839292 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839300 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839300 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839308 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839308 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839316 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839316 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839324 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839324 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839332 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839332 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839340 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839340 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839348 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839348 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839356 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839356 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839364 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839364 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839372 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839372 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839380 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839380 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839388 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839388 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839396 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839396 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839404 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839404 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839412 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839412 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839420 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839420 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839428 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839428 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839436 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839436 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839444 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839444 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839452 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839452 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839460 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839460 + (0 << 2) >> 2]);
			HEAPF32[dsp + 1839468 + (1 << 2) >> 2] = +(HEAPF32[dsp + 1839468 + (0 << 2) >> 2]);

		}

	}

	return { getNumInputs : getNumInputs, getNumOutputs : getNumOutputs, classInit : classInit, instanceInit : instanceInit, init : init, setValue : setValue, getValue : getValue, compute : compute };
}

function getSizeTouchVoice() {
	return 1839584;
}

function getPathTableTouchVoice() {
	var pathTable = [];
	pathTable["/0x00/x6"] = 1839484;
	pathTable["/0x00/y6"] = 1839488;
	pathTable["/0x00/x3"] = 1839552;
	pathTable["/0x00/3Vol"] = 1839556;
	pathTable["/0x00/1Vol"] = 1839560;
	pathTable["/0x00/y1"] = 1839564;
	pathTable["/0x00/x1"] = 1839568;
	pathTable["/0x00/2Vol"] = 1839572;
	pathTable["/0x00/y2"] = 1839576;
	pathTable["/0x00/x2"] = 1839580;
	pathTable["/0x00/6Vol"] = 1839516;
	pathTable["/0x00/x4"] = 1839524;
	pathTable["/0x00/y4"] = 1839528;
	pathTable["/0x00/4Vol"] = 1839532;
	pathTable["/0x00/x5"] = 1839536;
	pathTable["/0x00/y5"] = 1839540;
	pathTable["/0x00/5Vol"] = 1839544;
	pathTable["/0x00/y3"] = 1839548;
	return pathTable;
}

function getJSONTouchVoice() {
	return "{  \"name\": \"\",  \"outputs\": \"2\",  \"meta\": [    { \"effect.lib/author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },   { \"effect.lib/copyright\": \"Julius O. Smith III\" },   { \"effect.lib/exciter_author\": \"Priyanka Shekar (pshekar@ccrma.stanford.edu)\" },   { \"effect.lib/exciter_copyright\": \"Copyright (c) 2013 Priyanka Shekar\" },   { \"effect.lib/exciter_license\": \"MIT License (MIT)\" },   { \"effect.lib/exciter_name\": \"Harmonic Exciter\" },   { \"effect.lib/exciter_version\": \"1.0\" },   { \"effect.lib/license\": \"STK-4.3\" },   { \"effect.lib/name\": \"Faust Audio Effect Library\" },   { \"effect.lib/version\": \"1.33\" },   { \"filter.lib/author\": \"Julius O. Smith (jos at ccrma.stanford.edu)\" },   { \"filter.lib/copyright\": \"Julius O. Smith III\" },   { \"filter.lib/license\": \"STK-4.3\" },   { \"filter.lib/name\": \"Faust Filter Library\" },   { \"filter.lib/reference\": \"https://ccrma.stanford.edu/~jos/filters/\" },   { \"filter.lib/version\": \"1.29\" },   { \"hoa.lib/author\": \"Pierre Guillot\" },   { \"hoa.lib/copyright\": \"2012-2013 Guillot, Paris, Colafrancesco, CICM labex art H2H, U. Paris 8\" },   { \"hoa.lib/name\": \"HOA\" },   { \"hoa.lib/title\": \"High Order Ambisonics library\" },   { \"instrument.lib/author\": \"Romain Michon (rmichon@ccrma.stanford.edu)\" },   { \"instrument.lib/copyright\": \"Romain Michon\" },   { \"instrument.lib/licence\": \"STK-4.3\" },   { \"instrument.lib/name\": \"Faust-STK Tools Library\" },   { \"instrument.lib/version\": \"1.0\" },   { \"math.lib/author\": \"GRAME\" },   { \"math.lib/copyright\": \"GRAME\" },   { \"math.lib/license\": \"LGPL with exception\" },   { \"math.lib/name\": \"Math Library\" },   { \"math.lib/version\": \"1.0\" },   { \"music.lib/author\": \"GRAME\" },   { \"music.lib/copyright\": \"GRAME\" },   { \"music.lib/license\": \"LGPL with exception\" },   { \"music.lib/name\": \"Music Library\" },   { \"music.lib/version\": \"1.0\" }  ],  \"ui\": [    {    \"type\": \"vgroup\",    \"label\": \"0x00\",    \"items\": [      {      \"type\": \"hslider\",      \"label\": \"1Vol\",      \"address\": \"/0x00/1Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"2Vol\",      \"address\": \"/0x00/2Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"3Vol\",      \"address\": \"/0x00/3Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"4Vol\",      \"address\": \"/0x00/4Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"5Vol\",      \"address\": \"/0x00/5Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"6Vol\",      \"address\": \"/0x00/6Vol\",      \"init\": \"0\",      \"min\": \"-1\",      \"max\": \"1\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x1\",      \"address\": \"/0x00/x1\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x2\",      \"address\": \"/0x00/x2\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x3\",      \"address\": \"/0x00/x3\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x4\",      \"address\": \"/0x00/x4\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x5\",      \"address\": \"/0x00/x5\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"x6\",      \"address\": \"/0x00/x6\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y1\",      \"address\": \"/0x00/y1\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y2\",      \"address\": \"/0x00/y2\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y3\",      \"address\": \"/0x00/y3\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y4\",      \"address\": \"/0x00/y4\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y5\",      \"address\": \"/0x00/y5\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     },     {      \"type\": \"hslider\",      \"label\": \"y6\",      \"address\": \"/0x00/y6\",      \"init\": \"0\",      \"min\": \"-10\",      \"max\": \"10\",      \"step\": \"0.01\"     }    ]   }  ] } ";
}

function metadataTouchVoice(m) {
	m.declare("effect.lib/author", "Julius O. Smith (jos at ccrma.stanford.edu)");
	m.declare("effect.lib/copyright", "Julius O. Smith III");
	m.declare("effect.lib/exciter_author", "Priyanka Shekar (pshekar@ccrma.stanford.edu)");
	m.declare("effect.lib/exciter_copyright", "Copyright (c) 2013 Priyanka Shekar");
	m.declare("effect.lib/exciter_license", "MIT License (MIT)");
	m.declare("effect.lib/exciter_name", "Harmonic Exciter");
	m.declare("effect.lib/exciter_version", "1.0");
	m.declare("effect.lib/license", "STK-4.3");
	m.declare("effect.lib/name", "Faust Audio Effect Library");
	m.declare("effect.lib/version", "1.33");
	m.declare("filter.lib/author", "Julius O. Smith (jos at ccrma.stanford.edu)");
	m.declare("filter.lib/copyright", "Julius O. Smith III");
	m.declare("filter.lib/license", "STK-4.3");
	m.declare("filter.lib/name", "Faust Filter Library");
	m.declare("filter.lib/reference", "https://ccrma.stanford.edu/~jos/filters/");
	m.declare("filter.lib/version", "1.29");
	m.declare("hoa.lib/author", "Pierre Guillot");
	m.declare("hoa.lib/copyright", "2012-2013 Guillot, Paris, Colafrancesco, CICM labex art H2H, U. Paris 8");
	m.declare("hoa.lib/name", "HOA");
	m.declare("hoa.lib/title", "High Order Ambisonics library");
	m.declare("instrument.lib/author", "Romain Michon (rmichon@ccrma.stanford.edu)");
	m.declare("instrument.lib/copyright", "Romain Michon");
	m.declare("instrument.lib/licence", "STK-4.3");
	m.declare("instrument.lib/name", "Faust-STK Tools Library");
	m.declare("instrument.lib/version", "1.0");
	m.declare("math.lib/author", "GRAME");
	m.declare("math.lib/copyright", "GRAME");
	m.declare("math.lib/license", "LGPL with exception");
	m.declare("math.lib/name", "Math Library");
	m.declare("math.lib/version", "1.0");
	m.declare("music.lib/author", "GRAME");
	m.declare("music.lib/copyright", "GRAME");
	m.declare("music.lib/license", "LGPL with exception");
	m.declare("music.lib/name", "Music Library");
	m.declare("music.lib/version", "1.0");
}


// Standard Faust DSP

faust.TouchVoice = function (context, buffer_size) {

    var buffer_size = 1024;
    var context = new window.AudioContext();

    var handler = null;
    var ins, outs;
    var numIn, numOut;

    var scriptProcessor;

    var dspInChannnels = [];
    var dspOutChannnels = [];

    // Keep JSON parsed object
    var jon_object = JSON.parse(getJSONTouchVoice());

    function getNumInputsAux ()
    {
        return (jon_object.inputs !== undefined) ? parseInt(jon_object.inputs) : 0;
    }

    function getNumOutputsAux ()
    {
        return (jon_object.outputs !== undefined) ? parseInt(jon_object.outputs) : 0;
    }

    // Memory allocator
    var ptr_size = 4;
    var sample_size = 4;

    function pow2limit (x)
    {
        var n = 2;
        while (n < x) { n = 2 * n; }
        return (n < 65536) ? 65536 : n; // Minimum = 64 kB
    }

    var memory_size = pow2limit(getSizeTouchVoice() + (getNumInputsAux() + getNumOutputsAux()) * (ptr_size + (buffer_size * sample_size)));

    var HEAP = new ArrayBuffer(memory_size);
    var HEAP32 = new Int32Array(HEAP);
    var HEAPF32 = new Float32Array(HEAP);

    console.log(HEAP);
    console.log(HEAP32);
    console.log(HEAPF32);

    // bargraph
    var ouputs_timer = 5;
    var ouputs_items = [];

    // input items
    var inputs_items = [];

    // Start of HEAP index
    var audio_heap_ptr = 0;

    // Setup pointers offset
    var audio_heap_ptr_inputs = audio_heap_ptr;
    var audio_heap_ptr_outputs = audio_heap_ptr_inputs + (getNumInputsAux() * ptr_size);

    // Setup buffer offset
    var audio_heap_inputs = audio_heap_ptr_outputs + (getNumOutputsAux() * ptr_size);
    var audio_heap_outputs = audio_heap_inputs + (getNumInputsAux() * buffer_size * sample_size);

    // Setup DSP offset
    var dsp_start = audio_heap_outputs + (getNumOutputsAux() * buffer_size * sample_size);

    // Start of DSP memory
    var dsp = dsp_start;

    // ASM module
    var factory = TouchVoiceModule(window, null, HEAP);
    console.log(factory);

    var pathTable = getPathTableTouchVoice();

    // Allocate table for 'setValue'
    var value_table = [];

    function update_outputs ()
    {
        if (ouputs_items.length > 0 && handler && ouputs_timer-- === 0) {
            ouputs_timer = 5;
            for (var i = 0; i < ouputs_items.length; i++) {
                handler(ouputs_items[i], factory.getValue(dsp, pathTable[ouputs_items[i]]));
            }
        }
    }

    function compute (e)
    {
        var i, j;

        // Read inputs
        for (i = 0; i < numIn; i++) {
            var input = e.inputBuffer.getChannelData(i);
            var dspInput = dspInChannnels[i];
            for (j = 0; j < input.length; j++) {
                dspInput[j] = input[j];
            }
        }

        // Update control state
        for (i = 0; i < inputs_items.length; i++) {
            var path = inputs_items[i];
            var values = value_table[path];
            factory.setValue(dsp, pathTable[path], values[0]);
            values[0] = values[1];
        }

        // Compute
        factory.compute(dsp, buffer_size, ins, outs);

        // Update bargraph
        update_outputs();

        // Write outputs
        for (i = 0; i < numOut; i++) {
            var output = e.outputBuffer.getChannelData(i);
            var dspOutput = dspOutChannnels[i];
            for (j = 0; j < output.length; j++) {
                output[j] = dspOutput[j];
            }
        }
    };

    // JSON parsing
    function parse_ui (ui)
    {
        for (var i = 0; i < ui.length; i++) {
            console.log(ui[i]);
            parse_group(ui[i]);
        }
    }

    function parse_group (group)
    {
        if (group.items) {
            parse_items(group.items);
        }
    }

    function parse_items (items)
    {
        var i;
        for (i = 0; i < items.length; i++) {
            parse_item(items[i]);
        }
    }

    function parse_item (item)
    {
        if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
            parse_items(item.items);
        } else if (item.type === "hbargraph" || item.type === "vbargraph") {
            // Keep bargraph adresses
            ouputs_items.push(item.address);
        } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
            // Keep inputs adresses
            inputs_items.push(item.address);
        }
    }

    function init ()
    {
        var i;

        // Get input / output counts
        numIn = getNumInputsAux();
        numOut = getNumOutputsAux();

        // Setup web audio context
        console.log("buffer_size %d", buffer_size);
        scriptProcessor = context.createScriptProcessor(buffer_size, numIn, numOut);
        scriptProcessor.onaudioprocess = compute;

        if (numIn > 0) {
            ins = audio_heap_ptr_inputs;
            for (i = 0; i < numIn; i++) {
                HEAP32[(ins >> 2) + i] = audio_heap_inputs + ((buffer_size * sample_size) * i);
            }

            var dspInChans = HEAP32.subarray(ins >> 2, (ins + numIn * ptr_size) >> 2);
            for (i = 0; i < numIn; i++) {
                dspInChannnels[i] = HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + buffer_size * sample_size) >> 2);
            }
        }

        if (numOut > 0) {
            outs = audio_heap_ptr_outputs;
            for (i = 0; i < numOut; i++) {
                HEAP32[(outs >> 2) + i] = audio_heap_outputs + ((buffer_size * sample_size) * i);
            }

            var dspOutChans = HEAP32.subarray(outs >> 2, (outs + numOut * ptr_size) >> 2);
            for (i = 0; i < numOut; i++) {
                dspOutChannnels[i] = HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + buffer_size * sample_size) >> 2);
            }
        }

        // bargraph
        parse_ui(jon_object.ui);

        // Init DSP
        factory.init(dsp, context.sampleRate);

        // Init 'value' table
        for (i = 0; i < inputs_items.length; i++) {
            var path = inputs_items[i];
            var values = new Float32Array(2);
            values[0] = values[1] = factory.getValue(dsp, pathTable[path]);
            value_table[path] = values;
        }
    }

    init();

    // External API
    return {

        getNumInputs : function ()
        {
            return getNumInputsAux();
        },

        getNumOutputs : function()
        {
            return getNumOutputsAux();
        },

        destroy : function  ()
        {
            // Nothing to do
        },

        // Connect/disconnect to another node
        connect : function (node)
        {
            if (node.getProcessor !== undefined) {
                scriptProcessor.connect(node.getProcessor());
            } else {
                scriptProcessor.connect(node);
            }
        },

        disconnect : function (node)
        {
            if (node.getProcessor !== undefined) {
                scriptProcessor.disconnect(node.getProcessor());
            } else {
                scriptProcessor.disconnect(node);
            }
        },

        setHandler : function (hd)
        {
            handler = hd;
        },

        start : function ()
        {
            scriptProcessor.connect(context.destination);
        },

        stop : function ()
        {
            scriptProcessor.disconnect(context.destination);
        },

        setValue : function (path, val)
        {
            var values = value_table[path];
            if (values) {
                if (factory.getValue(dsp, pathTable[path]) == values[0]) {
                    values[0] = val;
                }
                values[1] = val;
            }
        },

        getValue : function (path)
        {
            return factory.getValue(dsp, pathTable[path]);
        },

        controls : function()
        {
            return inputs_items;
        },

        json : function ()
        {
            return getJSONTouchVoice();
        },

        getProcessor : function ()
        {
            return scriptProcessor;
        }
    };
};
