const path = require('path');

module.exports = {
  entry: "../routes/index.js",

  node: {
    fs: 'empty',
    net:'empty',
  }
};

