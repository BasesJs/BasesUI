const studioCSS = require('./app/studio-css.js');
const globalCSS = require('./app/global-css.js');
const fs = require('node:fs')
const studioJs = require('./app/studio-js.js');

/* OUTPUT LOCATIONS */
const studiocss = './public/studio/global-stylesheet.css';
const studioScripts = './public/studio/global-scripts.js';
const globalcss = './public/styles/framework.css'


run();

function run(){
    let studioStyles = studioCSS();
    fs.writeFileSync(studiocss, studioStyles);  
    fs.writeFileSync(studioScripts, studioJs);
    let globalStyles = globalCSS();
    fs.writeFileSync(globalcss, globalStyles);     
}