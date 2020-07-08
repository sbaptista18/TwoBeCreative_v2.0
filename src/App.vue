<template>
  <div class="container">
    <app-header></app-header>
    <router-view style="flex: 1 1 auto;"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  mounted() {
    var body = document.getElementsByTagName("BODY")[0];
    var html = document.getElementsByTagName("HTML")[0];
    if (this.$route.path === "/") {
      body.className = "";
      html.className = "";
    } else {
      body.className = "height";
      html.className = "height";
    }
  },
  watch: {
    $route() {
      var body = document.getElementsByTagName("BODY")[0];
      var html = document.getElementsByTagName("HTML")[0];
      if (this.$route.path === "/") {
        body.className = "";
        html.className = "";
      } else {
        body.className = "height";
        html.className = "height";
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@900&display=swap");

html,
body {
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;

  &.height {
    height: 100%;
  }
}

#app {
  font-family: "Open Sans", sans-serif;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>