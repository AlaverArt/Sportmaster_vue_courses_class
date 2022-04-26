import Vue from 'vue'
import Vuex from 'vuex'
import apiController from "@/apiController";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    networkStatus:{
      SUCCESS: 2,
      PROCESSING: 1,
      ERROR: 0,
      status: 1,
      errorMessage: ' '
    }
  },
  getters: {

  },
  mutations: {
    setArticles(state, articles){
      state.articles = articles;
    },
    setNetworkStatus(state, status){
      state.networkStatus.status = status;
    },
    setNetworkErrorMessage(state, errorMessage){
      state.networkStatus.errorMessage = errorMessage;
    },
    add_art(state, art){

      let new_article = {
        id: state.articles[state.articles.length-1].id + 1,
        ...art
      }
      state.articles.push(new_article);
    },
    changeArtPublished(state, id){
      state.articles[id-1].published = !state.articles[id-1].published;
    }
  },
  actions: {
    getArticlesFromApi(context) {
      context.commit('setNetworkStatus', context.state.networkStatus.PROCESSING);

      apiController.getArticles()
          .then((response) => {
            if (response.ok)
              return response.json();
            else
              //return Promise.reject(response.statusText);
                throw new Error(response.statusText)
          })
          .then((fetchedArticles) => {
            context.commit('setArticles', fetchedArticles);
            context.commit('setNetworkStatus', context.state.networkStatus.SUCCESS);
          })
          .catch((errorMessage) => {
              context.commit('setNetworkStatus', context.state.networkStatus.ERROR)
              context.commit('setNetworkErrorMessage', errorMessage);
          });
    },
    addArticle(context,  art){
      context.commit('add_art', art);
    }
  },
  modules: {
  }
})
