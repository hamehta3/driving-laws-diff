'use strict';

/**
 * @ngdoc function
 * @name drivingLawsDiffApp.controller:DiffCtrl
 * @description
 * # DiffCtrl
 * Controller of the drivingLawsDiffApp
 */
angular.module('drivingLawsDiffApp')
  .controller('DiffCtrl', function ($log, stateService) {
    
    var self = this;

    self.state1 = '';
    self.state2 = '';
    self.states = [];
    self.categories = [];
    self.selectedCategory = '';
    self.allLawsDiffOutput = [];
    self.isWordDiff = false;
    self.hideCommon = false;

    stateService.getStates()
      .then(function(data) {
        self.states = data.states;
      });

    self.areBothStatesSelected = function() {
      // Check if both states are nonempty
      if (self.state1 !== '' && self.state2 !== '') {
        return true;
      }
      return false;
    };

    self.stateSelected = function(item, model) {
      stateService.getStateLawCategories(item)
        .then(function(data) {
          self.categories = data.categories;
        });
      // If a category is already displayed, fetch and update laws in-place
      if (self.selectedCategory) {
        self.categorySelected();
      }
    };

    self.categorySelected = function() {
      stateService.getStateLawCategory(self.state1, self.selectedCategory)
      .then(function(data) {
        self.state1Category = data.categories;
        return stateService.getStateLawCategory(self.state2, self.selectedCategory);
      }).then(function(data) {
        self.state2Category = data.categories;
        self.diffCategories(self.state1Category, self.state2Category, self.isWordDiff);
      });
    };

    self.reset = function() {
      self.state1 = '';
      self.state2 = '';
      self.selectedCategory = '';
      self.isWordDiff = false;
      self.hideCommon = false;
    };

    self.diffTypeToggled = function() {
      self.diffCategories(self.state1Category, self.state2Category, self.isWordDiff);
    };

    self.diffCategories = function(category1, category2, isWordDiff) {
      var allLawsDiff = [];
      for (var i=0; i<category1.laws.length; i++) {
        var diffLawResult = [];
        if (category1.category !== "Contact Information") {
          // adding some defensive checks
          if (!category1.laws[i].description) {
            category1.laws[i].description = [];
          }
          if (!category2.laws[i].description) {
            category2.laws[i].description = [];
          }
          if (isWordDiff) {
            diffLawResult = self.diffLawsByWord(category1.laws[i], category2.laws[i]);
          }
          else {
            diffLawResult = self.diffLawsByLine(category1.laws[i], category2.laws[i]);
          }
          allLawsDiff.push(diffLawResult);
        }
      }
      self.allLawsDiffOutput = allLawsDiff;
      //$log.log(self.allLawsDiffOutput);
    };

    self.diffLawsByWord = function(law1, law2) {
      var numOfEntries = Math.max(law1.description.length, law2.description.length);
      var diffResult = [];
      diffResult['name'] = law1.name;
      diffResult['tokens'] = [];
      var output = [];
      for (var i=0; i<numOfEntries; i++) {
        output = JsDiff.diffWords(law1.description[i] ? law1.description[i].detail : '', law2.description[i] ? law2.description[i].detail : '');
        diffResult.tokens.push(output);
        //$log.log("output: ");
        //$log.log(output);
      }
      //$log.log("diffresult:");
      //$log.log(diffResult);
      return diffResult;
    };

    self.diffLawsByLine = function(law1, law2) {
      var numOfEntries = Math.max(law1.description.length, law2.description.length);
      var diffResult = [];
      diffResult['name'] = law1.name;
      diffResult['added'] = [];
      diffResult['removed'] = [];
      diffResult['unchanged'] = [];
      var output = [];
      for (var i=0; i<numOfEntries; i++) {
        output = JsDiff.diffLines(law1.description[i] ? law1.description[i].detail : '', law2.description[i] ? law2.description[i].detail : '');
        // make the output in an ng-repeat friendly format
        for (var j=0; j<output.length; j++) {
          if (output[j].added && !output[j].removed) {
            diffResult.added.push(output[j].value);
          }
          else if (!output[j].added && output[j].removed) {
            diffResult.removed.push(output[j].value);
          }
          else {
            diffResult.unchanged.push(output[j].value);
          }
        }
        //$log.log("output: ");
        //$log.log(output);
      }
      //$log.log("diffresult:");
      //$log.log(diffResult);
      return diffResult;
    };

  });
