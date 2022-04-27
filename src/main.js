import Vue from 'vue'
import App from './App.vue'
import Types from "@/store/types";
import router from './router'
import store from './store'
import CheckBox from "@/components/CheckBox";

Vue.config.productionTip = false

Vue.component('CheckBox', CheckBox)

const app = new Vue({
    Types:Types,
    router: router,
    store,
    render: h => h(App)
})

app.$mount('#app')
