'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JS Complexity', function () {

  beforeEach(function () {
    browser.get('index.html');
  });

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should display the complexity number when "Check!" is clicked', function () {
    element(by.css('#checkButton')).click().then(function () {
      var e = element(by.css('#checkCount'));
      expect(e.getText()).toBe('3');
    })
  });
  it('should display the complexity breakdown when "Check!" is clicked', function () {
      element(by.css('#checkButton')).click().then(function () {
        var e = element(by.css('#breakdown'));
        expect(e.getText()).toBe(["The minimum cyclomatic complexity of a function is 1\n",
                                  "Line 3\n",
                                  "The if Keyword raises the complexity to 2\n",
                                  "Line 5\n",
                                  "The if Keyword raises the complexity to 3"].join(''));
    });
  });
});

//# sourceMappingURL=scenarios-compiled.js.map