const chroma = require('./src/chroma');

// feel free to comment out anything to rollup
// a smaller chroma.js built

require('./src/io/hex'); //*****
require('./src/io/rgb');  //*****
require('./src/ops/alpha');   //*****
require('./src/ops/darken');    //*****
require('./src/ops/get');         //*****
require('./src/ops/luminance');  //*****
chroma.contrast = require('./src/utils/contrast');  //*****
chroma.deltaE = require('./src/utils/delta-e');      //*****
chroma.valid = require('./src/utils/valid');       //*****

module.exports = chroma;
