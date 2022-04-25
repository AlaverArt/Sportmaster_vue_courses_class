<template>
  <div class="">
    <div class="art">
      <h1 :style="{fontSize: text_size  + 'px'}">{{author}}</h1>
      <div class="art-view-body">
        <p>{{body}}</p>
      </div>
      <div>
        <CheckBox :published="published" @changePublished = "changePublishing"></CheckBox>
        <label> Опубликовано</label>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: "ArticleView",
  components:{

  },
  props:{
    id: Number,
    author: String,
    body: String,
    published: Boolean
  },
  data(){
    return{

    }
  },
  methods:{
    changePublishing(){
      store.changeArtPublished(this.id)
    }
  },
  mounted(){

  },
  computed: {
    text_size() {
      if (this.published == true) return 30;
      else return 15;
    },
  },
  watch:{
    name(){

    }
  }
}
</script>

<style scoped>
.art{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
.art{
  background-color: #F6F6F6;
}
</style>