<template>
  <input type="checkbox" id="" @change.prevent = "$emit('change-one')" :checked="published">
</template>

<script>
export default {
  name: "CheckBox",
  props:{
    id:Number,
    published: Boolean
  },
  watch:{
    published(newVal, oldVal){
      console.log(`${oldVal} -> ${newVal}`)
    }
  }
}
</script>

<style scoped>

</style>