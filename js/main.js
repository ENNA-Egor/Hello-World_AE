/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    
    function init() {
                
        themeManager.init();
                
        $("#btn_test").click(function () {
            csInterface.evalScript('sayHello()');
        });
    
            
        themeManager.init();
                
        $("#btn_test2").click(function () {
            csInterface.evalScript('createLayers()');
        });
        themeManager.init();
                
        $("#btn_test3").click(function () {
            csInterface.evalScript('countLayers()', function(result){
                document.getElementById("countLayers").innerHTML= result;
            });
        });
    }
    
        
    init();

}());
    
