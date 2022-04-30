<template>
  <div class="about">
    <h1>О нас</h1>
    <div class="about-body">
      <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
      >
        <v-carousel-item
            v-for="(about, i) in abouts"
            :key="i"
        >
          <v-sheet
              height="100%"
          >
            <v-row
                class="fill-height mx-5 my-3 py-3"
                align="center"
                justify="center"
            >
              <div class="text-h4">
                {{ about }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name:"AboutView",
  data(){
    return{
      abouts:[
        "Мы бедные студенты курсов спортмастера, которые ничего не успевали с 4 парами в неделю, а теперь у нас 6 пар. Все статьи вымышлены, совпадения случайны",
        "Все статьи вымышлены, совпадения случайны",
        "Мы бедные студенты курсов спортмастера, которые ничего не успевали с 4 парами в неделю, а теперь у нас 6 пар. Все статьи вымышлены, совпадения случайны",
        "Все статьи вымышлены, совпадения случайны"
      ]
    }
  }
}
</script>

<style scoped>
  .about-body p{
    font-size: 2rem;
  }
  .about-body{
    background-color: #F6F6F6;
  }
  .about h1{
    background-color: #D6E4F0;
  }
</style>
