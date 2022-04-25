<template>
<div class="">
  <div :class="{published: article.published, unpublished: !article.published}" class="art">
      <span class="text-author" :style="{fontSize: text_size  + 'px'}">{{article.author}}</span>
      <br>
      <br>
      <span class="text-body">{{article.body}}</span>
      <br>
      <br>
      <CheckBox :published="this.article.published" @changePublished="changePublishing"></CheckBox>
      <label class="text-published">Опубликовано</label>
      <br>
      <router-link :to="artIdURL">Читать далее</router-link>
  </div>
</div>
</template>

<script>
import store from '@/store'
export default {
  name: "MyArticle",
  components:{
  },
  props:{
    article:{
      id: Number,
      author: String,
      body: String,
      published: Boolean
    }
  },
  data(){
    return{

    }
  },
  methods:{
    changePublishing(){
      store.changeArtPublished(this.article.id)
    }
  },
  computed: {
      text_size() {
        if (this.article.published == true) return 30;
        else return 15;
      },
    artIdURL(){
        return '/articles/'+this.article.id;
    }
  },
  watch:{
    name(){

    }
  }
}
</script>

<style scoped>
.published{
  background-color: #D6E4F0;
}
.unpublished{
  background-color: #F6F6F6;
}
.art{
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
.text-author, .text-body, .text-published{
  color:black;
}
.text-published{
  font-size: 1.2rem;
}
</style>