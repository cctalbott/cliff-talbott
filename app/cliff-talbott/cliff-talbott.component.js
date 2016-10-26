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
      $http.get("interviews/interviews.json").then(function(response) {
        self.interviews = response.data;
        self.activeInterview = self.interviews[0];
        self.config = {
          sources: [
            {
              src: $sce.trustAsResourceUrl(self.activeInterview.source), 
              type: "audio/mpeg"
            }
          ],
          theme: {url: "styles/videogular.css"}
        };
      });
    }
  });