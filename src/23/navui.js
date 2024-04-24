import toptabbar from './modules/toptabbar/tabbar.js';
import sidetabbar from './modules/sidetabbar/tabbar.js';
import framework from './styles/framework.css' assert { type: 'css' };
import mediaqueries from './css/_mediaqueries.css' assert { type: 'css' };
import darkmode from './css/_darkmode.css' assert { type: 'css'};

try{
    
    $(document).ready(function() {
    LoadNavUi(navui);
        
});
}
catch(e){
console.error(e);
}

const navui = {
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
        navui.loadproperties();
        navui.loadmodules(moduleList);  
        $('.secure').hide(function() {
			navui.securityHide();
		});
        window.top.navui = navui;
    },
    loadproperties(){
        navui.wv = window.WorkView[Object.keys(window.WorkView)[0]];
        navui.baseurl = navui.wv.HttpServices.handlerUri;
        navui.view = {
            AppilicationId: navui.wv.DisplayObjectProps.ApplicationId,
            ScreenId: navui.wv.DisplayObjectProps.ScreenId,
            ClassId: navui.wv.DisplayObjectProps.ClassId,
            ObjectId: navui.wv.DisplayObjectProps.ObjectId,
            ViewerType: navui.wv.DisplayObjectProps.ViewerType
        }
        navui.objectPopUrl = `${navui.baseurl}${navui.objectPopBase}?objectid=${navui.view.ObjectId}&classid=${navui.view.ClassId}&screenid=${navui.view.ScreenId}`;   
        /*navui.sessionId = top.document.getElementById('OBToken').value;*/
    },
    loadmodules(moduleList){
        if(moduleList.length > 0){
            if(moduleList.includes("toptabbar")){
                toptabbar.load(navui);
                this.tabbar = toptabbar;
            }                
            else if(moduleList.includes("sidetabbar")){                
                sidetabbar.load(navui);
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

export default navui;