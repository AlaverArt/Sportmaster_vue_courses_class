import apiController from "@/apiController";

class articlesService{
    getArticles(){
        return apiController.getArticles()
            .then((response) => {
                if (response.ok)
                    return response.json();
                else
                    //return Promise.reject(response.statusText);
                    throw new Error(response.statusText)
            })
    }
}

export default new articlesService()