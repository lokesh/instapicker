var model = function(){

  var api_key       = '35f75d12300141f235577c2f742bd308',
      sort          = "relevance",  // options: relevance, interestingness-desc, date-posted-desc, ...  
      license       = "4,5,6,7,8",  // free to use, even commercially
      perPage       = 5,
      isInAjax = false;             // COMMENT

  
  var getSearchResults = function( query, callback ){
    //post data callbaack
    //callback( result );
    console.log('model');
    $.getJSON('http://api.flickr.com/services/rest/?jsoncallback=?', {
      method: "flickr.photos.search",
      api_key: api_key,
      text: query,
      sort: sort,
      license: license,
      page: 1,  // TODO: don't hardcode
      per_page: perPage,
      extras: "url_z, url_l",
      format: "json"
    },
    function(data) {
//      console.log( data.photos.photo );
      if(data.stat == "ok") {
//        return 'http://farm' + this.farm + '.static.flickr.com/' + this.server + '/' + this.sourceId + '_' + this.secret + size + '.jpg';

        viewModel.searchResults( data.photos.photo );
  //      debugger;
        // if(results.length > 0) {
        //   $.each(results, function(i,item){

        //     img = new IPImage();
        //     img.farm = item.farm;
        //     img.server = item.server;
        //     img.secret = item.secret;
        //     img.owner = item.owner;
        //     img.setTitle(item.title);
        //     img.setId(item.id);
            
        //     if(item.url_l != undefined) {
        //       img.bigUrl = item.url_l;
        //     } else {
        //       img.bigUrl = item.url_z;
        //     }
          
        //     self.images[self.images.length] = img;
          
        //     }); 
        //   // custom event SearchComplete
        //   if(page == 1) {
        //     $('body').trigger('newSearchComplete');
        //     this.perPage = 250;
        //     self.search({"query": query, "license":self.license,"page":2, "perPage":250});
        //   } else {  
        //     $('body').trigger('updateSearchComplete');
        //   }       
        // } else {
        //   if(page == 1) {
        //     $('body').trigger('noResults');
        //   } else {  
        //     $('body').trigger('noMoreResults');
        //   }         
        // }

      }
      self.isInAjax = false;
    });

  };

  return{
    
    getSearchResults: getSearchResults
  
  };

}();