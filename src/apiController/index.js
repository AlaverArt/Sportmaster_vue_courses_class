import axios from "axios";

class apiController{
    constructor() {
        this.reqURL = ''
        this.getArticlesRequestController = undefined;
    }
    getArticles(){
        //return fetch(this.reqURL + '/articles.json');
        this.getArticlesRequestController = new AbortController();

        return axios.get(this.reqURL + '/articles.json',{
            signal: this.getArticlesRequestController.signal
        });
    }
    cancelGetArticles(){
        this.getArticlesRequestController.abort();
    }
}

export default new apiController();