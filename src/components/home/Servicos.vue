<template>
  <div class="servicos">
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon :icon="tint" />
        <h4 class="title">Design Gráfico</h4>
        <div class="text">
          Soluções de comunicação visual
          focadas nas necessidades da Marca
          que estimulam a vertente emocional
          e promovem a fidelização.
        </div>
      </div>
    </div>
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon :icon="video" />
        <h4 class="title">Vídeo e Fotografia</h4>
        <div class="text">
          As imagens e vídeos
          são a ferramenta fundamental
          para comunicar corretamente
          com o seu público.
        </div>
      </div>
    </div>
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon :icon="cog" />
        <h4 class="title">Gestão de Conteúdos</h4>
        <div class="text">
          Mantemos as suas redes sociais atualizadas,
          partilhando conteúdos com regularidade.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import { faLibrary } from "@fortawesome/vue-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      tint: faTint,
      video: faVideo,
      cog: faCog
    };
  },
  components: {
    // faLibrary
  }
};
</script>

<style lang="scss" scoped>
.servicos {
  height: 460px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item {
    width: calc(100% - 33%);
    height: 100%;

    &:nth-child(1) {
      background-color: #fff;
    }

    &:nth-child(2) {
      background-color: #f3f3f3;
    }

    &:nth-child(3) {
      background-color: #e9e9e9;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      margin: auto;
      align-items: center;
      text-align: center;
      justify-content: center;
      height: 100%;

      svg {
        width: 30px;
        height: 30px;
        margin-bottom: 15px;
      }

      .title {
        margin-bottom: 15px;
        font-size: 20px;
      }

      .text {
        color: #666;
        width: 360px;
      }
    }
  }
}
</style>
