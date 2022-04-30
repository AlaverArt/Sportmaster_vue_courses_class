<template>
  <div class="addForm">
    <h1>Хотите нам помочь? Добавьте статью!</h1>
    <!--<div class="wrapper">
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
        <CheckBox :published="article.published" @changePublished="changePublished"></CheckBox>
        <label> Опубликовано</label>
      </div>
      <div class="">
        <label for="subbtn">
          <input type="submit" id="subbtn" @click.prevent = "add_article">
        </label>
      </div>
    </div>-->

    <form>
      <v-text-field
          v-model="article.author"
          label="Author"
          required
      ></v-text-field>
      <v-text-field
          v-model="article.body"
          label="Body"
          required
      ></v-text-field>
      <v-checkbox
          v-model="article.published"
          label="Published"
          required
      ></v-checkbox>

      <v-btn
          class="mr-4"
          @click.prevent = "add_article"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </div>
</template>
<script>
import Types from "@/store/types";
export default {
  name: "AddArtFormView",
  components: {},
  data(){
    return{
      article: {
        author: '',
        body: '',
        published: false,
        image:"/img/image1.jpg"
      }
    }
  },
  methods:{
    changePublished(){
      console.log(this.article.published + ' --> ' + !this.article.published)
      this.article.published = !this.article.published;
    },
    add_article(){
      this.$store.dispatch(Types.actions.ARTICLES_STATE_ADD_ARTICLE,this.article);
      this.$router.push('/')
    },
    clear(){
      this.article.author=''
      this.article.body=''
      this.article.published=false
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
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /*margin: 0 auto;*/
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