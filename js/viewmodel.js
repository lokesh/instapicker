var viewModel = {
  searchHistory: ko.observable(),
  searchResults: ko.observableArray(),
  chosenImageData: ko.observable( '[CHOSEN IMAGE DATA]' )
};

ko.applyBindings( viewModel );