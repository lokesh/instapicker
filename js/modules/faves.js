var faves = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);
    $element.on( 'click', '.thumb', function( event ){
      viewModel.faves.pop( ko.dataFor(this) );
    });
  };

  return{
    init: init
  };
}();