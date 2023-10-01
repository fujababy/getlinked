<template>
  <section class="block">
    <div class="congratulations__container">
      <img src="../assets/svg/congratulation.svg" alt="" />

      <div class="congratulations__text">
        <span>Congratulations you have successfully Registered!</span>
        <span>Yes, it was easy and you did it! </span>
        <span>check your mail box for next step </span>
        <img src="../assets/icons/1531010992wink-emoji-woman-png 1.svg" alt="" />
      </div>

      <button class="btn btn-back">Back</button>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .congratulations__container {
    border-radius: 5px;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    width: 699px;
    height: 664px;
    flex-shrink: 0;
    padding-left: 54px;
    padding-right: 71px;

    @media screen and (max-width: 768px) {
      width: 317px;
      padding-left: 35px;
      padding-right: 30px;
    }

    img {
      @media screen and (max-width: 768px) {
        width: 258.894px;
      }
    }

    .congratulations__text {
      text-align: center;
      position: relative;

      :nth-child(1) {
        font-size: 32px;
        font-weight: 600;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          margin-top: 26px;
        }
      }

      :nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
        margin-top: 5px;

        @media screen and (max-width: 768px) {
          padding-top: 29px;
          font-size: 12px;
        }
      }

      :nth-child(3) {
        font-size: 14px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      span {
        display: block;
      }

      img {
        position: absolute;
        top: 104px;
        right: 147px;
        @media screen and (max-width: 768px) {
          position: absolute;
          width: 14px;
          right: 10px;
          top: 120px;
        }
      }
    }

    .btn,
    .btn-back {
      width: 100%;
      margin-top: 35px;

      @media screen and (max-width: 768px) {
        margin-top: 23px;
      }
    }
  }
}
</style>
