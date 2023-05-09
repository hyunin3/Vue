<template>
  <div class="about">
    <h1>오늘의 점심 메뉴 추천</h1>
    <button @click="getLunch">메뉴 추천 받기</button>
    <hr>
    <p v-if="lunch">오늘의 추천 메뉴는 {{ lunch }}입니다!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import lodash from 'lodash'


export default {
  name: 'MyLunch',
  data () {
    return {
      lunchMenu: ['국밥', '짜장면', '돈까스', '비빔밥', '칼국수', '삼계탕'],
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