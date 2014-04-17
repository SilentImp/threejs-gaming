requirejs([
  'domReady',
  '../examples/model/bower_components/threejs/build/three'
  ], 
  function(domReady){
    domReady(function () {
      require(['../examples/threestrap/bower_components/threestrap/build/threestrap'],function(){
      
        function demo2(){
          this.three = THREE.Bootstrap({
              element: document.getElementById("demo-2")
              });
          this.geometry = new THREE.CubeGeometry(.5, .5, .5);
          this.material = new THREE.MeshNormalMaterial();
          this.cube = new THREE.Mesh(this.geometry, this.material);
          
          this.three.scene.add(this.cube);
          this.three.camera.position.set(0, 1, 2);
          this.three.camera.lookAt(this.cube.position);

          this.three.on('update', this.update.bind(this));
        }

        demo2.prototype.update = function() {
          this.cube.rotation.y += .05;
        }

        new demo2();

      });
  });
});