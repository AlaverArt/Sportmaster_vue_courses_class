<template>
<div class="wrapper">
  <form>
    <div class="">
      <label for="author_name">
        <input type="text" v-model="article.author" id="author_name" placeholder="Введите имя">
      </label>
    </div>
    <div class="">
      <textarea name="" id="" cols="30" rows="10" v-model="article.body" placeholder="Введите текст"></textarea>
    </div>
  </form>
  <div class="">
    <label for="publ">
      <input type="checkbox" id="publ" v-model="article.published">
      Опубликовано
    </label>
  </div>
  <div class="">
    <label for="subbtn">
      <input type="submit" id="subbtn" @click.prevent = "$emit('add-article', article)">
    </label>
  </div>
</div>
</template>
<script>
export default {
  name: "AddForm",
  props:{
    author: String,
    body: String,
    published: Boolean
  },
  data(){
    return{
      article: {
        author: this.author,
        body: this.author,
        published: this.published
      }
    }
  }

}
</script>

<style scoped>
input{
  margin: 10px 0;
}
.wrapper{
 text-align: center;
}
</style>