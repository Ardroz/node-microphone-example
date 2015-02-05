var mic = require('microphone'),
  fs = require('fs');

var wstream = fs.createWriteStream('hola.mp3');

mic.startCapture({'mp3output' : true});

mic.audioStream.on('data', function (data) {
  wstream.write(data);
});
