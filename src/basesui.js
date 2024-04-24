import basesui22 from './22/basesui.js';
import basesui23 from './23/basesui.js';

try{
    
    $(document).ready(function() {
    LoadBasesUI(basesui);
        
});
}
catch(e){
console.error(e);
}

const basesui = {
    load(useMediaQueries = true, moduleList, version="23", useDarkMode = false) {    
        if(version == "22"){
            basesui22.load(useMediaQueries, moduleList);
            console.log("Loading Bases UI for OnBase 22");
            return;
        }
        else if(version == "23"){
            console.log("Loading Bases UI for OnBase 23");
            basesui23.load(useMediaQueries, moduleList, useDarkMode)
        }
    }
}