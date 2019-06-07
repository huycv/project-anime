<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style lang="scss">
  $fa-font-path: '~font-awesome/fonts';
  @import '~font-awesome/scss/font-awesome.scss';
</style>