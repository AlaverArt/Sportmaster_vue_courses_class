<template>
  <input v-model="published2" type="checkbox" @change.prevent = "$emit('changePublished')">
</template>

<script>
export default {
  name: "CheckBox",
  props:{
    published : Boolean,
  },
  data(){
    return{
      published2:this.published,
    }
  }
}
</script>

<style scoped>
  input{
    transform: scale(2);
  }
</style>