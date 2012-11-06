var sound = function() {

    

  var init = function( element ){
    $element = $(element);
    $element.on( 'click', '.thumb', function( event ){
      viewModel.faves.pop( ko.dataFor(this) );
    });
  };

  var play = function( sound ){

  };

  return{
    init: init,
    play: play
  };
}();

var soundBuffer = null,
    context = new webkitAudioContext(),
    url = '../sounds/pop2.mp3';


function loadSound( url ) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      soundBuffer = buffer;
    });
  };
  request.send();
}

function playSound( buffer ) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.noteOn(0);                          // play the source now
}

loadSound( url );