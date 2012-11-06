//
// State machine
//
var state = StateMachine.create({
    initial: 'normal',
    events: [
      { name: 'gotoSplash', from: [ 'none', 'search' ], to: 'splash' },
      { name: 'gotoSearch', from: [ 'none', 'splash', 'searchResults'], to: 'search' },
      { name: 'gotoSearchResults',   from: [ 'none', 'search' ], to: 'searchResults' },
      { name: 'gotoDetail', from: [ 'none' ], to: 'detail' },
      { name: 'gotoInfo',   from: [ 'none' ], to: 'info' }
  ],
  callbacks: {
    startup: function(){
    },
    onentersplash: function() {
      $('#splash').fadeIn( 'fast' );
      
      $('body').on( 'keydown', function( event ){
        // TODO: Test further. This conditional to check if key pressed was alphanumeric might not be bulletproof.
        if(event.keyCode >= 48 && event.keyCode <= 90) {
          location.hash = "!/search";
        }
      });
    },
    onleavesplash: function() {
      $('#splash').fadeOut( 'fast' );
      $('body').off( 'keydown' );
    },
    onentersearch: function() {
      $('#search')
        .show()
        .find('.input')
          .val( "" )
          .focus();

    },
    onleavesearch: function() {
      $('#search').fadeOut( 'fast' );
    },
    onentersearchResults: function() {
      $('#search-results')
        .fadeIn( 'fast' );

      $('body').on( 'keydown', function( event ){
        if(event.keyCode >= 48 && event.keyCode <= 90) {
          location.hash = "!/search";
        }
      });

    },
    onleavesearchResults: function() {
      // $('#search-results').fadeOut( 'fast' );
      $('body').off( 'keydown' );
    }

  }
});
