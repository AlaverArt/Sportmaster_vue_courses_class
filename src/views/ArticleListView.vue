<template>
  <div class="article-list-view">
    <div v-if="$root.$data.articles.length">
      <h1>Статьи обо всём на свете</h1>
      <MyArticle
          v-for="article in $root.$data.articles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<script>
import MyArticle from "@/components/MyArticle";
//import store from "../store"
export default {
  components:{
    MyArticle,

  },
  name: "ArticleListView",
  methods:{
  }


}
</script>

<style scoped>
  .article-list-view h1{
    background-color: #D6E4F0;
  }
</style>