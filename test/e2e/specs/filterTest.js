// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'no monsters arr shown when page load': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .assert.elementNotPresent('.cardsBlock .card')
      .end()
  },
  'show monster cards when monster name click': function(browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .click('.filterBlock .names .list-item[name="ドスジャグラス"]')
      .getText('.cardsBlock .card[name="ドスジャグラス"] .title', function(result) {
        this.assert.equal(result.value, "賊竜 ドスジャグラス")
      })
      .click('.filterBlock .names .list-item[name="プケプケ"]')
      .getText('.cardsBlock .card[name="プケプケ"] .title', function(result) {
        this.assert.equal(result.value, "毒妖鳥 プケプケ")
      })
      .assert.elementNotPresent('.cardsBlock .card[name="ジュラトドス"]')
      .click('.filterBlock .names .list-item[name="トビカガチ"]')
      .getText('.cardsBlock .card[name="トビカガチ"] .title', function(result) {
        this.assert.equal(result.value, "飛雷竜 トビカガチ")
      })
      .end()
  },
  'hide monster cards when shown monster name click': function(browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible('#app', 5000)
      .click('.filterBlock .names .list-item[name="ドスジャグラス"]')
      .getText('.cardsBlock .card[name="ドスジャグラス"] .title', function(result) {
        this.assert.equal(result.value, "賊竜 ドスジャグラス")
      })
      .click('.filterBlock .names .list-item[name="ドスジャグラス"]')
      .assert.elementNotPresent('.cardsBlock .card[name="ドスジャグラス"]')
      .click('.filterBlock .names .list-item[name="プケプケ"]')
      .click('.filterBlock .names .list-item[name="ジュラトドス"]')
      .click('.filterBlock .names .list-item[name="トビカガチ"]')
      .getText('.cardsBlock .card[name="ジュラトドス"] .title', function(result) {
        this.assert.equal(result.value, "泥魚竜 ジュラトドス")
      })
      .getText('.cardsBlock .card[name="プケプケ"] .title', function(result) {
        this.assert.equal(result.value, "毒妖鳥 プケプケ")
      })
      .getText('.cardsBlock .card[name="トビカガチ"] .title', function(result) {
        this.assert.equal(result.value, "飛雷竜 トビカガチ")
      })
      .click('.filterBlock .names .list-item[name="ジュラトドス"]')
      .assert.elementNotPresent('.cardsBlock .card[name="ジュラトドス"]')
      .getText('.cardsBlock .card[name="プケプケ"] .title', function(result) {
        this.assert.equal(result.value, "毒妖鳥 プケプケ")
      })
      .getText('.cardsBlock .card[name="トビカガチ"] .title', function(result) {
        this.assert.equal(result.value, "飛雷竜 トビカガチ")
      })
      .end()
  }
}
