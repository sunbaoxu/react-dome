'use strict'
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  '@' :  resolve('src'),
  '$img' :  resolve('src/assets/images'),
  '$js' :  resolve('src/assets/javascripts'),
  '$cs' :  resolve('src/assets/styles'),
  '$api' :  resolve('src/api/api'),
  '$view' :  resolve('src/views'),
  '$App' :  resolve('src/router/App'),
  '$com' :  resolve('src/commons'),
  '$filter' :  resolve('src/filters/filter'),
}