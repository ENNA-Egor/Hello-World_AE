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
          createShape(); 
            break;
            case "Null":
          alert ("Создаём нулевой слой"); 
          createNull(); 
            break;
            case "Text":
          alert ("Создаём текстовый слой"); 
          createText(); 
            break;
            case "Solid":
          alert ("Создаём слой со сплошной заливкой");
          createSolid();  
            break;
            case "Camera":
          alert ("Создаём камеру");
          createCamera();  
            break;
            case "Ajustment":
          alert ("Создаём корректирующий слой");
          createAjustment();  
            break;
    }  
}

function createNull(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addNull();
     newLayer.name = ("ProbaN");
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
     newLayer.name = ("ProbaT");
}

function createSolid(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addSolid([1,0,1],"ProbaS",1920,1080,1);
     
}

function createCamera(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addCamera("ProbaCamera",[Comp.width/2, Comp.height/2]);
    // newLayer.name = ("ProbaCamera");
}

function createAjustment(){
     var Comp= app.project.activeItem;
     if (!Comp){alert("Please select composition")
    return
    };
     var newLayer = Comp.layers.addSolid([1,1,1],"ProbaAj",1920,1080,1);
     newLayer.adjustmentLayer = true;
}
