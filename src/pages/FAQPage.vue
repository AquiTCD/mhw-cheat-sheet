<template lang="pug">
.faq
  h2.header FAQ
  v-ons-card
    .title Q.データが間違っています。
    .answer
      | A.
      | メニューの問題報告から報告いただけると助かります。
  v-ons-card
    .title Q.データの参照元はどこですか？
    .answer
      | A.
      | ゲーム内のモンスター図鑑を参照しています。一部部位の表記のみ若干の変更をしています。
  v-ons-card
    .title Q.固まったり、なんか上手く動きません。
    .answer
      | A.
      | 以下の点を確認してください
      ul
        li Web-view(Twitterやチャットツールなどから直接見れる表示)ではなくブラウザで開いている
        li ブラウザを再読み込み（リロード）した
      | 以上を試してみて解消されない場合は、問題報告メニューから報告いただけると助かります。
  v-ons-card
    .title Q.改善点の提案があります。
    .answer
      | A.
      | 問題報告からご意見お待ちしております。ただし、確実にご要望に応えるお約束はしかねます。
  v-ons-card
    .title Q.不具合の報告をしたり、改善点の報告をしたのに修正されない。
    .answer
      | A.
      | なんらかの理由に修正できない、もしくはしないこともあります。ご了承ください。
</template>

<script>
export default {
  name: 'faq',
}
</script>

<style lang="stylus" scoped>
.header
  text-align: center
</style>
