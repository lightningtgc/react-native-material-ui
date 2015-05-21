'use strict';

require('babel/register')({
  only: /.+(?:(?:\.es6\.js)|(?:.jsx))$/,
  extensions: ['.js', '.es6.js', '.jsx' ],
  sourceMap: true
});
