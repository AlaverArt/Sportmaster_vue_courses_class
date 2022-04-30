<template>
<div class="">
  <!--<div :class="{published: article.published, unpublished: !article.published}" class="art">
      <span class="text-author" :style="{fontSize: text_size  + 'px'}">{{article.author}}</span>
      <br>
      <br>
      <span class="text-body">{{article.body}}</span>
      <br>
      <br>
      <CheckBox :published="this.article.published" @changePublished="changePublishing"></CheckBox>
      <label class="text-published"> Опубликовано</label>
      <br>
      <router-link :to="artIdURL"><span class="readMore-text">Читать далее</span></router-link>
  </div>-->
  <v-card
      class="mx-auto my-2"
      max-width="80%"
      outlined
  >
    <v-list-item
        three-line
        :class="{published: article.published, unpublished: !article.published}"
    >
      <v-list-item-content>
        <div class="text-overline mb-4">
          ArticlesDaily
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ article.author }}
        </v-list-item-title>
        <v-list-item-subtitle>{{article.body}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
          tile
          size="80"
      >
        <img :src="article.image">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
          v-bind:to="artIdURL"
      >
        Читать далее
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import Types from "@/store/types";
export default {
  name: "MyArticle",
  components:{
  },
  props:{
    article:{
      id: Number,
      author: String,
      body: String,
      published: Boolean,
      image:String
    }
  },
  data(){
    return{

    }
  },
  methods:{
    changePublishing(){
      this.$store.commit(Types.mutations.ARTICLES_STATE_CHANGE_ART_PUBLISHED,this.article.id);
    }
  },
  computed: {
      text_size() {
        if (this.article.published == true) return 30;
        else return 15;
      },
    artIdURL(){
        return '/articles/'+this.article.id;
    }
  },
  watch:{

  }
}
</script>

<style scoped>
.published{
  background-color: #D6E4F0;
}
.unpublished{
  background-color: #F6F6F6;
}
.art{
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
.text-author, .text-body, .text-published{
  color:black;
}
.text-published{
  font-size: 1.2rem;
}
.readMore-text{
  font-size: 1.3rem;
}
</style>