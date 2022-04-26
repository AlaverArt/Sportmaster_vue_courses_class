<template>
  <div class="article-list-view">
    <div v-if="networkStatus.status == networkStatus.SUCCESS">
      <div v-if="articlesLength">
        <h1 class="article-list-view__title">Статьи обо всём на свете</h1>
        <MyArticle
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
      </div>
    </div>
    <div v-else-if="networkStatus.status == networkStatus.PROCESSING" class="processing">
      <h1>Загрузка статей...</h1>
    </div>
    <div v-else-if="networkStatus.status == networkStatus.ERROR" class="error">
        <h1>Извините, не удалось загрузить статьи</h1>
        <button @click="getArticles">Попробовать снова</button>
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
    getArticles(){
      store.dispatch('getArticlesFromApi');
    }
  },
  computed:{
    articlesLength(){
      return store.state.articles.length;
    },
    articles(){
      return store.state.articles;
    },
    networkStatus(){
      return store.state.networkStatus
    },
  }
}
</script>

<style scoped>
  .article-list-view__title{
    background-color: #D6E4F0;
  }
  .processing{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>