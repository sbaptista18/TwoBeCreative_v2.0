<template>
  <div class="portfolio-wrapper">
    <div class="filters">
      <div class="btns">
        <div class="btn">Todos</div>
        <div class="btn">Design</div>
        <div class="btn">Vídeo</div>
        <div class="btn">Fotografia</div>
        <div class="btn">Gestão de Conteúdos</div>
      </div>
    </div>
    <div class="content">
      <div class="items">
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 1</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 2</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 3</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 4</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 5</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 6</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
        <div class="item">
          <div class="img"></div>
          <div class="copy">
            <div class="title">Work 7</div>
            <div class="tags">tag 1, tag 2, tag 3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.portfolio-wrapper {
  display: flex;
  flex-direction: column;
  padding: 50px 80px;

  .filters {
    width: auto;

    .btns {
      display: flex;
      width: auto;
      margin-left: 10px;

      .btn {
        border: 2px solid #992303;
        border-right: none;
        width: auto;
        padding: 10px;
        text-transform: uppercase;
        font-weight: bold;
        color: #992303;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background-color: #992303;
          color: #fff;
        }

        &:first-child {
          border-radius: 5px 0 0 5px;
        }

        &:last-child {
          border-right: 2px solid #992303;
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }

  .content {
    margin-top: 30px;

    .items {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 425px;
        height: auto;
        margin: 10px;
        border: 2px solid #992303;

        .img {
          width: 100%;
          height: 350px;
          background-color: #f3f3f3;
        }

        .copy {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .title {
              font-size: 20px;
              color: #992303;
              font-weight: bold;
          }
        }
      }
    }
  }
}
</style>