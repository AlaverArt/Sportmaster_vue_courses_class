import axios from "axios";

class apiController{
    constructor() {
        this.reqURL = 'http://localhost:10000'
        this.getArticlesRequestController = undefined;
    }
    getArticles(){
        //return fetch(this.reqURL + '/articles.json');
        this.getArticlesRequestController = new AbortController();

        return axios.get(this.reqURL + '/articles',{
            signal: this.getArticlesRequestController.signal
        });
    }
    cancelGetArticles(){
        this.getArticlesRequestController.abort();
    }
}

export default new apiController();