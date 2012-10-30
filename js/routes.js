//
// Hash based routing with Sammy
//
$(document).ready( function() {

  Sammy(function() {
    
    this.get('#search', function() {
      state.gotoSearch();
      // Show search input
    });

    this.get('#search/:query', function() {
      model.getSearchResults( this.params.query );
      state.gotoGrid();
    });

    this.get('#image/:imageId', function() {

    });

    this.get('', function() {
      state.gotoSplash();
    });

  }).run();

});
