<template>
  <div class="home">
    <h1>CAT API</h1>
    <img v-if="imgSrc" :src="imgSrc" alt="CAT?">
    <button @click="getCat">cat box?</button>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'CatView',
  data() {
    return {
      imgSrc: null,
      message: "Now Loading..."
    }
  },
  methods: {
    getCat() {
      const catImageURL = `https://api.thecatapi.com/v1/images/search`

      axios({
        method: 'get',
        url: catImageURL
      })
      .then((response) => {
        const catImgSrc = response.data[0].url
        // console.log(response)
        this.imgSrc = catImgSrc
      })
      .catch((error) => {
        console.log(error)
        this.$router.push('/dantto')
      })

    }
  },
  created() {
    this.getCat()
  }
}
</script>
