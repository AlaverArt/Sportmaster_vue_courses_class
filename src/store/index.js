import Vue from 'vue'
import Vuex from 'vuex'
import apiController from "@/apiController";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[]
  },
  getters: {
    getArticles(){
      return this.state.articles;
    }
  },
  mutations: {
    setArticles(state, articles){
      state.articles = articles;
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
    async getArticlesFromApi(context){

      let articles = await apiController.getArticles();
      context.commit('setArticles', articles)

      console.log("fetched data", this.state.articles);
    }
  },
  modules: {
  }
})
