const exec = require('child_process').exec;
const googleTTS = require('google-tts-api');
const fs = require('fs');
const got = require('got');


export class Alfreda {
  constructor() {
    this.greeting()
  }
  greeting(){
    //this.speak('Olá, me chamo alfreda e serei sua assistente pessoal.')
  }
  async speak(text: String){
    let url = await googleTTS(text, 'pt-BR', 0.8)
    let stream = got.stream(url).pipe(fs.createWriteStream('speak.alf'));
    stream.on('finish', () => {
        let playCmd = 'mpg123 ~/Projetos/alfredo/speak.alf';
        exec(playCmd)
      });
  }
  readImage(){
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();
    
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
     const fileName = 'jean.png';
    
    // Performs text detection on the local file
    client
      .textDetection(fileName)
      .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation;
        console.log(fullTextAnnotation.text);
      })
      .catch(err => {
        console.error('ERROR:', err);
    });
  }
}









