var viewModel = {
  searchHistory: ko.observableArray(),
  searchResults: ko.observableArray(),
  faves: ko.observableArray(),
  chosenImageData: ko.observable( '[CHOSEN IMAGE DATA]' )
};

ko.applyBindings( viewModel );