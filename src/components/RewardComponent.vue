<template>
  <section>
    <header>
      <p>Prizes and <span class="color-purple">Reward</span></p>
      <p>Highlight of the prizes or rewards for winners and for participants.</p>
    </header>

    <div class="block">
      <picture class="animate-ping">
        <img src="../assets/svg/9486889 1.svg" alt="" />
      </picture>

      <picture>
        <img src="../assets/svg/Rewards.svg" alt="" />
      </picture>
    </div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-four" />
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  header {
    margin-top: 72px;

    :nth-child(1) {
      font-family: Clash Display;
      font-size: 32px;
      font-weight: 700;

      @media screen and (max-width: 768px) {
        text-align: center;
        font-family: Clash Display;
        font-size: 20px;
        font-weight: 700;
      }
    }

    :nth-child(2) {
      font-size: 16px;
      font-weight: 400;
      line-height: 170.9%;
      @media screen and (max-width: 768px) {
        margin: auto;
        font-size: 12px;
        font-weight: 400;
        line-height: 170.9%;
        width: 277px;
      }
    }
  }
  p {
    text-align: center;
  }

  .block {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 74px 0 100px 0;
    z-index: 1;
    overflow: hidden;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      padding-left: 54px;
      padding-right: 54px;
      height: auto;
    }

    .animate-ping {
      animation-duration: 2s;
      animation-timing-function: ease-out;
      z-index: -1;

      @media screen and (max-width: 768px) {
        margin-bottom: 100px;
      }

      img {
        @media screen and (max-width: 768px) {
          width: 321px;
          height: 282px;
        }
      }
    }

    picture {
      img {
        width: 692px;
        @media screen and (max-width: 768px) {
        }
      }
    }
  }
}
</style>
