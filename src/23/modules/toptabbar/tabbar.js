var tabbar = {
    name : "Top Tabs",
    activeTab : "",
    tabs : [],
    sections : [],
    obj : "",
    load(basesui){
        $('.hsi-client').hide();
        console.log(`Loading ${this.name} Module`);
        tabbar.obj = `${basesui.view.ClassId}:${basesui.view.ObjectId}`
        if(sessionStorage.getItem(tabbar.obj))
            tabbar.activeTab = sessionStorage.getItem(tabbar.obj);
        tabbar.tabs = $('.tab-btn');
        tabbar.sections = $('.section');
        if (tabbar.activeTab) {
			tabbar.getActiveTab();
            tabbar.setActiveTab(tabbar.activeTab);
		};
		$('.tab-btn').click(function(){
			tabbar.tabClicked(this);
		});
		$('.hidden-section').hide();
    },
    getActiveTab() {
        let setActive;
        let getActive = $('.active-tab-btn');
        var i = tabbar.tabs.index(getActive);
        $('.tab-btn').each((index, tab) => {
            if (index == tabbar.activeTab)
                setActive = tab;
        });
        if ($(getActive).text() != $(setActive).text()) {
            tabbar.tabClicked(setActive);
	    };    
    },
    tabClicked(tab) { 
        $('.active-tab-btn').removeClass('active-tab-btn');
        $(tab).addClass('active-tab-btn');
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