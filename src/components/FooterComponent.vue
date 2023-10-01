<template>
  <div class="block">
    <footer>
      <section class="flex__one">
        <h1>get<span class="color-purple">linked</span></h1>
        <p class="flex__one-text">
          Getlinked Tech Hackathon is a technology innovation program established by a group of
          organizations with the aim of showcasing young and talented individuals in the field of
          technology
        </p>
        <div class="terms__and__privacy animate-bounce">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </section>

      <section class="flex__two">
        <h2 class="flex__two--heading">Useful Links</h2>
        <ul>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <router-link :to="{ name: 'Register' }">
            <li>Register</li>
          </router-link>
        </ul>
        <div class="socials__container">
          <div class="socials__text">
            <span class="color-purple">Follow us</span>
          </div>
          <div class="icon-container">
            <span class="icon">
              <img src="../assets/icons/instagram-icon.svg" alt="" />
            </span>
            <span class="icon">
              <img src="../assets/icons/twitter-icon.svg" alt="" />
            </span>
            <span class="icon">
              <img src="../assets/icons/facebook-icon.svg" alt="" />
            </span>
            <span class="icon">
              <img src="../assets/icons/linkdn.svg" alt="" />
            </span>
          </div>
        </div>
      </section>

      <section class="flex__three">
        <h2 class="flex__three-heading color-purple">Contact Us</h2>
        <div class="icon__and__text">
          <div class="icon__container">
            <img class="icon" src="../assets/icons/telephone-icon.svg" alt="" />
            <span>+2346707653444</span>
          </div>
          <div class="icon__container">
            <img class="icon" src="../assets/icons/location-icon.svg" alt="" />
            <span class="location">27,Alara Street Yaba 100012 Lagos State</span>
          </div>
        </div>
      </section>

      <img class="absolute__items-1" src="../assets/icons/star.svg" alt="" />
      <img class="absolute__items-2" src="../assets/icons/star1.svg" alt="" />
      <img class="absolute__items-3" src="../assets/icons/star2.svg" alt="" />
      <img class="absolute__items-4" src="../assets/icons/satagra.svg" alt="" />
    </footer>
    <h4 class="all__rights">All rights reserved. &copy getlinked Ltd.</h4>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.block {
  background: #100b20;
  footer {
    // margin-top: 83px;
    display: flex;
    padding: 83px 208px 0 208px;
    justify-content: space-around;
    position: relative;
    gap: 15px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 51px;
      padding-left: 50px;
      padding-right: 45px;
      height: auto;
    }

    @media screen and (max-width: 820px) {
      // flex-direction: row;
      padding-top: 51px;
      padding-left: 50px;
      padding-right: 45px;
    }

    .flex__one {
      h1 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 6px;

        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
      }
      .flex__one-text {
        font-size: 12px;
        margin-bottom: 70px;
        font-weight: 400;
        line-height: 172.4%;
        max-width: 412px;

        @media screen and (max-width: 768px) {
          font-size: 12px;
          margin-bottom: 39px;
        }
      }
    }

    .terms__and__privacy {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 172.4%; /* 20.688px */

      :nth-child(1) {
        border-right: 2px solid var(--vt-c-purple);
        padding-right: 1rem;
        height: 17px;
      }

      :nth-child(2) {
        margin-left: 1rem;
      }
    }
    .color-purple {
      color: var(--vt-c-purple);
    }

    section {
    }
    .flex__two {
      line-height: 20.69px;
      margin-top: 13px;
      .flex__two--heading {
        color: #d434fe;
        font-size: 14px;
        font-weight: 600;
        // line-height: 172.4%;
        line-height: 24.14px;
        margin-bottom: 6px;
      }
      ul,
      li {
        list-style: none;
        padding-left: 0;
        margin-bottom: 11px;
      }

      :nth-child(4) {
        // margin-bottom: 18px;
      }
    }

    .socials__container {
      display: flex;
      align-items: center;
      margin-top: 26px;

      .socials__text {
        margin-right: 2rem;
        font-weight: 600;
      }

      .icon-container {
        display: flex;
        // align-items: center;

        .icon {
          margin-right: 1.5rem;
        }
      }
    }

    .flex__three {
      line-height: 18.95px;
      margin-top: 13px;

      @media screen and (max-width: 768px) {
        // margin-top: 60px;
      }
      .flex__three-heading {
        font-size: 14px;
        font-weight: 600;
        line-height: 172.4%;
        margin-bottom: 19px;
      }
      .icon__and__text {
        .icon__container {
          margin-bottom: 22px;
          display: flex;
          align-items: flex-start;

          img {
            width: 12px;
            margin-right: 1rem;
            margin-top: 0.3rem;
          }
          span {
            font-size: 12px;
          }
          .location {
            width: 89px;
          }
        }
      }
    }
  }
  .all__rights {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 59px;
    padding-bottom: 54px;
  }
}
</style>
