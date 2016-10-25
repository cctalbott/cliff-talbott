'use strict';

var app = angular.module('cliffTalbott');

// So html5 audio/video sources work
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://s3.us-east-2.amazonaws.com/cliff-talbott/**']);
});

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