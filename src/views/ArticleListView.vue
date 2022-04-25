<template>
  <div class="">
    <div v-if="$root.$data.articles.length">
      <MyArticle
          v-for="article in $root.$data.articles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<script>
import MyArticle from "@/components/MyArticle";
//import store from "../store"
export default {
  components:{
    MyArticle,

  },
  name: "ArticleListView",
  methods:{
  }


}
</script>

<style scoped>

</style>