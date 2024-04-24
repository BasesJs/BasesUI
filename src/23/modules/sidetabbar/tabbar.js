var tabbar = {
    name : "Side Tabs",
    activeTab : "",
    tabs : [],
    sections : [],
    obj : "",
    load(app){
        $('.hsi-client').hide();
        console.log("Loading Side Tab Module");
        tabbar.obj = `${app.view.ClassId}:${app.view.ObjectId}`
        if(sessionStorage.getItem(tabbar.obj))
            tabbar.activeTab = sessionStorage.getItem(tabbar.obj);
        tabbar.tabs = $('.side-tab');
        tabbar.sections = $('.section');
        if (tabbar.activeTab) {
			tabbar.getActiveTab()
		};
		$('.side-tab').click(function(){
			tabbar.tabClicked(this);
		});
		$('.hidden-section').hide();
    },
    getActiveTab() {
        let setActive;
        let getActive = $('.active-side-tab');
        var i = tabbar.tabs.index(getActive);
        $('.side-tab').each((index, tab) => {
            if (index == tabbar.activeTab)
                setActive = tab;
        });
        if ($(getActive).text() != $(setActive).text()) {
            tabbar.tabClicked(setActive);
	    };    
    },
    tabClicked(tab) { 
        $('.active-side-tab').removeClass('active-side-tab');
        $(tab).addClass('active-side-tab');
        var i = tabbar.tabs.index(tab);
        this.setActiveTab(i);
    },
    setActiveTab(i){
        var sect = $('.section')[i];		
        $('.section').not('.hidden-section').addClass('hidden-section');
        $(sect).fadeIn();
        $(sect).removeClass('hidden-section');
        $('.hidden-section').hide();
        sessionStorage.setItem(tabbar.obj, i);
        $('.hsi_wv_view').trigger('focus');
    }
}
export default tabbar;