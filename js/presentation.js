requirejs([
  'domReady',
  'slidsterController', 
  'highlight.pack',
  'demo-1'
  ], function(
    domReady, 
    slidsterController
  ){
    domReady(function () {
      new slidsterController();
      var code = document.querySelectorAll('pre code'),
          count = code.length;
      while(count--){
        hljs.highlightBlock(code[count]);
      }
    });
});