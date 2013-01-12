(function(window){
  console.log('load')
  function main(){
    var s = '<iframe id="iframe" frameborder="0" height="660px" width="350px" scrolling="no" style="padding:0px;position:absolute;top:10px;right:10px;z-index:999999999" border="0"></iframe>';
    document.getElementsByTagName('body')[0].appendChild(s)
    //document.getElementById("iframe").setAttribute('src', "iframe.html");
  }
  main();
})(window);