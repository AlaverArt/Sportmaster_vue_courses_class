import Vue from 'vue'
import Vuex from 'vuex'
import networkStateModule from "@/store/modules/networkState";
import articlesStateModule from "@/store/modules/articlesState";
import articlesService from "@/services/articlesService";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    networkState: networkStateModule,
    articlesState: articlesStateModule
  },
  actions: {
    getArticlesFromApi(context) {
      context.commit('networkState/setStatus', context.state.networkState.PROCESSING);

     articlesService.getArticles()
          .then((fetchedArticles) => {
            context.commit('articlesState/setArticles', fetchedArticles);
            context.commit('networkState/setStatus', context.state.networkState.SUCCESS);
          })
          .catch((errorMessage) => {
              context.commit('networkState/setStatus', context.state.networkState.ERROR)
              context.commit('networkState/setErrorMessage', errorMessage);
          });
    }
  }
})
