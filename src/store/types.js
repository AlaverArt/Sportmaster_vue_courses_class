const Types = {
    mutations:{
        NETWORK_STATE_SET_STATUS:'networkState/SET_STATUS',
        NETWORK_STATE_SET_MESSAGE:'networkState/SET_MESSAGE',

        ARTICLES_STATE_SET_ARTICLES:'articlesState/SET_ARTICLES',
        ARTICLES_STATE_ADD_ART:'articlesState/ADD_ART',
        ARTICLES_STATE_CHANGE_ART_PUBLISHED:'articlesState/CHANGE_ART_PUBLISHED',

    },
    actions:{
        GET_ARTICLES_FROM_API:'GET_ARTICLES_FROM_API',
        CANCEL_GET_ARTICLES_FROM_API:'CANCEL_GET_ARTICLES_FROM_API',

        ARTICLES_STATE_ADD_ARTICLE:'articlesState/ADD_ARTICLE'
    },
    request_status:{
        REQUESTED:'REQUESTED',
        SUCCEEDED:'SUCCEEDED',
        FAILED:'FAILED'
    }
}

export default Types;