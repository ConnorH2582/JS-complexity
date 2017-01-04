'use strict';

describe('myApp.jsComplexity Service', function() {

  beforeEach(module('myApp'));

  describe('jsComplexity Service', function(){

    it('should exist', inject(function(jsComplexity) {
      expect(jsComplexity).toBeDefined();
      expect(jsComplexity.count).toBeDefined();
    }));
  
    it('should evaluate a single if correctly', inject(function(jsComplexity) {
       expect(jsComplexity.count('function check(a){ if(a){return a;}}')).toEqual(2);
    }));
  
    it('should evaluate an if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(a){ if(a){return a;}else{return 0;}}')).toEqual(2);
    }));
  
    it('should evaluate an if, else if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(a){ if(a===1){return a;}else if(a===0){return 2;}else{return 0;}}')).toEqual(3);
    }));

    it('should evaluate an if, else if (2), else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(a){ if(a===1){return a;}else if(a===-1){return 1;}else if(a===0){return 2;}else{return 0;}}')).toEqual(4);
    }));

    it('should ignore all complexity increasing verbiage in strings', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(a){if(a===1){return"if";}else if(a===2){return"else if";}else if(a===3){return"for";}else if(a===4){return"while";}else if(a===5){return"case";}else if(a===6){return"||";}else if(a===7){return"?";}else{return"That\'s all, folks.";}}')).toEqual(8);
    }));

    it('should evaluate for loop correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(){for(var i=8;i<120;i+=12){console.log(i);}}')).toEqual(2);
    }));

    it('should evaluate while loop correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(){while(true){return"this is true";}}')).toEqual(2);
    }));

    it('should evaluate switch statements correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(cond){switch(cond){case"one":return true;case"two":return "case two";default: return false;}}')).toEqual(3);
    }));

    it('should evaluate ternery expressions correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(){var firstCheck=false,secondCheck=false,access=firstCheck?"Access denied":secondCheck?"Access denied":"Access granted";}')).toEqual(3);
    })); 

    it('should evaluate the or logical (||) operator correctly', inject(function(jsComplexity) {
      expect(jsComplexity.count('function check(obj,lowval,hival){if((obj.value<lowval)||(obj.value>hival)) console.log("Invalid Value!");}')).toEqual(3);
    }));
  });
});
  