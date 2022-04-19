var store = {
    //debug:true,
    state:{
        articles:[]
    },
    add_art(value){
        let new_article = {
            id: this.state.articles[this.state.articles.length].id+1,
            ...value
        }
        this.state.articles.push(new_article);
    },
    async fetch_arts(){
        await fetch('js.json').then(response => response.json()).then(articles => this.state.articles = articles);
        //console.log("fetched data");
    },
    change_art_status(id){
        this.state.articles[id-1].published = !this.state.articles[id-1].published;
    }
};

export default store;