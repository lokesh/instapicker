var viewModel = {
  searchHistory:   ko.observableArray(),
  searchResults:   ko.observableArray(),
  faves:           ko.observableArray(),
  chosenImageData: ko.observable( '[CHOSEN IMAGE DATA]' ),

  slideInHistory: function( elem ){
    if( elem.nodeType === 1 ){
      $(elem).delay( 5, 'slideDown' ).queue( 'slideDown', function( event ){
        $(this).addClass('slideDown');
      }).dequeue( 'slideDown' );
    }
  },

  slideOutHistory: function( elem ){
    console.log( elem );
    if (elem.nodeType === 1){
      $(elem).slideUp(function() { $(elem).remove(); });
    }
  }
};


ko.applyBindings( viewModel );