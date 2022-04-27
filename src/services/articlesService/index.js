import apiController from "@/apiController";
import axios from "axios";

class articlesService{
    getArticles(){
        /* //download articles using fetch
        return apiController.getArticles()
            .then((response) => {
                if (response.ok)
                    return response.json();
                else
                    //return Promise.reject(response.statusText);
                    throw new Error(response.statusText)
            })
         */

        return apiController.getArticles()
            .then((response) => {
                if(response.status < 400){
                    return response.data;
                }
                //else
                    //throw new Error(response.status + ' ' + response.statusText);
            })
            .catch((error) => {
                if(axios.isCancel(error))
                    throw new Error('Загрузка статей отменена');
                else
                    throw new Error(error.message);
            });
    }
    cancelGetArticles(){
        apiController.cancelGetArticles();
    }
}

export default new articlesService()