<template>
  <div class="servicos-info">
    <div class="wrapper">
      <div class="row">
        <div class="heading">
          <div class="title">Os Nossos Serviços</div>
          <div class="copy">
            Criar, desenvolver e produzir Conteúdos Multimédia e Design à imagem e medida do seu negócio,
            <br />é a nossa missão.
          </div>
        </div>
      </div>
      <div class="items row">
        <div class="item">
          <div class="img" :style="{'background-image': 'url(' + img1 + ')'}">
            <div class="shine-wrapper">
              <div class="shine"></div>
            </div>
          </div>
          <div class="txt">
            <h4 class="title">Design Gráfico</h4>
            <div class="subtitle">
              Logótipos | Identidade corporativa
              <br />Cartão de Visita | Posters | Flyers | Convites
              <br />Etiquetas | Rótulos | CD e DVD
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img" :style="{'background-image': 'url(' + img2 + ')'}">
            <div class="shine-wrapper">
              <div class="shine"></div>
            </div>
          </div>
          <div class="txt">
            <h4 class="title">Fotografia e Vídeo</h4>
            <div class="subtitle">
              Captação e Edição de Vídeo
              <br />Vídeo Promocional | Institucional
              <br />Fotografia de Produto | Industrial | Eventos
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img" :style="{'background-image': 'url(' + img3 + ')'}">
            <div class="shine-wrapper">
              <div class="shine"></div>
            </div>
          </div>
          <div class="txt">
            <h4 class="title">Gestão de Conteúdos</h4>
            <div class="subtitle">
              Criação e Gestão de Redes Sociais
              <br />Assinatura Digital
              <br />Criação de Conteúdos Multimédia
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import img1 from '../../assets/bernooli-3.png'
import img2 from '../../assets/phone.jpg'
import img3 from '../../assets/surfspot-2.png'

export default {
  data(){
    return {
      img1,
      img2,
      img3
    }
  }
};
</script>

<style lang="scss" scoped>
.servicos-info {
  height: 615px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 40px 0;
  }

  &::before {
    @media screen and (max-width: 767px) {
      display: none;
    }

    content: "";
    background-color: #f7f7f7;
    height: 255px;
    width: 100%;
    position: absolute;
    margin-top: 510px;
  }

  .wrapper {
    position: absolute;

    @media screen and (max-width: 767px) {
      position: relative;
    }

    .row {
      width: 100%;

      .heading {
        .title {
          color: #333;
          font-weight: 700;
          font-family: Work Sans;
          font-size: 40px;
          text-align: center;
          line-height: 48px;
          margin-bottom: 25px;
        }

        .copy {
          text-align: center;
          margin-top: 25px;
          margin-bottom: 50px;
          color: #666;
        }
      }

      &.items {
        display: flex;
        justify-content: space-between;
        max-width: 1240px;
        width: 100%;
        margin-top: 30px;

        @media screen and (max-width: 767px) {
          flex-direction: column;
        }

        .item {
          width: 380px;
          height: 560px;
          cursor: pointer;

          @media screen and (max-width: 767px) {
            width: 100%;
          }

          &:hover {
            .txt {
              background-color: #ed4001;
              color: #fff;
            }

            .img {
              .shine {
                transform: rotate(110deg) translateY(-600px) !important;
                transition: 0.5s !important;
              }
            }
          }

          .img {
            width: 380px;
            height: 380px;
            background-color: #cbcbcb;
            background-size: cover;

            @media screen and (max-width: 767px) {
              width: 100%;
            }

            .shine-wrapper {
              width: 380px;
              height: 380px;
              position: absolute;
              overflow: hidden;

              .shine {
                width: calc(380px * 2);
                height: calc(380px * 2);
                background: white;
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.5) 0%,
                  rgba(255, 255, 255, 0) 20%
                );
                position: absolute;
                transform: rotate(110deg);
                top: -300px;
                left: -815px;
              }
            }
          }

          .txt {
            width: 300px;
            height: 100px;
            padding: 40px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: 0.25s;
            color: #666;

            @media screen and (max-width: 767px) {
              width: 100%;
              padding: 40px 0;
              align-items: center;
              text-align: center;
            }

            .title {
              font-size: 18px;
            }

            .subtitle {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
