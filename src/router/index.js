import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import ArticleView from "@/views/ArticleView";
import ArticleListView from "@/views/ArticleListView";
import AddArtFormView from "@/views/AddArtFormView";
import AboutView from "@/views/AboutView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: ArticleListView
    },
    {
        path:'/articles/:art_id',
        component: ArticleView,
        props: (route) => store.state.articlesState.articles.find((art) => art.id == route.params.art_id)
    },
    {
        path:'/addArtFormView',
        component: AddArtFormView,
    },
    {
        path:'/aboutView',
        component: AboutView,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
