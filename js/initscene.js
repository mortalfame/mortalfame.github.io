// Global variables
var canvas, engine, scene, camera;
var TANK_MODEL;


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
    camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,0,-10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas);

    // Create light
    var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0,5,-5), scene);

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
    BABYLON.Mesh.CreateSphere("sphere", 10, 1, scene);
    var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
}