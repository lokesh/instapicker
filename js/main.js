$(document).ready( function() {

  searchResults.init( $('#search-results'));
  search.init( $('#search'));
  grid.init( $('#grid'));
  faves.init( $('#faves'));

  resizeUI();

  $(window).on( 'resize', resizeUI );
  
  function resizeUI(){
    var winHeight = $(window).height();
    $('#faves').height( winHeight );
    $('#search').find('.overlay').height( winHeight );
  }


});





