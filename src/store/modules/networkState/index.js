const networkState = {
    namespaced:true,
    state:() => ({
        SUCCESS: 2,
        PROCESSING: 1,
        ERROR: 0,
        status: 1,
        errorMessage: ' '
    }),
    getters:{

    },
    mutations:{
        setStatus(state, status){
            state.status = status;
        },
        setErrorMessage(state, errorMessage){
            state.errorMessage = errorMessage;
        }
    }
}

export default networkState;