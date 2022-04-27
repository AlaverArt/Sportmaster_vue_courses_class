const articlesState = {
    namespaced:true,
    state:() => ({
        articles:[]
    }),
    mutations:{
        SET_ARTICLES(state, articles){
            state.articles = articles;
        },
        ADD_ART(state, art){

            let new_article = {
                id: state.articles[state.articles.length-1].id + 1,
                ...art
            }
            state.articles.push(new_article);
        },
        CHANGE_ART_PUBLISHED(state, id){
            state.articles[id-1].published = !state.articles[id-1].published;
        }
    },
    actions:{
        ADD_ARTICLE(context,  art){
            context.commit('ADD_ART', art);
        }
    }
}

export default articlesState;