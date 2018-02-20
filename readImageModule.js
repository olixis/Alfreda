module.exports = function (path) {
    var vision = require('@google-cloud/vision');
    var client = new vision.ImageAnnotatorClient();
    // Performs text detection on the local file
    client
        .textDetection(path)
        .then(function (results) {
            var fullTextAnnotation = results[0].fullTextAnnotation;
            console.log(fullTextAnnotation.text);
        }).catch(function (err) {
            console.error('ERROR:', err);
        });
};

module.exports.meta = {
    name: "readImage",
    alias: "-ri",
    numArgs: 1
}