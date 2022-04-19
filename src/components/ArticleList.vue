<template>
<div class="">
  <div v-if="articles.length">
    <MyArticle
      v-for="article in articles"
      :key="article.id"
      :id = "article.id"
      :author = "article.author"
      :body = "article.body"
      :published = "article.published"
      @change-publishing = "change_status"
    />
  </div>
  <AddForm author="" body="" published="" @add-article="add_art"></AddForm>
</div>
</template>

<script>
import MyArticle from "./MyArticle";
import AddForm from "./AddForm";
export default {
  components:{
    MyArticle,
    AddForm
  },
  name: "ArticleList",
  data(){
    return{
      articles:[],
    }
  },
  methods:{
    add_art(value){
      let new_article = {
        id: this.articles[length].id+1,
        ...value
      }
      this.articles.push(new_article);
    },
    change_status(id){
      this.articles[id-1].published = !this.articles[id-1].published;
    }
  },
  beforeMount() {
    fetch('/js.json').then(response => response.json()).then(articles => this.articles = articles);
    console.log("fetched data");
  }


}
</script>

<style scoped>

</style>