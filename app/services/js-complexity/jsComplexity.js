'use strict';
angular.module('myApp')
.service('jsComplexity', function() {
  
  function complexityCounter(jsCode){
    var syntax = esprima.tokenize(jsCode);
    var complexityCount = 1;
    var complexityGrowers = ['if' , 'else if' , 'for' , 'while' , 'case','do','||','?'];
    for(var i=0;i<syntax.length; i++){
      if(complexityGrowers.includes(syntax[i].value)){
        complexityCount +=1;
        }
    }
    return complexityCount;
  }

  // function countIfs(jsCode) {

  //   return jsCode.match(/(if)|(else if)|(else)/gi).length;
  // }

  this.evaluate = function(jsCode) {
    return complexityCounter(jsCode);
  }
});