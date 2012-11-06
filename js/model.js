var model = function(){

  var api_key       = '35f75d12300141f235577c2f742bd308',
      sort          = "relevance",  // options: relevance, interestingness-desc, date-posted-desc, ...
      license       = "4,5,6,7,8",  // free to use, even commercially
      perPage       = 14;

  
  var flickrSearch = function( query, callback ){

    viewModel.searchHistory.unshift( query );
    
    $.getJSON('http://api.flickr.com/services/rest/?jsoncallback=?', {
      method: "flickr.photos.search",
      api_key: api_key,
      text: query,
      sort: sort,
      license: license,
      page: 1,  // TODO: don't hardcode
      per_page: perPage,
      extras: "url_q",
      format: "json"
    },
    function(data) {
      if(data.stat == "ok") {
        viewModel.searchResults( data.photos.photo );
        grid.createThumbs( data.photos.photo );
      }
    });

  };

  return{
    
    flickrSearch: flickrSearch
  
  };

}();