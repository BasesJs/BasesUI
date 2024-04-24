const map  = require('./studio-map.js');
const sass = require('sass');
const config = require('../config/config.js');

function studioCSS(){
    const root = sass.compile(map.root, {style: "expanded"});
    const normalizer = sass.compile(map.normalizer, {style: "compressed"});
    const typography = sass.compile(map.typography, {style: "compressed"});
    const header = sass.compile(map.header, {style: "compressed"});
    const container = sass.compile(map.container, {style: "compressed"});
    const section = sass.compile(map.section, {style: "compressed"});
    const card = sass.compile(map.card, {style: "compressed"});
    const rail = sass.compile(map.rail, {style: "compressed"});
    const adjustors = sass.compile(map.adjustors, {style: "compressed"});
    const decorators = sass.compile(map.decorators, {style: "compressed"});

    const output = `@import url("${config.origin}/${config.public}/${config.entryCss}");
    ${root.css}
    /*------DO NOT MODIFY---------------------------------------*/
    ${normalizer.css}${typography.css}${header.css}${container.css}${section.css}${card.css}${rail.css}${adjustors.css}${decorators.css}
    /*------PLACE ALL CUSTOM CSS BELOW THIS LINE----------------*/
    `
    return output;
}
module.exports = studioCSS;