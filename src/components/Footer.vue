<template>
  <footer>
    <div class="top">
      <div class="container">
        <div class="line"></div>
        <div class="social-icons">
          <a href="http://www.facebook.com/twobecreative" target="_blank">
            <font-awesome-icon class="fb" :icon="fb" />
          </a>
          <a href="http://www.instagram.com/twobe_creative" target="_blank">
            <font-awesome-icon class="ig" :icon="ig" />
          </a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">Twobe Creative. Todos os direitos reservados.</div>
    </div>
  </footer>
</template>

<script>
/* eslint-disable */
// import { faLibrary } from "@fortawesome/vue-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      fb: faFacebookF,
      ig: faInstagram
    };
  },
  components: {
    // faLibrary
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;

  > div {
    .container {
      max-width: 1240px;
      width: 100%;
      height: 100%;
      margin: auto;
      display: flex;
    }
  }

  .top {
    height: 250px;
    background-color: #1d1d1d;

    @media screen and (max-width: 767px) {
      height: 190px;
    }

    .container {
      flex-direction: column;
      justify-content: space-between;
      padding: 90px 0;
      height: 70px;

      @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 70px 0;
      }

      .line {
        height: 1px;
        width: 275px;
        background-color: rgba(138, 138, 138, 0.2);
      }

      .social-icons {
        display: flex;
        justify-content: space-between;
        width: 90px;

        svg {
          path {
            fill: #aaa;
          }
        }
      }
    }
  }

  .bottom {
    height: 80px;
    background-color: #000;
    color: #aaa;

    .container {
      font-size: 12px;
      font-weight: 400;
      line-height: 25px;
      // align-items: center;
      justify-content: center;

      @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
