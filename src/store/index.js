import apiController from "@/apiController";

let store = {
    //debug:true,
    state:{
        articles:[]
    },
    add_art(value){
        let new_article = {
            id: this.state.articles[this.state.articles.length-1].id + 1,
            ...value
        }
        this.state.articles.push(new_article);
    },
    async getArticles(){
        this.state.articles = await apiController.getArticles();
        console.log("fetched data", this.state.articles);
    },
    changeArtPublished(id){
        this.state.articles[id-1].published = !this.state.articles[id-1].published;
    }
};

export default store;