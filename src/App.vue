<template>
  <div id="app">
    <ArticleList>
      HelloWorld
    </ArticleList>
  </div>
</template>

<script>
import ArticleList from "./components/ArticleList";
import CheckBox from "./components/CheckBox";
import Vue from "vue";
Vue.component('CheckBox',CheckBox);
export default {
  name: 'App',
  components: {
    ArticleList
  }
}
</script>

<style>

</style>
