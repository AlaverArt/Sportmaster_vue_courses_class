import Vue from 'vue'
import Vuex from 'vuex'
import Types from "@/store/types";
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
    GET_ARTICLES_FROM_API(context) {
      context.commit(Types.mutations.NETWORK_STATE_SET_STATUS, Types.request_status.REQUESTED);

      articlesService.getArticles()
          .then((fetchedArticles) => {
            context.commit(Types.mutations.ARTICLES_STATE_SET_ARTICLES, fetchedArticles);
            context.commit(Types.mutations.NETWORK_STATE_SET_STATUS, Types.request_status.SUCCEEDED);
          })
          .catch((error) => {
              context.commit(Types.mutations.NETWORK_STATE_SET_STATUS, Types.request_status.FAILED)
              context.commit(Types.mutations.NETWORK_STATE_SET_MESSAGE, error.message);
          });
    },
    CANCEL_GET_ARTICLES_FROM_API(){
        //context.commit(Types.mutations.NETWORK_STATE_SET_STATUS, Types.request_status.FAILED);
        //context.commit(Types.mutations.NETWORK_STATE_SET_MESSAGE, 'Загрузка статей отменена');

        articlesService.cancelGetArticles();
    }
  }
})
