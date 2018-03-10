<template lang="pug">
.about
  h2.header About
  v-ons-card
    .date 2018-03-08
    .title 0.3.0
    ul
      li アコーディオンの開閉時、項目増減時にアニメーションを追加
      li キーワードによる絞り込み検索機能を実装
      li 軽微な文言の修正
  v-ons-card
    .date 2018-03-07
    .title 0.2.2
    ul
      li 竜種フィルタのスライダがタップで正常動作しない不具合の修正
      li 表示すべきものがない時、ダミーを追加
      li 竜種フィルタ、名称ともに折り畳めるように実装
      li 全ての竜種フィルタスイッチ、全ての名称チェックのオン/オフを実装
      li スマートフォンのホーム登録用のアイコンを修正
      li その他、軽微なスタイルと文言の修正
  v-ons-card
    .date 2018-03-06
    .title 0.2.1
    ul
      li メニューにSNS用シェアボタンを追加
      li 問題報告を埋め込みに変更
      li iOSのホーム画面用のアイコンを修正
  v-ons-card
    .date 2018-03-05
    .title 0.2.0
    ul
      li メニューを追加
      ul
        li FAQ, about, 問題報告
      li アイコンを修正
  v-ons-card
    .date 2018-03-04
    .title 0.1.0
    ul
      li ファーストリリース
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
</style>
