'use strict';

// Define the `phoneList` module
var app = angular.module('cliffTalbott', []);

app.filter('trustUrl', [
    '$sce', function($sce) {
      return function(recordingUrl) {
        return $sce.trustAsdResourceUrl(recordingUrl);
      }
    }
  ]);