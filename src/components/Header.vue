<template>
  <div class="header-wrapper">
    <div class="menu-wrapper" :class="{top: isTop <= 210}">
      <div class="menu">
        <div class="brand">
          <router-link to="/">
            <div :class="{top: isTop <= 210}"></div>
          </router-link>
        </div>
        <div class="menu-items">
          <a
            v-if="!$route.meta.hideLink"
            class="menu-item"
            @click="scrollMeTo('equipa')"
          >A TwoBe Creative</a>
          <router-link v-if="!$route.meta.hidePortfolio" to="/portfolio" class="menu-item">
            <a>Portfolio</a>
          </router-link>
          <a
            v-if="!$route.meta.hideLink"
            class="menu-item"
            @click="scrollMeTo('servicos-info')"
          >Serviços</a>
          <router-link v-if="!$route.meta.hideContactos" to="/contactos" class="menu-item">
            <a>Contactos</a>
          </router-link>
          <router-link v-if="$route.meta.hideLink" to="/" class="menu-item home">
            <a>Home</a>
          </router-link>
        </div>
      </div>
    </div>

    <header v-show="!$route.meta.hideHeader">
      <div class="header">
        <div class="images-wrapper">
          <div class="left">
            <div class="cc rellax" data-rellax-speed="-4" style="bottom: -130px; left: 270px;">
              <img src="../assets/coffee-cup.png" alt />
            </div>
            <div class="ico-1 rellax" data-rellax-speed="-4" style="bottom: 140px; left: -120px;">
              <img src="../assets/icosaedro.png" alt />
            </div>
            <div
              class="key rellax"
              data-rellax-speed="-4"
              style="bottom: -170px; left: -100px; transform: rotate(-25deg);"
            >
              <img src="../assets/keyboard.png" alt />
            </div>
          </div>

          <div class="right">
            <div
              class="mouse rellax"
              data-rellax-speed="-4"
              style="bottom: 50px; right: 320px; transform: rotate(-25deg);"
            >
              <img src="../assets/mouse.png" alt />
            </div>
            <div
              class="ico-2 rellax"
              data-rellax-speed="-4"
              style="bottom: -40px; right: -130px; transform: scale(2) rotate(330deg);"
            >
              <img src="../assets/icosaedro.png" alt />
            </div>
          </div>
        </div>
        <div class="copy">
          <div class="title">TwoBe Creative</div>
          <div class="subtitle">Design Gráfico | Vídeo e Fotografia | Gestão de Conteúdos Digitais</div>
          <div class="cta-wrapper" @click="scrollMeTo('servicos')">
            <div class="cta">
              <div class="txt">Saiba Mais</div>
            </div>
          </div>
        </div>
      </div>
      <div id="scroll-down" @click="scrollMeTo('servicos')">
        <img src="../assets/arrow-down.png" alt />
      </div>
    </header>
  </div>
</template>

<script>
/* eslint-disable */
import logoBlack from "../assets/twobe-creative-logo-black.png";
import logoWhite from "../assets/twobe-creative-logo-white.png";

export default {
  data() {
    return {
      isTop: true,
      logoBlack: logoBlack,
      logoWhite: logoWhite
    };
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$parent.$el.children["content-wrapper"];

      var notes = null;
      for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].className == refName) {
          notes = element.childNodes[i];
          break;
        }
      }

      var el = document.querySelector("." + notes.className);
      var top = el.offsetTop - 100;

      el.scrollIntoView({
        behavior: "smooth"
      });

      window.scrollTo(0, top);
    },
    menuColor(event) {
      this.isTop = window.scrollY;
    },
    parallax: function() {
      var rellax = new Rellax(".rellax");
    }
  },
  created() {
    window.addEventListener("scroll", this.menuColor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.menuColor);
  },
  mounted() {
    this.parallax();
  }
};
</script>

<style lang="scss" scoped>
@keyframes to-white {
  from {
    background-color: #992303;
  }
  to {
    background-color: #fff;
  }
}

@keyframes to-orange {
  from {
    background-color: #fff;
  }
  to {
    background-color: #992303;
  }
}

.key {
  animation: parallaxY 2000ms ease-out forwards;
}

.header-wrapper {
  min-height: 100px;
  .menu-wrapper {
    height: 100px;
    background-color: #fff;
    padding: 0 80px;
    position: fixed;
    width: 100%;
    max-width: 95%;
    z-index: 1;
    animation: to-white 200ms ease-out forwards;

    &.top {
      background-color: #992303;
      animation: to-orange 200ms ease-out forwards;
      .menu {
        .brand {
          background-image: url("../assets/twobe-creative-logo-white.png");
        }
        .menu-items {
          .menu-item {
            color: #fff;

            &.home {
              a {
                padding: 15px;
                border: 2px solid #fff;
                border-radius: 30px;

                &:hover {
                  border: 2px solid #fff;
                  color: #992303;
                  border-radius: 30px;
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
    }

    .menu {
      height: 100%;
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .brand {
        background-repeat: no-repeat;
        background-image: url("../assets/twobe-creative-logo-black.png");
        width: 198px;
        height: 57px;

        a {
          height: 100%;
          width: 100%;

          div {
            height: 100%;
            width: 100%;
          }
        }
      }

      .menu-items {
        width: 700px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .menu-item {
          height: 100%;
          display: flex;
          align-items: center;
          margin: 0 30px;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 14px;
          color: #000;
          text-decoration: none;
          cursor: pointer;

          &.home {
            a {
              padding: 15px;
              border: 2px solid #992303;
              border-radius: 30px;
              transition: 0.5s;

              &:hover {
                border: 2px solid #992303;
                color: #fff;
                border-radius: 30px;
                background-color: #992303;
              }
            }
          }
        }
      }
    }
  }

  header {
    height: 830px;
    background-color: #992303;

    .header {
      height: 100%;

      .images-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .left {
          left: 0;
        }

        .right {
          right: 0;
        }

        > div {
          position: absolute;
          height: 830px;
          width: 600px;
          overflow: hidden;

          > div {
            position: absolute;
          }
        }
      }

      .copy {
        position: absolute;
        top: 320px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 220px;

        .title {
          font-family: "Work Sans", sans-serif;
          color: #fff;
          text-transform: uppercase;
          font-size: 80px;
        }

        .subtitle {
          font-size: 20px;
          color: #fff;
        }

        .cta-wrapper {
          cursor: pointer;

          &:hover {
            .cta {
              background-color: #992303;

              .txt {
                color: #fff;
              }
            }
          }

          .cta {
            width: 200px;
            height: 50px;
            background-color: #fff;
            border-radius: 30px;
            border: 2px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;

            .txt {
              color: rgb(232, 74, 29);
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 1px;
              transition: 0.5s;
            }
          }
        }
      }
    }

    #scroll-down {
      width: 70px;
      height: 70px;
      position: absolute;
      left: 50%;
      margin-left: -35px;
      margin-top: -35px;
      background-color: #ed3f00;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        transition: 0.5s;
      }

      &:hover {
        img {
          transform: translateY(10px);
        }
      }
    }
  }
}
</style>
