//
// State machine
//
var state = StateMachine.create({
    initial: 'normal',
    events: [
      { name: 'gotoSplash', from: [ 'none', 'search' ], to: 'splash' },
      { name: 'gotoSearch', from: [ 'none', 'splash', 'grid'], to: 'search' },
      { name: 'gotoGrid',   from: [ 'none', 'search' ], to: 'grid' },
      { name: 'gotoDetail', from: [ 'none' ], to: 'detail' },
      { name: 'gotoInfo',   from: [ 'none' ], to: 'info' }
  ],
  callbacks: {
    startup: function(){
    },
    onentersplash: function() {
      $('#splash').fadeIn( 'fast' );
      // TODO: sloppy
      $('body').on( 'keydown', function( event ){
        location.hash = "search";
      });
    },
    onleavesplash: function() {
      $('#splash').fadeOut( 'fast' );
      $('body').off( 'keydown' );
    },
    onentersearch: function() {
      $('#search')
        .fadeIn( 'fast' )
        .find('.input')
          .focus();

    },
    onleavesearch: function() {
      $('#search').fadeOut( 'fast' );
    },
    onentergrid: function() {
      $('#grid')
        .fadeIn( 'fast' );

    },
    onleavegrid: function() {
      $('#grid').fadeOut( 'fast' );
    }

  }
});
