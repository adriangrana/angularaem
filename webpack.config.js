const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = { 
    
 };

module.exports = {
	// an example entry definition
	entry: [ '/dist/main-es5.js'	],
  plugins: [
    new WebpackManifestPlugin(options)
  ]
};