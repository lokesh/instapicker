//
// Hash based routing with Sammy
//
$(document).ready( function() {

  Sammy(function() {
    
    this.get('!/search', function() {
      state.gotoSearch();
    });

    this.get('!/search/:query', function() {
      grid.clearThumbs();
      model.flickrSearch( this.params.query );
      state.gotoSearchResults();
    });

    this.get('!/image/:imageId', function() {

    });

    this.get('', function() {
      state.gotoSplash();
    });

  }).run();

});
