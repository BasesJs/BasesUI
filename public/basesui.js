import toptabbar from './modules/toptabbar/tabbar.js';
import sidetabbar from './modules/sidetabbar/tabbar.js';
import framework from './styles/framework.css' assert { type: 'css' };
import mediaqueries from './css/_mediaqueries.css' assert { type: 'css' };
import darkmode from './css/_darkmode.css' assert { type: 'css'};

try{
    
    $(document).ready(function() {
    LoadBasesUI(basesui);
        
});
}
catch(e){
console.error(e);
}

const basesui = {
    name : "Bases UI by Next Phase Solutions for Version 23",
    tabbar: "",
    wv: "",
    baseurl: "",
    objectPopBase : "workview/objectPop.aspx",
    objectPopUrl : "", 
    sessionId: "",
    view : {
        ApplicationId : 0,
        ScreenId: 0,
        ClassId: 0,
        ObjectId: 0,
        ViewerType: 0
    },
    load(useMediaQueries = true, moduleList, useDarkMode = false) {    
        let styleSheets = [structure, wvuicss, wvfilters, wvtoolbar, wvactionbar, wvcontainers, wvfields];
        if(useMediaQueries)
            styleSheets.push(mediaqueries);
        if(useDarkMode)
            styleSheets.push(darkmode);

        document.adoptedStyleSheets = styleSheets;
        basesui.loadproperties();
        basesui.loadmodules(moduleList);  
        $('.secure').hide(function() {
			basesui.securityHide();
		});
        window.top.basesui = basesui;
    },
    loadproperties(){
        basesui.wv = window.WorkView[Object.keys(window.WorkView)[0]];
        basesui.baseurl = basesui.wv.HttpServices.handlerUri;
        basesui.view = {
            AppilicationId: basesui.wv.DisplayObjectProps.ApplicationId,
            ScreenId: basesui.wv.DisplayObjectProps.ScreenId,
            ClassId: basesui.wv.DisplayObjectProps.ClassId,
            ObjectId: basesui.wv.DisplayObjectProps.ObjectId,
            ViewerType: basesui.wv.DisplayObjectProps.ViewerType
        }
        basesui.objectPopUrl = `${basesui.baseurl}${basesui.objectPopBase}?objectid=${basesui.view.ObjectId}&classid=${basesui.view.ClassId}&screenid=${basesui.view.ScreenId}`;   
        /*basesui.sessionId = top.document.getElementById('OBToken').value;*/
    },
    loadmodules(moduleList){
        if(moduleList.length > 0){
            if(moduleList.includes("toptabbar")){
                toptabbar.load(basesui);
                this.tabbar = toptabbar;
            }                
            else if(moduleList.includes("sidetabbar")){                
                sidetabbar.load(basesui);
                this.tabbar = sidetabbar;
            }                
        }        
    },
    securityHide() {
        var groups = Screen.CurrentUser.UserGroups;
        $.each(groups, function(index, group) {
            try {
                group = group.replace(/ /g, "_");
                group = '.secure_' + group;
                $(group).show();
            } catch (e) {
                console.log(e);
            };
        
        });
        $('.hsi_wv_view').trigger('focus');
    }
}

export default basesui;