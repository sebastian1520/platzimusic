<template lang="pug">
#app
  img(src='https://sebastian1520.github.io/platzimusic/assets/logo.png')
  h1 platzimusic
  select(v-model="selectCountry")
    option(v-for="country in countrys" v-bind:value="country.value") {{country.name}}
  spinner(v-show="load")
  ul
    artist(v-for="artist in artists" :artist="artist" :key="artist.mbid") {{artist.name}}
</template> 

<script>
import artist from './component/artista.vue'
import artistas from './api'
import spinner from './component/spinner.vue'
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countrys:[
        {name:"Colombia", value:"colombia"},
        {name:"Argentina" ,value:"argentina"},
        {name:"España",value:"spain"}
      ],
      selectCountry:"colombia",
      load:true
    }
  },
  components:{
    artist,
    spinner
  },
  methods:{
    refreshArtist(){
      const self = this
      self.load = true
      this.artists = []
      artistas(this.selectCountry)
      .then(function (artists){
        self.load = false
        self.artists = artists
    })
    }
  },
  mounted:function(){
     this.refreshArtist()
  },
  watch:{
    selectCountry:function(){
      this.refreshArtist()
    }
  }

}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
