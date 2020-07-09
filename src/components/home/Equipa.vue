<template>
  <div class="equipa">
    <div class="row">
      <div class="left img">
        <div class="rellax" data-rellax-speed="-4"  :style="{'background-image': 'url(' + p1 + ')'}"></div>
      </div>
      <div class="right">
        <div class="wrapper">
          <div class="title">Equipa Criativa</div>
          <div class="copy">
            Trabalhar a sua imagem consoante os seus objectivos é o nosso propósito primordial.
            <br />Criar, desenvolver e produzir Conteúdos Multimédia e Design à imagem e medida do seu negócio, é a nossa missão.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="left">
        <div class="wrapper">
          <div class="title">Clientes Satisfeitos</div>
          <div class="copy">
            Analisamos, Planeamos e Executamos o seu projecto de forma profissional e metódica de modo a garantir a qualidade dos serviços, respeitar prazos e a acima de tudo, garantir a sua satisfação.
            <br />Aceitamos projectos pessoais para si ou profissionais para a sua empresa.
          </div>
          <div class="topics">
            <div class="left">
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Profissionalismo</div>
              </div>
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Motivação</div>
              </div>
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Criatividade</div>
              </div>
            </div>
            <div class="right">
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Compromisso</div>
              </div>
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Orçamento</div>
              </div>
              <div class="item">
                <font-awesome-icon :icon="check" />
                <div class="txt">Prazos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right img">
        <div class="rellax" data-rellax-speed="-4" :style="{'background-image': 'url(' + p2 + ')'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import { faLibrary } from "@fortawesome/vue-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import parallax1 from '../../assets/parallax-1.jpg'
import parallax2 from '../../assets/parallax-2.jpg'

export default {
  data() {
    return {
      check: faCheckCircle,
      p1: parallax1,
      p2: parallax2
    };
  },
  components: {
    // faLibrary
  },
  methods: {
    parallax: function() {
      var rellax = new Rellax(".rellax");
    }
  },
  mounted() {
    this.parallax();
  }
};
</script>

<style lang="scss" scoped>
.equipa {
  height: 1020px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    height: auto;
  }

  .row {
    height: 50%;
    display: flex;
    flex-direction: row;

  &:nth-child(2) {
    @media screen and (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }

    .left {
      &.img {

        @media screen and (max-width: 767px) {
          height: 410px;
        }

        > div {
          width: 200%;
          height: 200%;
          background-position: top center;
        }
      }
    }

    .right {
      &.img {

        @media screen and (max-width: 767px) {
          height: 410px;
        }

        > div {
          width: 200%;
          height: 200%;
          background-position: top center;
        }
      }
    }

    > div {
      width: 50%;
      display: flex;
      align-items: center;

      @media screen and (max-width: 767px) {
        width: 100%;
      }

      &.img {
        background-color: #cbcbcb;
        overflow: hidden;

        > div {
          background-size: 115%;
          background-repeat: no-repeat;
        }
      }

      .wrapper {
        padding: 0 220px;
        display: flex;
        flex-direction: column;
        height: auto;

        @media screen and (max-width: 767px) {
          padding: 30px 80px;
        }

        @media screen and (max-width: 599px) {
          padding: 20px 20px;
        }

        .title {
          color: #333;
          font-weight: 700;
          font-family: Work Sans;
          font-size: 40px;
          margin-bottom: 20px;
        }

        .copy {
          margin-bottom: 20px;
          line-height: 2em;
          color: #666;
        }

        .topics {
          display: flex;
          color: #666;

          > div {
            width: 50%;

            .item {
              display: flex;
              height: 50px;

              svg {
                width: 20px;
                height: 20px;
                margin-right: 25px;

                path {
                  fill: #ed3f00;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
