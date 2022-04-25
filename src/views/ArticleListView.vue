<template>
  <div class="article-list-view">
    <div v-if="articlesLength">
      <h1>Статьи обо всём на свете</h1>
      <MyArticle
          v-for="article in articles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<script>
import MyArticle from "@/components/MyArticle";
import store from '@/store'
export default {
  components:{
    MyArticle,
  },
  name: "ArticleListView",
  methods:{
  },
  computed:{
    articlesLength(){
      return store.state.articles.length;
    },
    articles(){
      return store.state.articles;
    }
  }
}
</script>

<style scoped>
  .article-list-view h1{
    background-color: #D6E4F0;
  }
</style>