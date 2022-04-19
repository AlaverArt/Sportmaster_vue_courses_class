<template>
  <div class="">
    <div class="art">
      <span :style="{fontSize: text_size  + 'px'}">{{author}}</span>
      <br>
      <br>
      <span>{{body}}</span>
      <br>
      <br>
      <CheckBox :id="id" :published="published" @change-one = "$emit('change-publishing',id)"></CheckBox>
      <label>Опубликовано</label>
    </div>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox";
export default {
  name: "ArticleView",
  components:{
    CheckBox
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
  padding: 20px 10px;
  border-radius: 20px;
  margin: 10px 0;
}
</style>