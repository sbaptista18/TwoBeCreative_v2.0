<template>
  <div class="contactos">
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon class="tag" :icon="tag" />
        <h4 class="title">Gostou do que viu? Envie-nos uma mensagem!</h4>
        <div class="text">Viseu, Portugal</div>
        <div class="cta-wrapper">
          <div class="cta">
            <router-link to="/contactos">
              <div class="txt">Clique aqui!</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon :icon="envelope" />
        <h4 class="title">E-mail</h4>
        <div class="text">
          <a href="mailto:geral@twobecreative.pt">geral@twobecreative.pt</a>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="wrapper">
        <font-awesome-icon :icon="comment" />
        <h4 class="title">Contacte-nos</h4>
        <div class="text">+351 968 205 115</div>
      </div>
    </div>
  </div>
</template>

<script>
import { faLibrary } from "@fortawesome/vue-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      tag: faTag,
      envelope: faEnvelope,
      comment: faComment
    };
  },
  components: {
    faLibrary
  }
};
</script>

<style lang="scss" scoped>
.contactos {
  height: 340px;
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

        &.tag {
          transform: rotate(-45deg);
        }
      }

      .title {
        margin-bottom: 15px;
        font-size: 20px;
      }

      .text {
        color: #666;

        a {
          color: #666;
          text-decoration: none;
        }
      }

      .cta-wrapper {
        margin-top: 40px;
        cursor: pointer;

        &:hover {
          .cta {
            background-color: #fff;
            border: 2px solid #ed3f00;

            .txt {
              color: rgb(232, 74, 29);
            }
          }
        }

        .cta {
          width: 200px;
          height: 50px;
          background-color: #ed3f00;
          border-radius: 30px;
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s;
          box-shadow: 0px 7px 12px rgba(0, 0, 0, 0.3);

          a {
            text-decoration: none;
          }

          .txt {
            color: #fff;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 1px;
            transition: 0.5s;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>