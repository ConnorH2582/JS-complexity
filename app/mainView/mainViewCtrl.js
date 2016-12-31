'use strict';

angular.module('myApp')
.controller('mainViewCtrl', ['$scope', 'jsComplexity',
 function($scope, jsComplexity) {

  $scope.reset = function() {
    $scope.jsCode = [ // Expected Complexity: 3\n",
                      "function a(x) {\n",
                      "    if (true) {\n",
                      "        return 'if'; // 1st path\n",
                      "    } else if (false) {\n",
                      "        return x+1; // 2nd path\n",
                      "    } else if (true || false) {\n",
                      "        return x+2; // 3nd path\n",
                      "    }else {\n",
                      "        return 4; // 4rd path\n",
                      "    }\n",
                      " }"].join('');
    $scope.checkJSCode($scope.jsCode);
  };

  $scope.checkJSCode = function (code)
  {
    $scope.checkResult = jsComplexity.evaluate(code);
  };

  $scope.reset();
}]);