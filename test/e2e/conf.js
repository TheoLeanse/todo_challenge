exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['*Spec.js'],
  onPrepare: function() {
    browser.driver.get('http://127.0.0.1:8000');
  }
};
