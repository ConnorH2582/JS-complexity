'use strict';
angular.module('myApp')
.service('jsComplexity', function() {
  
  function complexityEvaluator(jsCode){
    var syntax = esprima.tokenize(jsCode);
    var complexityCount = 1;
    var complexityGrowers = ['if','else if','for','while','case','||','?'];
    var complexityCommentary = {1: "1 is the minimum Cyclomatic Complexity for a function"};
    for(var i=0;i<syntax.length; i++){
      var j = i;
      if(complexityGrowers.includes(syntax[i].value)){
        complexityCount += 1;
        complexityCommentary[complexityCount] = "Each '" + syntax[i].value + "' adds 1 to the complexity of the function.";
      }
    }
    return {'complexity': complexityCount,'commentary':complexityCommentary,'code':jsCode}
  }


  this.evaluate = function(jsCode) {
    return complexityEvaluator(jsCode);
  }
 
});