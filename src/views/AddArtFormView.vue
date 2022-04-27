<template>
  <div class="addForm">
    <h1>Хотите нам помочь? Добавьте статью!</h1>
    <div class="wrapper">
      <form>
        <div class="">
          <label for="author_name">
            <input type="text" v-model="article.author" id="author_name" placeholder="Введите имя">
          </label>
        </div>
        <div class="">
          <textarea name="" id="art_body" cols="30" rows="10" v-model="article.body" placeholder="Введите текст"></textarea>
        </div>
      </form>
      <div class="checkbox-text">
        <label>
          <!--<input type="checkbox" id="publ" v-model="article.published">-->
          <CheckBox :published="article.published" @changePublished="changePublished"></CheckBox>
          Опубликовано
        </label>
      </div>
      <div class="">
        <label for="subbtn">
          <input type="submit" id="subbtn" @click.prevent = "add_article">
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddArtFormView",
  components: {},
  data(){
    return{
      article: {
        author: '',
        body: '',
        published: false
      }
    }
  },
  methods:{
    changePublished(){
      console.log(this.article.published + ' --> ' + !this.article.published)
      this.article.published = !this.article.published;
    },
    add_article(){
      this.$store.dispatch('articlesState/addArticle',this.article);
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
input{
  margin: 10px 0;
}
.wrapper{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  padding: 0 10px;
  margin: 0 auto;
  background-color: #F6F6F6;
}
.addForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.addForm h1{
  background-color: #D6E4F0;
}
</style>