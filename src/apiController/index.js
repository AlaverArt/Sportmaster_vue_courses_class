class apiController{
    constructor() {
        this.reqURL = ''
    }
    getArticles(){
        return fetch(this.reqURL + '/articles.json');
    }
}

export default new apiController();