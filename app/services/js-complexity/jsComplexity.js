'use strict';
angular.module('myApp')
.service('jsComplexity', function() {
    
  var complexityGrowers = ['if','for','while','case','||','?','catch'];
  //There seems to be some divergent philosophies in the online community as to whether the use of the &&, and ||, operators add to the Cyclomatic Complexity of a given function.  To me, it seems to make sense that using || would provide an entirely different "branch" for the function (i.e. possible outcome or result for the function depending on what's being evaluated), whereas using && would not, so this is why I excluded && but included ||, although simply adding the && operator to the above list of complexity increasing keywords/punctuators would add it as code that grows complexity.   


  function complexityEvaluator(jsCode){
    //this function serves to split the pasted code by line, evaluate each line separately and identify where in the code (line by line) the complexity is being increased.  Understanding that there is likely a better way to go about this than a nested for loop, I felt this was a cool feature and wanted to implement it beyond simply a complexity counter.

    var complexityCount = 1
    var codeByLine = jsCode.split('\n');
    var lineDict = {};
    for(var i=0;i<codeByLine.length; i++){
      var lineItem = {};
      var syntax = esprima.tokenize(codeByLine[i]);
      for(var j=0; j<syntax.length;j++){
        var lineCount=i+1;
        if(complexityGrowers.includes(syntax[j].value)){
          complexityCount += 1;
          lineItem[complexityCount] = {'complexityGrowerValue':syntax[j].value,'complexityGrowerType':syntax[j].type};
          lineDict[lineCount] = lineItem;
        }
      }
    } 
    return lineDict;   
  }

  function complexityCounter(jsCode){
    //this function simply parses the code body as one and counts the complexity.  Somewhat repetitive, could be DRYer, but aimed to avoid doing too much with one function, and keeping them modular.
    var complexityCount = 1;
    var syntax = esprima.tokenize(jsCode);

    for(var i=0;i<syntax.length; i++){
       if(complexityGrowers.includes(syntax[i].value)){
          complexityCount += 1;
      }
    }
    return complexityCount;
  }

  this.evaluate = function(jsCode) {
    return complexityEvaluator(jsCode);
  }

  this.count = function(jsCode) {
    return complexityCounter(jsCode);
  }

  this.rate = function(jsCode) {
    var complexityCount = complexityCounter(jsCode);
    var rating;   
    if(complexityCount <=3) {
      rating = 'Very Low'
    }else if(complexityCount<=11){
      rating = 'Low';
    }else if(complexityCount<=20){
      rating = 'Medium';
    }else if(complexityCount<50) {
      rating = 'High';
    }else{
      rating = "Unstable"
    }
    return rating;
  }
});