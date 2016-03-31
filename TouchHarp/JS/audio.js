var isWebKitAudio = (typeof (webkitAudioContext) !== "undefined");
var audio_context = (isWebKitAudio) ? new webkitAudioContext() : new AudioContext();
var effetFaust = null;
var faustsvg = null;
var dsp_code = null;

function changeBufferSize(buffer_size)
{
    var new_buffer_size = buffer_size.options[buffer_size.selectedIndex].value;
    console.log(new_buffer_size);
    startNeweffetFaust(new_buffer_size);
}


function starteffetFaustAux(buffer_size)
{
    console.log("startAudioFX %d", buffer_size);
    if (effetFaust) {
        _f4u$t.hard_delete(faustsvg);
        effetFaust.stop();
        effetFaust.destroy();
    }
    effetFaust = faust.effetFaust(audio_context, buffer_size);
    effetFaust.start();
    console.log(effetFaust.json());
    console.log(effetFaust.controls());
}

function starteffetFaust()
{
    starteffetFaustAux(256);
}

function startNeweffetFaust(buffer_size)
{
    starteffetFaustAux(buffer_size);
}

// To activate audio on iOS
window.addEventListener('touchstart', function() {

	// create empty buffer
	var buffer = audio_context.createBuffer(1, 1, 22050);
	var source = audio_context.createBufferSource();
	source.buffer = buffer;

	// connect to output (your speakers)
	source.connect(audio_context.destination);

	// play the file
	source.noteOn(0);

}, false);

// General

$(starteffetFaust);
