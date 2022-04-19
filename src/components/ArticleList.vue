<template>
<div class="">
  <div v-if="$root.$data.articles.length">
    <MyArticle
      v-for="article in $root.$data.articles"
      :key="article.id"
      :article="article"
      @change-publishing = "change_status"
    />
  </div>
  <AddForm @add-article="add_art"></AddForm>
</div>
</template>

<script>
import MyArticle from "./MyArticle";
import AddForm from "./AddForm";
import store from "@/store"
export default {
  components:{
    MyArticle,
    AddForm
  },
  name: "ArticleList",
  methods:{
    add_art(value){
      store.add_art(value);
    },
    change_status(id){
      store.change_art_status(id);
    }
  },
  beforeMount() {
    store.fetch_arts();
  }


}
</script>

<style scoped>

</style>