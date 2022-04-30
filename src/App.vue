<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="header__title">ArticlesDaily</span>
      </div>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer
          class="menu"
          v-model="drawer"
          app
          absolute
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <span class="menu__link">Home</span>
            </v-list-item>

            <v-list-item to="/addArtFormView">
              <span class="menu__link">Add article</span>
            </v-list-item>

            <v-list-item to="/aboutView">
              <span class="menu__link">About</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        Alaverdyan Artem — <strong>2022</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Types from "@/store/types";
export default {
  name: 'App',

  data: () => ({
    drawer:false
  }),
  beforeMount() {
    this.$store.dispatch(Types.actions.GET_ARTICLES_FROM_API);
  }
};
</script>

<style scoped>
.header__title{
  font-size: 2rem;
}
.menu{
  padding-top: 2rem;
}
.menu__link{
  font-size: 2rem;
}
</style>
