const map  = require('./global-map.js');
const sass = require('sass');

function globalCSS(){
    const normalizer = sass.compile(map.normalizer, {style: "compressed"});
    const typography = sass.compile(map.typography, {style: "compressed"});
    const header = sass.compile(map.header, {style: "compressed"});
    const container = sass.compile(map.container, {style: "compressed"});
    const section = sass.compile(map.section, {style: "compressed"});
    const card = sass.compile(map.card, {style: "compressed"});
    const rail = sass.compile(map.rail, {style: "compressed"});
    const adjustors = sass.compile(map.adjustors, {style: "compressed"});
    const decorators = sass.compile(map.decorators, {style: "compressed"});
    const wvuicss = sass.compile(map.wvuicss, {style: "compressed"});
    const actionbar = sass.compile(map.actionbar, {style: "compressed"});
    const containers = sass.compile(map.containers, {style: "compressed"});
    const fields= sass.compile(map.fields, {style: "compressed"});
    const filters = sass.compile(map.filters, {style: "compressed"});
    const toolbar = sass.compile(map.toolbar, {style: "compressed"});

    const output = `${normalizer.css}${typography.css}${header.css}${container.css}${section.css}${card.css}${rail.css}${adjustors.css}${decorators.css}${wvuicss.css}${actionbar.css}${containers.css}${fields.css}${filters.css}${toolbar.css}`
    return output;
}
module.exports = globalCSS;