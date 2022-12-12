/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function sayHello(){
    alert("hello from ExtendScript in After Effects");
}

function createLayers(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addNull();
     newLayer.name = ("Proba");
}


function countLayers(){
    var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
    var countLayers = Comp.layers.length
   // alert("hello count Layers ="+ countLayers);
    return ("Открыто "+ countLayers + "   слоёв");
}

function selectType(dataN){
    alert ("Всё меняется" + dataN);
}
