<template>
  <div id="faq" class="media faq-height">
    <div class="media__image faq-order">
      <img class="faq-image animate-pulse" src="../assets/svg/faq-2x-d4445af6.webp" alt="" />
    </div>

    <div class="media__body">
      <h2 class="media__header">Frequently Ask <span class="color-purple">Question</span></h2>
      <p class="media__text faq__margin__bottom faq__text">
        We got answers to the questions that you might want to ask about
        <span class="text__bold">getlinked Hackathon 1.0</span>
      </p>

      <div class="faq__flex" data-aos="fade-right" data-aos-duration="900">
        <p>Can I work on a project I started before the hackathon?</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>
      <div class="faq__flex" data-aos="fade-left" data-aos-duration="900">
        <p>What happens if I need help during the hackathon?</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>
      <div class="faq__flex" data-aos="fade-right" data-aos-duration="900">
        <p>What happens if I don't have an idea for a project?</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>
      <div class="faq__flex" data-aos="fade-left" data-aos-duration="900">
        <p>Can I join a team or do I have to come with one?</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>
      <div class="faq__flex" data-aos="fade-right" data-aos-duration="900">
        <p>What happens after the hackathon ends</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>
      <div class="faq__flex" data-aos="fade-left" data-aos-duration="700">
        <p>Can I work on a project I started before the hackathon?</p>
        <img src="../assets/svg/+.svg" alt="" />
      </div>

      <img class="absolute__items-1" src="../assets/icons/star.svg" alt="" />
      <img class="absolute__items-2" src="../assets/icons/star1.svg" alt="" />
      <img class="absolute__items-3" src="../assets/icons/star2.svg" alt="" />
      <img class="absolute__items-4" src="../assets/icons/satagra.svg" alt="" />
    </div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-three" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.media {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 219px;
  padding-right: 101px;
  // gap: 10rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: none;
  border-right: none;
  border-left: 0;
  height: 617px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: auto;
    // text-align: center;
    gap: 58px;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 60px;
    padding-bottom: 49px;
  }

  // @media screen and (max-width: 820px) {
  //   flex-direction: column;
  //   height: auto;
  //   text-align: center;
  //   gap: 58px;

  //   padding-top: 60px;
  //   padding-bottom: 49px;
  // }

  .media__image {
    width: 100%;
    .faq-image {
      // max-width: 741px;
      // @media screen and (max-width: 768px) {
      //   width: 327px;
      //   height: 327px;
      // }
      // @media screen and (max-width: 820px) {
      //   width: 327px;
      //   height: 327px;
      // }
    }
  }

  .faq-order {
    order: 2;
  }
  .media__body {
    width: 100%;

    .media__header {
      font-family: Clash Display;
      font-size: 32px;
      font-weight: 700;
      max-width: 398px;
      line-height: 42.56px;
      margin-bottom: 16px;

      @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 188px;
        margin: auto;
        line-height: 133%;
      }

      @media screen and (max-width: 820px) {
        text-align: center;
        font-size: 20px;
        width: 188px;
        margin: auto;
        line-height: 133%;
      }

      .color-purple {
        color: #d434fe;
      }
    }

    .media__text {
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
      max-width: 535px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }

      // .color-pink {
      //   color: #ff26b9;
      //   font-weight: 700;
      // }

      .text__bold {
        font-weight: 700;
      }
    }

    .faq__text {
      max-width: 342px;
      text-align: left;

      @media screen and (max-width: 820px) {
        margin: auto;
        margin-top: 21px;
      }
    }

    .faq__margin__bottom {
      margin-bottom: 68px;
      @media screen and (max-width: 768px) {
        margin-bottom: 45.69px;
      }
    }
    .faq__flex {
      font-size: 14px;
      max-width: 427px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d434fe;
      margin-bottom: 25px;

      @media screen and (max-width: 820px) {
        text-align: left;
        max-width: 100%;
      }
      p {
        margin-bottom: 13px;
        font-size: 14px;
        font-weight: 400;
        line-height: 27.5px;

        @media screen and (max-width: 768px) {
          // text-align: left;
          font-size: 12px;
          line-height: 18px;
        }
      }
      img {
        margin-bottom: 13px;
      }
    }
  }
}

// .media-height {
//   height: 963px;

//   @media screen and (max-width: 768px) {
//     height: auto;
//   }
// }
.faq-height {
  min-height: 926px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
}
</style>
