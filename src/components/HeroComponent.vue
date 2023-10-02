<template>
  <section>
    <div class="igniting">
      <p class="hero__media__text">Igniting a Revolution in HR Innovation</p>
      <div class="media__line">
        <img src="../assets/svg/hero__line.svg" alt="" />
      </div>
    </div>
    <header class="hero">
      <div class="hero__container">
        <div class="hero__text">
          <div class="hero__heading">
            getlinked Tech Hackaton <span class="color-purple">1.0</span>
          </div>
          <div class="hero__sub--text">
            <span class="sub--text"
              >Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</span
            >
          </div>
          <router-link :to="{ name: 'Register' }">
            <button class="btn hero__btn">Register</button>
          </router-link>

          <div class="time">
            <div class="hour">
              <p class="">00<span class="sub--hour">H</span></p>
            </div>
            <div>
              <p class="hour">00<span class="sub--hour">M</span></p>
            </div>
            <div>
              <p class="hour">00<span class="sub--hour">S</span></p>
            </div>
          </div>

          <!-- <div class="hero__icons"> -->
          <img class="bulb-icon" src="../assets/svg/Creative1.svg" alt="" />
          <img class="chain-icon" src="../assets/svg/chain-9365116-7621444.svg" alt="" />
          <img class="smash-icon" src="../assets/svg/1f4a5.svg" alt="" />
          <!-- </div> -->
        </div>

        <div class="hero__media">
          <picture>
            <img class="hero__image animate-pulse" src="../assets/svg/Hackathonguy.svg" alt="" />
          </picture>
        </div>
      </div>
    </header>
  </section>
</template>

<!-- animate__animated animate__flash animate__infinite transition animate__slower 3s -->

<script></script>

<style lang="scss" scoped>
.igniting {
  padding-top: 170px;
  padding-right: 55px;
  text-align: right;

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-right: 0;
  }

  .hero__media__text {
    font-family: Montserrat;
    font-size: 36px;
    font-style: italic;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      text-align: center;
    }
  }

  .media__line {
    width: 100%;
    position: relative;
    img {
      position: absolute;
      right: 0;

      @media screen and (max-width: 768px) {
        width: 115px;
        height: 7px;
        right: 190px;
      }
      @media screen and (max-width: 576px) {
        right: 90px;
      }
    }
  }
}
.hero {
  // border: 1px solid rgba(255, 255, 255, 0.18);
  .hero__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
    .hero__text {
      position: relative;
      padding-left: 88px;
      width: 100%;

      @media screen and (max-width: 768px) {
        padding-left: 58px;
        padding-right: 58px;
      }

      .hero__heading {
        max-width: 722px;
        font-family: Clash Display;

        font-size: 80px;
        margin-bottom: 8px;
        font-weight: 700;

        @media screen and (max-width: 768px) {
          font-size: 32px;
          margin-top: 40px;
          width: 100%;
        }
      }
      .hero__sub--text {
        margin-bottom: 41px;
        .sub--text {
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 400;
          line-height: 166%;
          width: 522px;

          @media screen and (max-width: 768px) {
            color: #fff;
            text-align: center;
            font-size: 13px;
            font-weight: 400;
            line-height: 166%;
          }
        }
      }
      .hero__btn {
        text-align: center;
      }

      .hero__icons {
        // position: absolute;
        // top: 0;
        // right: 0;
      }
      .bulb-icon {
        position: absolute;
        top: -45px;
        right: 200px;

        @media screen and (max-width: 768px) {
          width: 18px;
          height: 26px;
          right: 85px;
          top: 25px;
        }
      }

      .chain-icon {
        position: absolute;
        right: 150px;
        top: 130px;

        @media screen and (max-width: 992px) {
          // width: 32.797px;
          // height: 32.797px;
          // right: 60px;
          // top: 95px;
          display: none;
        }
      }

      .smash-icon {
        position: absolute;
        top: 145px;
        right: 85px;

        @media screen and (max-width: 992px) {
          // width: 22.119px;
          // height: 22.119px;
          display: none;
        }
      }

      .time {
        display: flex;
        font-family: unica one;
        justify-content: flex-start;
        gap: 30px;
        padding-top: 77px;

        @media screen and (max-width: 768px) {
          padding-top: 14px;
          display: flex;
          justify-content: center;
        }
        .hour {
          font-size: 64px;
        }

        .sub--hour {
          font-size: 14px;
        }
        @media screen and (max-width: 768px) {
          padding-top: 14px;
        }
      }
    }

    .hero__media {
      width: 100%;
      .hero__image {
        //   max-width: 667px;
        height: 715px;

        @media screen and (max-width: 768px) {
          width: 100%;
          height: 362.395px;
        }
      }
    }
  }
}
</style>
