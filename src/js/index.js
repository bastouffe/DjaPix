window.addEventListener('DOMContentLoaded', function(){
    var canvas = document.getElementById('renderCanvas');

    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function(){
     // Create the scene space
        var scene = new BABYLON.Scene(engine);
    
        // Add a camera to the scene and attach it to the canvas
       // var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, , scene);
        //camera.attachControl(canvas, true);
    
        var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 50, BABYLON.Vector3(0, 0, 1000), scene);
        camera.attachControl(canvas, true);
        camera.minZ = 0.1;
    
    
    
    
    
        // Add lights to the scene
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
    
        // Add and manipulate meshes in the scene
        var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter:2}, scene);
        var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter:2}, scene);
        var sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere3", {diameter:2}, scene);
        var sphere4 = BABYLON.MeshBuilder.CreateSphere("sphere4", {diameter:2}, scene);
           
        sphere2.translate(new BABYLON.Vector3(1, 1, 0),10);
        sphere3.translate(new BABYLON.Vector3(1, 1, 1), 10);
        sphere4.translate(new BABYLON.Vector3(1, 0, 1), 10);
          
    
        var axeX = [
            new BABYLON.Vector3.Zero(),
            new BABYLON.Vector3(5, 0, 0)
        ];
        var axeY = [
            new BABYLON.Vector3.Zero(),
            new BABYLON.Vector3(0, 5, 0)
        ];
        var axeZ = [
            new BABYLON.Vector3.Zero(),
            new BABYLON.Vector3(0, 0, 5)
        ];
    
    
         var myLinkS1ToS2 = [
            sphere1.position,
            sphere2.position
        ];
    
        var myLinkS1ToS3 = [
            sphere1.position,
            sphere3.position
        ];
    
        var myLinkS1ToS4 = [
            sphere1.position,
            sphere4.position
        ];
    
        var lineS1ToS2 = BABYLON.MeshBuilder.CreateLines("lineS1ToS2", {points: myLinkS1ToS2}, scene);
        var lineS1ToS3 = BABYLON.MeshBuilder.CreateLines("lineS1ToS3", {points: myLinkS1ToS3}, scene);
        var lineS1ToS4 = BABYLON.MeshBuilder.CreateLines("lineS1ToS3", {points: myLinkS1ToS4}, scene);
    
       var lineAxeX = BABYLON.MeshBuilder.CreateLines("lineAxeX", {points: axeX}, scene);
        var lineAxeY = BABYLON.MeshBuilder.CreateLines("lineAxeY", {points: axeY}, scene);
        var lineAxeZ = BABYLON.MeshBuilder.CreateLines("lineAxeZ", {points: axeZ}, scene);
    
        lineAxeX.color = new BABYLON.Color3(1, 0, 0);//red
        lineAxeY.color = new BABYLON.Color3(0, 1, 0);//green
        lineAxeZ.color= new BABYLON.Color3(0, 0, 1);//blue
    
    
     
        // NOTE:: SET CAMERA TARGET AFTER THE TARGET'S CREATION AND NOTE CHANGE FROM BABYLONJS V 2.5
    // targetMesh created here.
    
    //camera.lockedTarget = BABYLON.Vector3(0, 0, 1000); //version 2.5 onwards
        return scene;
    }

    var scene = createScene();
    engine.runRenderLoop(function(){
        scene.render();
    });

});
