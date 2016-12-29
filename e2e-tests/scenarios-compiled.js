'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JS Complexity', function () {

  beforeEach(function () {
    browser.get('index.html');
  });

  /*it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });*/

  it('should display the complexity number when "Evaluate" is clicked', function () {
    element(by.css('#submit')).click().then(function () {
      var e = element(by.css('#content .info .title'));
      expect(e.getText()).toBe('Cyclomatic complexity: 3 (low)');
    });
  });
});

//# sourceMappingURL=scenarios-compiled.js.map