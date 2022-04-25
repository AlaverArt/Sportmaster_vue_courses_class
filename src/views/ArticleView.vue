<template>
  <div class="">
    <div class="art">
      <span :style="{fontSize: text_size  + 'px'}">{{author}}</span>
      <br>
      <br>
      <span>{{body}}</span>
      <br>
      <br>
      <CheckBox :published="published" @changePublished = "changePublishing"></CheckBox>
      <label>Опубликовано</label>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: "ArticleView",
  components:{

  },
  props:{
    id: Number,
    author: String,
    body: String,
    published: Boolean
  },
  data(){
    return{

    }
  },
  methods:{
    changePublishing(){
      store.changeArtPublished(this.id)
    }
  },
  mounted(){

  },
  computed: {
    text_size() {
      if (this.published == true) return 30;
      else return 15;
    },
  },
  watch:{
    name(){

    }
  }
}
</script>

<style scoped>
.art{
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
</style>