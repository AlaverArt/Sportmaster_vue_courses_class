import Vue from 'vue'
import App from './App.vue'
import Types from "@/store/types";
import router from './router'
import store from './store'
import CheckBox from "@/components/CheckBox";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.component('CheckBox', CheckBox)

const app = new Vue({
    Types:Types,
    router: router,
    store,
    vuetify,
    render: h => h(App)
})

app.$mount('#app')
