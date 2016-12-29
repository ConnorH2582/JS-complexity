'use strict';

angular.module('myApp')
.service('jsComplexity', function() {
  function countIfs(jsCode) {
    return jsCode.match(/(if)|(else if)|(else)/gi).length;
  }

  this.evaluate = function(jsCode) {
    return countIfs(jsCode);
  };
});