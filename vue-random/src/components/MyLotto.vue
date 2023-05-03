<template>
  <div>
    <h1>이번주의 행운번호</h1>
    <button @click="getLottoNumber">행운번호 받기</button>
    <hr>
    <p v-if="lottoNumber.length">{{ lottoNumber }}</p>
  </div>
</template>

<script>
import lodash from 'lodash'

export default {
  name: 'MyLotto',
  data () {
    return {
      lottoNumber: [],
    }
  },
  methods: {
    getLottoNumber () {
      const numbers = lodash.range(1, 46)
      this.lottoNumber = lodash.sampleSize(numbers, 6)
    },
  }

}
</script>

<style>

</style>