const networkState = {
    namespaced:true,
    state:() => ({
        status: 'REQUESTED',
        message: ' '
    }),
    getters:{

    },
    mutations:{
        SET_STATUS(state, status){
            state.status = status;
        },
        SET_MESSAGE(state, message){
            state.message = message;
        }
    }
}

export default networkState;