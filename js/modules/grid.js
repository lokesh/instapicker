var grid = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);
  };

  return{
    init: init
  };
}();