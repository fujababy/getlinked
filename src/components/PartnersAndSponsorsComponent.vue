<template>
  <section>
    <div class="partners__block">
      <div class="partners__header">
        <h1 class="heading">Partners and Sponsors</h1>
        <p class="text">
          Getlinked Hackathon 1.0 is honored to have the following major companies as its partners
          and sponsors
        </p>

        <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
        <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-six" />
      </div>

      <div class="partners__body">
        <div class="upper__logo">
          <img src="../assets/svg/Liberty company logo white colour.svg" alt="" />
          <img class="line" src="../assets/svg/Line 17.svg" alt="" />
          <img src="../assets/svg/Liberty company logo white.svg" alt="" />
          <img class="line" src="../assets/svg/Line 17.svg" alt="" />
          <img src="../assets/svg/Winwise logo White colour 1.svg" alt="" />
          <img src="../assets/svg/wisper logo white.svg" alt="" />
          <img class="line" src="../assets/svg/Line 17.svg" alt="" />
          <img src="../assets/svg/Paybox.svg" alt="" />
          <img class="line" src="../assets/svg/Line 17.svg" alt="" />
          <img src="../assets/svg/Vuzual Plus.svg" alt="" />

          <img class="horizontal__line horizontal__line-1" src="../assets/svg/Line 18.svg" alt="" />
          <img class="horizontal__line horizontal__line-2" src="../assets/svg/Line 18.svg" alt="" />
          <img class="horizontal__line horizontal__line-3" src="../assets/svg/Line 18.svg" alt="" />
        </div>

        <!-- <div class="lower__logo"> -->

        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  // display: flex;
  // justify-content: center;
  // align-items: center;

  .partners__block {
    position: relative;
    padding-top: 114px;
    padding-bottom: 128px;
    text-align: center;
    // border: 1px solid rgba(255, 255, 255, 0.18);

    @media screen and (max-width: 820px) {
      margin: auto;
      padding-top: 0;
    }
    .partners__header {
      @media screen and (max-width: 820px) {
        // margin-bottom: 65px;
        padding: 41px 52px;
      }
      .heading {
        font-family: Clash Display;
        font-size: 32px;
        font-weight: 700;
        line-height: 27.5px;
        margin-bottom: 22px;

        @media screen and (max-width: 820px) {
          font-size: 20px;
          font-weight: 700;
          line-height: 27.5px;
        }
      }
      .text {
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 27.5px;
        max-width: 452px;
        margin: auto;
        margin-bottom: 65px;

        @media screen and (max-width: 820px) {
          color: #fff;
          font-size: 12px;
          line-height: 20.5px;
          margin-bottom: 0;
        }
      }
    }

    .partners__body {
      border-radius: 5px;
      border: 1px solid #d434fe;
      background: rgba(255, 255, 255, 0.01);
      max-width: 1255px;
      height: 560px;
      flex-shrink: 0;
      padding: 144px 179px;
      margin: auto;

      @media screen and (max-width: 820px) {
        height: auto;
        padding: 38.21px 47.5px;
        margin: 0 33px;
      }
      .upper__logo {
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(5, 1fr);
        gap: 47px;
        position: relative;

        @media screen and (max-width: 768px) {
          gap: 15.8px;
        }

        .line {
          max-width: 4px;
          height: 112.476px;

          @media screen and (max-width: 768px) {
            width: 2px;
            height: 29.844px;
          }
        }

        .horizontal__line {
          max-width: 257.298px;
          height: 4px;

          @media screen and (max-width: 768px) {
            width: 48.271px;
            height: 2px;
          }
        }

        .horizontal__line-1 {
          position: absolute;
          left: -50px;

          @media screen and (max-width: 768px) {
            left: 0;
          }
        }
        .horizontal__line-2 {
          position: absolute;
        }
        .horizontal__line-3 {
          position: absolute;
          right: -50px;

          @media screen and (max-width: 768px) {
            right: 0;
          }
        }
      }
    }
  }
}
</style>
