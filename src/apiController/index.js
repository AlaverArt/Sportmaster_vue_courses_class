class apiController{
    constructor() {
        this.reqURL = ''
    }
    async getArticles(){
        try{
            const articles = await (await fetch(this.reqURL + '/articles.json')).json();
            return articles;
        }catch (e){
            console.error(e)
        }
    }
}

export default new apiController();