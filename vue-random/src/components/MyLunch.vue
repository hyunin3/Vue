<template>
  <div>
    <h1>점심 메뉴 추천</h1>
    <button @click="getLunch">오늘은 뭘 먹으면 좋을까</button>
    <hr>
    <p v-if="lunch">오늘의 추천 메뉴는 {{ lunch }}입니다!</p>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'MyLunch',
  data () {
    return {
      lunchMenu: ['짜장면', '삼겹살', '초밥', '돈까스', '비빔밥'],
      lunch: ''
    }
  },
  methods: {
    getLunch () {
      this.lunch = lodash.sample(this.lunchMenu)
    }
  }

}
</script>

<style>

</style>