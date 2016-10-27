'use strict';

angular.
  module('cliffTalbott',
    [
      "ngSanitize",
      "com.2fdevs.videogular",
      "com.2fdevs.videogular.plugins.controls"
    ]
  ).
  component('cliffTalbott', {
    templateUrl: 'cliff-talbott/cliff-talbott.template.html',
    controller: function($sce, $http) {
      var self = this;
      self.state = null;
      self.API = null;
      
      $http.get("interviews/interviews.json").then(function(response) {
        self.interviews = response.data;
        self.activeInterview = self.interviews[0];
        self.config = {
          sources: self.activeInterview.sources,
          theme: {url: "styles/videogular.css"}
        };
        self.article = 'cliff-talbott/article.template.html'
      });
      
      self.onPlayerReady = function(API) {
        self.API = API;
      };
      self.setAudio = function(id) {
        self.API.stop();
        self.activeInterview = self.interviews[id];
        self.config.sources = self.activeInterview.sources;
        self.article = 'cliff-talbott/article.template.html'
      };
    }
  });