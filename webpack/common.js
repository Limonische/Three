// Common module for development and production

const merge = require('webpack-merge');

const pug = require('./pug');
const sass = require('./sass');
const images = require('./images');
const models = require('./models');
const fonts = require('./fonts');
const js = require('./js');
const html = require('./html');
const workbox = require('./workbox');

// Merge all common modules
module.exports = (env, argv) => merge(sass(env, argv), pug, images, models, fonts, js, html, workbox);
