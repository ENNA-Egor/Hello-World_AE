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

function selType(dataN){
    alert ("Выбрано  " + dataN);
    var sel = dataN;
    switch (sel) {
        case "Shape":
          alert ("Создаём шейп");  
            break;
            case "Null":
          alert ("Создаём нулевой слой");  
            break;
            case "Text":
          alert ("Создаём текстовый слой");  
            break;
            case "Solid":
          alert ("Создаём слой со сплошной заливкой");  
            break;
            case "Camera":
          alert ("Создаём камеру");  
            break;
            case "Ajustment":
          alert ("Создаём корректирующий слой");  
            break;
    }  
}

function createNull(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addNull();
     newLayer.name = ("Proba");
}

function createShape(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addShape();
     newLayer.name = ("Proba");
}

function createText(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addText("ProbaText");
     newLayer.name = ("Proba");
}

function createSolid(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addSolid([1,1,1],"ProbaS",1920,1080,1);
     
}

function createCamera(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addCamera("ProbaCamera",[comp.width/2, comp.height/2]);
     newLayer.name = ("Proba");
}

function createAjustment(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addAdjustment();
     newLayer.name = ("Proba");
}
