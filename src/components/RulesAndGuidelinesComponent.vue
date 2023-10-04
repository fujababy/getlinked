<template>
  <div class="media">
    <div class="media__body">
      <h2 class="media__header">
        Rules and
        <span class="color-purple">Guidelines</span>
      </h2>
      <p class="media__text">
        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
        shape the future. Whether you're a coding genius, a design maverick, or a concept wizard,
        you'll have the chance to transform your ideas into reality. Solving real-world problems,
        pushing the boundaries of technology, and creating solutions that can change the world,
        that's what we're all about!
      </p>
    </div>

    <div class="media__image">
      <img class="rules-image" src="../assets/svg/girll.webp" alt="" />
    </div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-two" />
  </div>
</template>

<script>
export default {
  name: 'RulesAndGuidelinesComponent', // replace with component-name
  data() {
    return {
      schema: {
        username: 'required'
      }
    }
  },
  methods: {
    register(values) {
      console.log(values)
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  // overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: none;
  border-right: 0;
  border-left: 0;
  height: 617px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    gap: 10px;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 50px;
  }

  .media__body {
    // order: 2;
    padding-bottom: 48px;
    @media screen and (max-width: 992px) {
      text-align: center;
      padding-bottom: 30px;
      order: 2;
    }
    .media__header {
      font-family: Clash Display;
      font-size: 32px;
      font-weight: 700;
      max-width: 398px;
      line-height: 42.56px;
      margin-bottom: 16px;

      @media screen and (max-width: 992px) {
        text-align: center;
        font-size: 20px;
        width: 188px;
        margin: auto;
        line-height: 133%;
      }
    }
    .media__text {
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
      max-width: 535px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
        padding-bottom: 46px;
      }
    }
  }

  .media__image {
    .rules__image {
    }
  }
}
</style>
