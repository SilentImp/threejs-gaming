requirejs([
  'domReady',
  '../examples/model/bower_components/threejs/build/three',
  'ColladaLoader'
  ], 
  function(domReady){
    domReady(function () {
    
      require(['ColladaLoader'],function(){
      
        console.log(THREE, THREE.ColladaLoader)

      var scene = new THREE.Scene({
        overrideMaterial: new THREE.MeshNormalMaterial()
      }),
      camerax = new THREE.PerspectiveCamera(63, 4/3, 0.1, 1000),
      collada = null,
      renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("demo-4"),
        antialias: true,
        alpha: true,
        premultipliedAlpha: true
      }),
      collada_loader = new THREE.ColladaLoader();

      camerax.position.x = 0;
      camerax.position.y = -8;
      camerax.position.z = 4;

      collada_loader.load('../collada/model2.dae', modelLoaded);
      renderer.setSize(800, 600);

      function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
      }

      function modelLoaded(result){
        collada = result.scene;
        camera = collada.children[0];
        scene.add(collada);

        var light3 = new THREE.PointLight(0xdddddd, 0.5);
        light3.position.set(0,-5,2);
        scene.add(light3);

        var sphereSize = .1; 
        var pointLightHelper3 = new THREE.PointLightHelper(light3, sphereSize); 
        scene.add(pointLightHelper3);

        var light2 = new THREE.PointLight(0xdddddd, 0.5);
        light2.position.set(0,5,-4);
        scene.add(light2);

        var sphereSize = .1; 
        var pointLightHelper2 = new THREE.PointLightHelper(light2, sphereSize); 
        scene.add(pointLightHelper2);

        camera.lookAt(new THREE.Vector3(0,0,0));
        render();
      }
    });
  });
});