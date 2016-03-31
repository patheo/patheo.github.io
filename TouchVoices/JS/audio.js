/*
  * Lancement de la web audio API.
  * Connection du microphone vers le noeud faust.
  * Connection du noeud faust vers la sortie audio.
 */

var isWebKitAudio = (typeof (webkitAudioContext) !== "undefined");
var audio_context = (isWebKitAudio) ? new webkitAudioContext() : new AudioContext();
var audio_input = null;
var effetFaust = null;
var faustsvg = null;
var dsp_code = null;

function changeBufferSize(buffer_size)
{
    var new_buffer_size = buffer_size.options[buffer_size.selectedIndex].value;
    console.log(new_buffer_size);
    startNeweffetFaust(new_buffer_size);
}

// Audio input handling

function activateAudioInput()
{
    if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia ;
    }

    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio:true}, getDevice, function(e) {
                alert('Error getting audio input');
                console.log(e);
        });
    } else {
        alert('Audio input API not available');
    }
}

function getDevice(device)
{
    // Create an AudioNode from the stream.
    audio_input = audio_context.createMediaStreamSource(device);

    // Connect it to the destination.
    audio_input.connect(effetFaust.getProcessor());
}

function starteffetFaustAux(buffer_size)
{
    console.log("startAudioFX %d", buffer_size);
    if (effetFaust) {
        if (audio_input) {
            audio_input.disconnect(effetFaust.getProcessor());
        }
        _f4u$t.hard_delete(faustsvg);
        effetFaust.stop();
        effetFaust.destroy();
    }
    effetFaust = faust.effetFaust(audio_context, buffer_size);
    if (effetFaust.getNumInputs() > 0) {
        activateAudioInput();
    }
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
