'use strict';

var app = angular.module('cliffTalbott',
    [
      "ngSanitize",
      "com.2fdevs.videogular",
      "com.2fdevs.videogular.plugins.controls"
    ]
  );

// So html5 audio/video sources work
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://s3.us-east-2.amazonaws.com/cliff-talbott/**']);
});

/*
// Register `cliffTalbott` component, along with its associated controller and template
app.
  component('cliffTalbott', {
    templateUrl: 'cliff-talbott/cliff-talbott.template.html',
    controller: function CliffTalbottController($http) {
      var self = this;
      
      // So html5 audio/video sources work
      self.trusted = function(url) {
        return $sce.trustAsResourceUrl(url);
      };
      
      // data
      $http.get("interviews/interviews.json").then(function(response) {
        self.interviews = response.data
        self.activeInterview = self.interviews[0];
      });
    }
  });
*/  
app.
  component('cliffTalbott', {
    templateUrl: 'cliff-talbott/cliff-talbott.template.html',
    controller: function($sce) {
      this.config = {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3.us-east-2.amazonaws.com/cliff-talbott/audio/Cliff-Talbott-Interview-0102.mp3"), 
            type: "audio/mpeg"
          }
        ],
        theme: {url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"}
      };
    },
    controllerAs: 'controller'
  });

/*app
  .controller('HomeCtrl',
    ["$sce", function($sce) {
      this.config = {
        sources: [
          {
            src: $sce.trustAsResourceUrl("https://s3.us-east-2.amazonaws.com/cliff-talbott/audio/Cliff-Talbott-Interview-0102.mp3"), 
            type: "audio/mpeg"
          }
        ],
        theme: {url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"}
      };
    }]
  );*/