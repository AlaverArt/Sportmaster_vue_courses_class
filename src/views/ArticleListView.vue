<template>
  <div class="article-list-view">
    <div v-if="networkStateStatus == SUCCEEDED">
      <div v-if="articlesLength">
        <h1 class="article-list-view__title">Статьи обо всём на свете</h1>
        <MyArticle
            v-for="article in articles"
            :key="article.id"
            :article="article"
        />
      </div>
    </div>
    <div v-else-if="networkStateStatus == REQUESTED" class="processing">
      <h1 class="loading">Загрузка статей...</h1>
      <label class="requested-subtitle">Слишком долгая загрузка?</label>
      <button class="requested-cancel-button" @click="cancelGetArticles">Отменить</button>
    </div>
    <div v-else-if="networkStateStatus == FAILED" class="error">
        <h1>{{ networkStateMessage }}</h1>
        <button class="error-button" @click="getArticles">Попробовать снова</button>
    </div>
  </div>
</template>

<script>
import MyArticle from "@/components/MyArticle";
import store from "@/store";
import Types from "@/store/types";
export default {
  components:{
    MyArticle,
  },
  name: "ArticleListView",
  methods:{
    getArticles(){
      console.log(this.Types);
      store.dispatch(Types.actions.GET_ARTICLES_FROM_API);
    },
    cancelGetArticles(){
      store.dispatch(Types.actions.CANCEL_GET_ARTICLES_FROM_API);
    }
  },
  computed:{
    articlesLength(){
      return store.state.articlesState.articles.length;
    },
    articles(){
      return store.state.articlesState.articles;
    },
    networkStateStatus(){
      return store.state.networkState.status;
    },
    networkStateMessage(){
      return store.state.networkState.message;
    },
    REQUESTED(){
      return Types.request_status.REQUESTED;
    },
    SUCCEEDED(){
      return Types.request_status.SUCCEEDED;
    },
    FAILED(){
      return Types.request_status.FAILED;
    }
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
  .requested-subtitle{
    margin: 5px 0 0 0;
  }
  .error{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error-button{
    margin: 5px 0 0 0;
  }
  .requested-cancel-button{
    margin: 10px 0 0 0;
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