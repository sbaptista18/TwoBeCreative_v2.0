<template>
  <div class="portfolio">
    <div class="heading">
      <h2>
        A forma segue a função,
        <br />o design a relação.
      </h2>
    </div>

    <div class="port-items">
      <div class="row">
        <div class="item">
          <div class="copy">
            <div class="title">Work 1</div>
            <div class="subtitle">Subtitle 1</div>
          </div>
        </div>
        <div class="item">
          <div class="copy">
            <div class="title">Work 2</div>
            <div class="subtitle">Subtitle 2</div>
          </div>
        </div>
        <div class="item">
          <div class="copy">
            <div class="title">Work 3</div>
            <div class="subtitle">Subtitle 3</div>
          </div>
        </div>
        <div class="item">
          <div class="copy">
            <div class="title">Work 4</div>
            <div class="subtitle">Subtitle 4</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-wrapper">
      <div class="cta">
        <router-link to="/portfolio">
          <div class="txt">Ver portefólio</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped>
.portfolio {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  .heading {
    height: 120px;

    h2 {
      color: #333;
      font-weight: 700;
      font-family: Work Sans;
      font-size: 40px;
      text-align: center;
      line-height: 48px;
    }
  }

  .port-items {
    width: 100%;
    height: 500px;

    @media screen and (max-width: 767px) {
      height: auto;
    }

    .row {
      display: flex;
      flex-direction: row;
      height: 100%;

      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
      }

      .item {
        height: 100%;
        width: 25%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;

        @media screen and (max-width: 767px) {
          width: 50%;
          height: 300px;
        }

        &:nth-child(1) {
          background-color: #cbcbcb;
        }
        &:nth-child(2) {
          background-color: #e9e9e9;
        }
        &:nth-child(3) {
          background-color: #f3f3f3;
        }
        &:nth-child(4) {
          background-color: #fff;
        }

        &:hover {
          background-color: rgba(237, 63, 0, 0.7);

          .copy {
            display: flex;
          }
        }

        .copy {
          display: none;
          transition: 0.5s;
          color: #fff;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .title {
            font-size: 20px;
          }
        }
      }
    }
  }

  .cta-wrapper {
    margin-top: 40px;
    cursor: pointer;

    &:hover {
      .cta {
        background-color: #fff;

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
      border: 2px solid #ed3f00;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;

      a {
        text-decoration: none;
      }

      .txt {
        color: #fff;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        transition: 0.5s;
      }
    }
  }
}
</style>
