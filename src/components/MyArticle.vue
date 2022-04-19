<template>
<div class="">
  <div :class="{published: article.published, unpublished: !article.published}" class="art">
      <span :style="{fontSize: text_size  + 'px'}">{{article.author}}</span>
      <br>
      <br>
      <span>{{article.body}}</span>
      <br>
      <br>
      <CheckBox :id="article.id" :published="article.published" @change-one = "$emit('change-publishing',article.id)"></CheckBox>
      <label>Опубликовано</label>
      <br>
      <router-link :to="goToArtId">Читать далее</router-link>
  </div>
</div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
export default {
  name: "MyArticle",
  components:{
    CheckBox
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
  computed: {
      text_size() {

        if (this.article.published == true) return 30;
        else return 15;
      },
    goToArtId(){
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
background-color: green;
}
.unpublished{
background-color: red;
}
.art{
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
</style>