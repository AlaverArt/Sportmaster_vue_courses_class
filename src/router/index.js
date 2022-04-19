import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from "@/components/ArticleList";
import ArticleView from "@/views/ArticleView";
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArticleList
  },
  {
   path:'/articles/:art_id',
    component: ArticleView,
    props: (route) => store.state.articles.find((art) => art.id == route.params.art_id)
      // props:{id:1,author:"AR1",body:"ggg",published:true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
