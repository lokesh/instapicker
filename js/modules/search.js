var search = function() {
  
  var $element;

  var init = function( element ){
    $element = $(element);
    
    $element.on( 'submit', '.search-form', function( event ){
      event.preventDefault();
      
      query = $element.find('input').val();
      if( query !== "" ){
        location.hash = "search/" + query;
//        model.getSearchResults( query );
      }
      

    });

  };

  return{
    init: init
  };
}();