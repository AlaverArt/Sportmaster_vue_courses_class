const articlesState = {
    namespaced:true,
    state:() => ({
        articles:[]
    }),
    mutations:{
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
    actions:{
        addArticle(context,  art){
            context.commit('add_art', art);
        }
    }
}

export default articlesState;