window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);

    function createScene() {
        var scene = new BABYLON.Scene(engine);
        var light = new BABYLON.PointLight('Omni', new BABYLON.Vector3(0, 100, 100), scene);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas);

        //Creation of 6 spheres
        var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 10.0, 9.0, scene);
        var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 2.0, 9.0, scene);//Only two segments
        var sphere3 = BABYLON.Mesh.CreateSphere("Sphere3", 10.0, 9.0, scene);
        var sphere4 = BABYLON.Mesh.CreateSphere("Sphere4", 10.0, 9.0, scene);
        var sphere5 = BABYLON.Mesh.CreateSphere("Sphere5", 10.0, 9.0, scene);
        var sphere6 = BABYLON.Mesh.CreateSphere("Sphere6", 10.0, 9.0, scene);

        //Creation of box
        var box = new BABYLON.Mesh.CreateBox('box1', 6, scene);

        //Position the spheres
        sphere1.position.x = 40;
        sphere2.position.x = 25;
        sphere3.position.x = 10;
        sphere4.position.x = -5;
        sphere5.position.x = -20;
        sphere6.position.x = -35;

        //position of box
        box.position.x = 0;
        box.position.y = 10;

        // Create plane
        var plane = new BABYLON.Mesh.CreatePlane('plane', 120, scene);
        plane.position.y = -5;
        plane.rotation.x = Math.PI / 2;

        // creation of material with wireFrame
        var materialSphere1 = new BABYLON.StandardMaterial('texture1', scene);
        materialSphere1.wireframe = true;

        // creation of red material with alpha (opacity)
        var materialSphere2 = new BABYLON.StandardMaterial('texture2', scene);
        materialSphere2.diffuseColor = new BABYLON.Color3(1, 0, 0);
        materialSphere2.alpha = 0.4;

        // creation of material with image texture
        var materialSphere3 = new BABYLON.StandardMaterial('texture3', scene);
        materialSphere3.diffuseTexture = new BABYLON.Texture('textures/misc.jpg', scene);

        // image material with alpha texture
        var materialSphere4 = new BABYLON.StandardMaterial('texture4', scene);
        materialSphere4.diffuseTexture = new BABYLON.Texture('textures/misc.jpg', scene);
        materialSphere4.diffuseTexture.vOffset = 0.1; //vertical offset of 10%;
        materialSphere4.diffuseTexture.uOffset = 0.4; //Horizontal offset of 40%

        //Creation of a material with an alpha texture
        var materialSphere5 = new BABYLON.StandardMaterial("texture5", scene);
        materialSphere5.diffuseTexture = new BABYLON.Texture("textures/tree.png", scene);
        materialSphere5.diffuseTexture.hasAlpha = true;//Has an alpha

        //Creation of a material and show all the faces
        var materialSphere6 = new BABYLON.StandardMaterial("texture6", scene);
        materialSphere6.diffuseTexture = new BABYLON.Texture("textures/tree.png", scene);
        materialSphere6.diffuseTexture.hasAlpha = true;//Have an alpha
        materialSphere6.backFaceCulling = false;//Show all the faces of the element

        // Creation of a repeated textured material
        var materialPane = new BABYLON.StandardMaterial('texturePlane', scene);
        materialPane.diffuseTexture = new BABYLON.Texture('textures/grass.jpg', scene);
        materialPane.diffuseTexture.uScale = 5; // repeat 5 times on the vertical axis
        materialPane.diffuseTexture.vScale = 5; // repeat 5 times on the horizontal axis
        materialPane.backFaceCulling = false; // always show the front and back of an element

        //apply materials to meshes
        sphere1.material = materialSphere1;
        sphere2.material = materialSphere2;
        sphere3.material = materialSphere3;
        sphere4.material = materialSphere4;
        sphere5.material = materialSphere5;
        sphere6.material = materialSphere6;
        box.material = materialSphere1;
        plane.material = materialPane;

        // return the created scene
        return scene;
    }

    var scene = createScene();

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener('resize', function () {
        engine.resize();
    })
});