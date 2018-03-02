// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'page loading': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home-toolbar')
      .assert.containsText('.home-toolbar .center', 'MHW WeakPoints CheatSheet')
      .end()
  },
  'diabros is not shown': function(browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .assert.elementNotPresent('.testImg')
      .end()
  }
}
