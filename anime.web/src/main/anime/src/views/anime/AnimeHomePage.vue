<template>
  <div class="animated fadeIn">
    <v-container grid-list-md>
      <v-carousel
        width="100%"
        height="100%"
        dark>
        <a>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade"
            >
          </v-carousel-item>
        </a>
      </v-carousel>
      <v-flex>
        <v-tabs
          v-model="tab"
          align-with-title>
          <v-tabs-slider color="red"></v-tabs-slider>
          <v-tab v-for="tab in tabs" :key="tab"> {{ tab }} </v-tab>
        </v-tabs>
      </v-flex>
      <v-spacer></v-spacer>

      <v-layout row wrap>       
        <v-flex v-for="i in 6" :key="`3${i}`" xs2 grid-list-md>
        <v-layout column>
          <a style="padding: 4px;">
            <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>
            <div class="name">Default (cover)</div>
          </a>
        </v-layout>
        </v-flex>
      </v-layout>
       
    </v-container>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AnimeHomePage extends Vue {
  private items: any[] = [
    {src: 'http://getwallpapers.com/wallpaper/full/9/0/c/543250.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/a/e/4/242640.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/d/5/7/473813.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/8/0/4/46520.jpg'},
    {src: 'http://getwallpapers.com/wallpaper/full/4/a/9/703476-bleach-anime-wallpaper-1920x1080-cell-phone.jpg'},
  ];

  private tabs: any[] = [
    'TẤT CẢ',
    'MỚI CẬP NHẬT', 
    'THỂ LOẠI', 
    'XEM NHIỀU',
    'HÔM NAY XEM GÌ',
    'LIVE ACTION', 
  ];

}
</script>



<style lang="scss" scoped>
  .name {
    color: black;
  }
</style>