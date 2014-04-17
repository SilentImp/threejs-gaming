requirejs(['../examples/model/bower_components/threejs/build/three'], function(){
  var angle = .05,
  scene = new THREE.Scene(),
  camera = new THREE.PerspectiveCamera(63, 4/3, 0.1, 1000),
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("demo-3"),
    antialias: true
  }),
  json_loader = new THREE.JSONLoader(),
  model = null;

  json_loader.load('examples/model/json/human.js', modelLoaded, 'examples/model/json/');

  renderer.setSize(800, 600);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = -10;

  function render() {
    if(model!=null){
      model.rotation.y+=.05;
    }
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();

  function modelLoaded(geometry, materials){
    model = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
    model.position.z = 10;
    model.position.y = -8;
    scene.add(model);
    camera.lookAt(new THREE.Vector3(0,0,0));
  }

});