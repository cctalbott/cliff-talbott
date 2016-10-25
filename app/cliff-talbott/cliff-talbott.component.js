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
    controller: function CliffTalbottController() {
      // So html5 audio/video sources work
      this.trusted = function(url) {
        return $sce.trustAsResourceUrl(url);
      };
      
      // data
      this.name = "Cliff Talbott";
      this.interviews = [
        {
          title: 'Interview 1',
          description: 'Early life summary',
          source: 'https://s3.us-east-2.amazonaws.com/cliff-talbott/audio/track_01_02.m4a'
        }
      ];
      this.activeInterview = this.interviews[0];
    }
  });