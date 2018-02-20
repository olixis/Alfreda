const fs = require('fs');
const got = require('got');
const exec = require('child_process').exec;
const googleTTS = require('google-tts-api');

module.exports = async function speak(text){
    let url = await googleTTS(text, 'pt-BR', 0.8)
    let stream = got.stream(url).pipe(fs.createWriteStream('speak.alf'));
    stream.on('finish', () => {
        let playCmd = 'mpg123 ~/Projetos/alfredo/speak.alf';
        exec(playCmd)
      });
  }

 module.exports.meta = {name:"speech",alias:"-s",numArgs:1}


