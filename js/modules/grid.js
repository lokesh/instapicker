var grid = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);

    $element.on( 'click', '.thumb', function( event ){
      viewModel.faves.push( ko.dataFor(this) );
    });

  };

  var createThumbs = function( photos ){
    
    var $gridList = $element.find('.grid-list');

    $.each( photos, function( i, photo ){
      
      var li = $('<li>', {
        'class': 'thumb-box'
      });
            
      var img = $('<img>', {
        'class': 'thumb',
        src: photo.url_q,
        load: function( event ){
           
          // Once the image is loaded, we add it to the grid.
          // Hack: Added a 5ms delay before adding the slideUp class. Without the delay the class
          // was being applied but the css transitions were not running. No clue. :-/
          $(this).closest('.thumb-box')
            .appendTo( $gridList )
            .delay( 5, 'slideUp' ).queue( 'slideUp', function( event ){
              $(this).addClass('slideUp');
            }).dequeue( 'slideUp' );
      
        }
      });

      var thumb = li.append( img );

    });
  };

  var clearThumbs = function(){
    $element.find('.thumb-box').remove();
  };

  return{

    init: init,
    createThumbs: createThumbs,
    clearThumbs : clearThumbs

  };

}();