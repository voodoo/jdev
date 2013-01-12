(function(window, src){
  console.log('load')
  function loader(src){
    var script = document.createElement('script');
        script.src=src
        document.getElementsByTagName('body')[0].appendChild(script)

  }

  loader(src);

  // function main(){
  //   var ifrm = document.createElement('IFRAME');
  //       ifrm.src='https://raw.github.com/voodoo/jdev/master/iframe.html'
  //       ifrm.width="350px"
  //       ifrm.height="350px"
  //   document.getElementsByTagName('body')[0].appendChild(ifrm)
  //   //var s = '<iframe id="iframe" frameborder="0" height="660px" width="350px" scrolling="no" style="padding:0px;position:absolute;top:10px;right:10px;z-index:999999999" border="0"></iframe>';
  //   //document.getElementsByTagName('body')[0].appendChild(s)
  //   //document.getElementById("iframe").setAttribute('src', "https://raw.github.com/voodoo/jdev/master/iframe.html");
  // }
  //main();
})(window, prompt("Javascript Url(s)"));