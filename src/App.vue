<template>
  <div class="app">
    <div class="wrapper">
      <nav>
        <ul>
          <li><router-link class="link-text" to="/">Статьи</router-link></li>
          <li><router-link class="link-text" to="/AddArtFormView">Добавить статью</router-link></li>
          <li><router-link class="link-text" to="/aboutView">О нас</router-link></li>
        </ul>
      </nav>
      <div class="routerView-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods:{

  },
  beforeMount() {
    this.$store.dispatch('getArticlesFromApi');
  }
}
</script>

<style scoped>
  .app{
    height: 100%;
  }
  nav{
    display: flex;
    align-items: center;
    height: 80px;
    flex-grow: 0;
    flex-shrink: 0;
    /*background-color: #1E56A0;*/
  }
  nav ul{
    display: flex;
    width: 100%;
    padding: 0px;
    margin: 0 auto;
    align-content: center;
    justify-content: space-around;
    list-style-type: none;
  }
  nav li{
    display: flex;
    align-items: center;
    height: 40px;
    /*display: inline;*/
    background-color: #1E56A0;
    /*border-radius: 5px;
    padding: 5px 5px;*/
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    padding: 0 10px;
    margin: 0 auto;
  }
  .link-text{
    font-size: 1.5rem;
    height: 40px;
    padding: 5px 5px;
    border-radius: 5px;
    color:white;
  }
  .link-text:focus{
    background-color: #163172;
  }
  router-view{
    flex-grow: 1;
  }
</style>