requirejs([
  'domReady',
  '../examples/model/bower_components/threejs/build/three'
  ], 
  function(domReady){
    function demo1(){
      this.scene    = new THREE.Scene();
      this.camera   = new THREE.PerspectiveCamera(63, 4/3, 0.1, 1000);
      this.geometry = new THREE.CubeGeometry(.5, .5, .5);
      this.material = new THREE.MeshNormalMaterial();
      this.cube     = new THREE.Mesh(this.geometry, this.material);
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("demo-1"),
        antialias: true
        });

      this.renderer.setSize(800, 600);
      this.scene.add(this.cube);
      this.camera.position.x = 0;
      this.camera.position.y = 1;
      this.camera.position.z = 2;
      this.camera.lookAt(this.cube.position);

      // this.renderer.render(this.scene, this.camera);
      this.render();
    }

    demo1.prototype.render = function() {
      this.cube.rotation.y+=.05;
      requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera);
    }

    domReady(function () {
      new demo1();
    });

});