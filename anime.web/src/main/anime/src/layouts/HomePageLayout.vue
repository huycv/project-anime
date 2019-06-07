<template>
  <v-app class="app">
    <v-toolbar class="white">
      <div class="logo-container">
        <a>
          <v-img
            class="white lighten-2"
            :src="require('@/assets/logo.png')"
            width="170"
            height="55"
            alt="logo"
            @click="$router.push({name: 'routes.home'})">
          </v-img>
        </a>      
      </div>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="goToAnime">{{ $t('layouts.home.anime') }}</v-btn>
        <v-btn flat>{{ $t('layouts.home.manga') }}</v-btn>
        <v-btn flat>{{ $t('layouts.home.do_choi') }}</v-btn>
        <v-btn flat>{{ $t('layouts.home.game') }}</v-btn>
        <v-btn flat>{{ $t('layouts.home.tin_tuc') }}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <div class="search">
        <v-text-field
          solo-inverted
          flat
          hide-details
          append-icon="search"
          color="white"
          :placeholder="$t('layouts.home.search')">
        </v-text-field>
      </div>
    </v-toolbar>

    <v-content class="main">
      <router-view></router-view>
    </v-content>

    <v-footer
      dark
      height="auto">
      <v-card
        class="flex"
        flat
        tile>
        <v-card-title class="blue">
          <strong class="subheading">{{ $t('layouts.home.footer.title') }}</strong>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon>
            <v-icon size="20px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 - <strong>{{ $t('layouts.home.footer.action') }}</strong>
        </v-card-actions>
      </v-card>

    </v-footer>
  </v-app>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomePageLayout extends Vue {

  private icons: any[] =[
    'fa fa-facebook', 
    'fa fa-twitter', 
    'fa fa-google-plus', 
    'fa fa-linkedin', 
    'fa fa-instagram'
  ];


  private goToAnime() {
    this.$router.push({
      name: 'routes.anime',
    });
  }
    
}
</script>