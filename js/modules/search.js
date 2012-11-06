var search = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);
    

    $element.on( 'keypress', '.input', function( event ){

    });
      
    // Make sure search query is not empty
    $element.on( 'submit', '.search-form', function( event ){
      event.preventDefault();
      
      query = $element.find('input').val();
      if( query !== "" ){
        location.hash = "!/search/" + query;
      }
      
    });

  };

  return{
    init: init
  };
}();