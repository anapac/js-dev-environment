// This file isn't transpiled so it should use CommonJS and ES5.

// Register Babel to transpile before our tests run
require('babel-register')();

// Disable Webpack feature that Mocha doesn't understand
require.extensions['.css'] = function() {};
