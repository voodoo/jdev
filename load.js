(function(window, src){
  console.log('load')
  function loader(src){
    var script = document.createElement('script');
        script.src=src;
        document.getElementsByTagName('body')[0].appendChild(script);
  }
  loader(src);
})(window, prompt("Javascript Url(s)"));