import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import store from "./store";
import CheckBox from "@/components/CheckBox";

Vue.config.productionTip = false

Vue.component('CheckBox', CheckBox)

const app = new Vue({
    //data: store.state,
    router: router,
    store,
    render: h => h(App)
})

app.$mount('#app')
