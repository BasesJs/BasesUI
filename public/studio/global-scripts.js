let $wvfm = $("<script/>", {
	"id": "wvuifw",
    "type":"module",
    "src":"https://v2.basesui.com/framework/basesui.js" /*NEEDS UPDATED ADDRESS*/
});
$('head').append($wvfm);

function LoadBasesUI(basesui){
	basesui.load(false, ["toptabbar"]);
}