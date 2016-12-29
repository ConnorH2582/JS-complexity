'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('JS Complexity', function() {

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});
