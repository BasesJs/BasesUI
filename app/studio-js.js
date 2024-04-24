const config = require('../config/config.js');

const script = `let $wvfm = $("<script/>", {
	"id": "wvuifw",
    "type":"module",
    "src":"${config.origin}/${config.public}/${config.entryJs}" /*NEEDS UPDATED ADDRESS*/
});
$('head').append($wvfm);

function LoadBasesUI(basesui){
	basesui.load(${config.useMediaQueires}, ["toptabbar"]);
}`;

module.exports = script;