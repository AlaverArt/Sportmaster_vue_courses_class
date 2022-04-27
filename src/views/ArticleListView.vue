<template>
  <div class="article-list-view">
    <div v-if="networkState.status == networkState.SUCCESS">
      <div v-if="articlesLength">
        <h1 class="article-list-view__title">Статьи обо всём на свете</h1>
        <MyArticle
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
      </div>
    </div>
    <div v-else-if="networkState.status == networkState.PROCESSING" class="processing">
      <h1 class="loading">Загрузка статей...</h1>
    </div>
    <div v-else-if="networkState.status == networkState.ERROR" class="error">
        <h1>Извините, не удалось загрузить статьи</h1>
        <button @click="getArticles">Попробовать снова</button>
    </div>
  </div>
</template>

<script>
import MyArticle from "@/components/MyArticle";
import store from "@/store";
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
      return store.state.articlesState.articles.length;
    },
    articles(){
      return store.state.articlesState.articles;
    },
    networkState(){
      return store.state.networkState;
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
  /*---------Анимация загрузки--------*/
  .loading {
    font-weight: bold;
    display:inline-block;
    font-family: monospace;
    font-size: 30px;
    clip-path: inset(0 3ch 0 0);
    animation: l 1.5s steps(4) infinite;
  }
  @keyframes l {
    to {
      clip-path: inset(0 -1ch 0 0)
    }
  }
  /*---------Анимация загрузки--------*/
</style>