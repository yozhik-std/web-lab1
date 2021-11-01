var isMobile = {
    Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
    BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
    iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
    Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
    any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
};
  
if ( !isMobile.any() ) {
  

	$(document).ready( function() {
  var authors = document.getElementById('authors'),
	 
      docHeight = document.documentElement.offsetHeight;
  
  window.addEventListener( 'scroll', function() {
	 
        // normalize scroll position as percentage
    var scrolled = window.scrollY / ( docHeight - window.innerHeight ) ,
        transformValue = 'scale('+(1-scrolled)+')';
	
    authors.style.WebkitTransform = transformValue;
    authors.style.MozTransform = transformValue;
    authors.style.OTransform = transformValue;
    authors.style.transform = transformValue;
	  if((1-scrolled)< 0.38){ document.getElementById('authors').style.display = "none"}
	  else {document.getElementById('authors').style.display = ""};
	  
    
  }, false);
  

  
  function transitionEnded(event) {
    // disable transition
    authors.className = '';
  }
  
  authors.addEventListener( 'webkitTransitionEnd', transitionEnded, false);
  authors.addEventListener( 'transitionend', transitionEnded, false);
  authors.addEventListener( 'oTransitionEnd', transitionEnded, false);
  
}, false);
}
