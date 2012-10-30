function ViewModel() {
  // Data
  var self = this;


  self.searchHistory = ko.observable();
  self.searchResults = ko.observable( 'foo' );
  self.chosenImageData = ko.observable( '[CHOSEN IMAGE DATA]' );

  // Behaviours
// self.goToFolder = function(folder) { location.hash = folder };
// self.goToMail = function(mail) { location.hash = mail.folder + '/' + mail.id };

  self.newSearch = function( query ){
    console.log('kokok');
//       $.get('/mail', { folder: folder }, self.chosenFolderData);
  };
}

ko.applyBindings(new ViewModel());




var state = StateMachine.create({
    initial: 'normal',
    events: [
      { name: 'gotoSplash',  from: [ 'none' ], to: 'splash' },
      { name: 'gotoSearch',  from: [ 'none', 'splash', 'results'], to: 'search' },
      { name: 'gotoResults', from: [ 'none' ], to: 'results' },
      { name: 'gotoDetail',  from: [ 'none' ], to: 'detail' },
      { name: 'gotoInfo',    from: [ 'none' ], to: 'info' }
  ],
  callbacks: {
    startup: function(){
      $('body').on( 'keydown', function( event ){
        state.gotoSearch();
      });
    },
    onentersplash: function() {
      $('#splash').fadeIn( 'fast' );
    },
    onleavesplash: function() {
      $('#splash').fadeOut( 'fast' );
    },
    onentersearch: function() {
      $('#search')
        .fadeIn( 'fast' )
        .find('.input')
          .focus();

    },
    onleavesearch: function() {
      $('#search').fadeOut( 'fast' );
    }
  }
});



$(document).ready( function() {

 // Routing
  Sammy(function() {
    
    this.get('#search/:query', function() {
      // Show search input
    });

    this.get('#search/:query', function() {
      console.log( this.params.query );
      // Show search results
      // $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
    });

    this.get('#image/:imageId', function() {
      console.log( this.params.imageId );
      // Show image detail
      // $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);

    });

    this.get('', function() {
      state.gotoSplash();
    });

  }).run();

  // Attach UI events


});


