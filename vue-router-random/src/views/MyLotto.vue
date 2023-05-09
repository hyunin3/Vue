<template>
  <div class="home">
    <h1>이번 주의 행운번호</h1>
    <button @click="getLottoNumber">행운번호 받기</button>
    <hr>
    <p v-if="lottoNumber.length">{{ lottoNumber }}</p>
    <PastNumbers/>
  </div>
</template>

<script>
// @ is an alias to /src
import lodash from 'lodash'
import PastNumbers from '@/components/PastNumbers.vue'

export default {
  name: 'MyLotto',
  components: {
    PastNumbers
  },
  data () {
    return {
      lottoNumber: [],
    }
  },
  methods: {
    getLottoNumber() {
      const numbers = lodash.range(1, 46)
      this.lottoNumber = lodash.sampleSize(numbers, 6)
      this.lottoNumber.sort(function(a, b) {
        return a-b
      })
    }
  }
}
</script>
