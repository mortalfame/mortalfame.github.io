// Global variables
var canvas, engine, scene, camera;
var TANK_MODEL;
var rows = 20;
var cols = 20;


/**
* Load the scene when the canvas is fully loaded
*/
document.addEventListener("DOMContentLoaded", function () {
    if (BABYLON.Engine.isSupported()) {
        loadGame();
    }
    else{
        console.log("BABYLON not supported");
    }
}, false);

/**
 * Creates a new BABYLON Engine and initialize the scene
 */
function initScene() {
    console.log ("Initializing scene");
    // Get canvas
    canvas = document.getElementById("renderCanvas");

    // Create babylon engine
    engine = new BABYLON.Engine(canvas, true);

    // Create scene
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();

    // Create the camera
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(rows/2,cols/2,-30), scene);
    camera.setTarget(new BABYLON.Vector3(rows/2,cols/2,0));
    camera.attachControl(canvas);

    // Create light
    //var light = new BABYLON.PointLight("light", new BABYLON.Vector3(rows/2,cols/2,-5), scene);
    var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(rows/2,cols/2,5), scene);


    engine.runRenderLoop(function () {
        scene.render();
    });
}

function loadGame () {
    console.log("Loading game");
    initScene();
    initGame();
}

function initGame() {
    //BABYLON.Mesh.CreateSphere("sphere", 10, 1, scene);
    intiMap();
    //var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
}

function intiMap() {
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:cols, width: rows}, scene);
    plane.setPositionWithLocalVector(new BABYLON.Vector3(rows/2, cols/2, 0));
    var planeMaterial = new BABYLON.StandardMaterial("planeMaterial", scene);
    plane.material = planeMaterial;
    planeMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    

    for(var i=0; i < rows; ++i){
        for(var j=0; j < cols; ++j){
            if (i==0 || i == rows -1 || j == 0 || j == cols-1){
                addBlock(i,j);
            }

            if (i%5 ==0 && j%3 == 0){
                addBlock(i,j);
            }
        }
    }
}

function addBlock(i, j){
    var box = BABYLON.Mesh.CreateBox("Box",1.0,scene);
    box.setPositionWithLocalVector(new BABYLON.Vector3(i, j, 0));
}