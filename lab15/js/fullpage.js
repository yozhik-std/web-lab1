var $nav = $('nav');

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#f4f4f4', '#f4f4f4', '#f4f4f4', '#f4f4f4', '#f4f4f4'],
  sectionSelector: '.vertical-scrolling',
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
 

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
    }
  } 
}); 