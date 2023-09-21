<template>
  <footer>
    <section class="flex__one">
      <h1>get<span class="color-purple">linked</span></h1>
      <p class="flex__one-text">
        Getlinked Tech Hackathon is a technology innovation program established by a group of
        organizations with the aim of showcasing young and talented individuals in the field of
        technology
      </p>
      <div class="terms__and__privacy">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
      </div>
    </section>

    <section class="flex__two">
      <h2><span class="color-purple">Useful Links</span></h2>
      <ul>
        <li>Overview</li>
        <li>Timeline</li>
        <li>FAQs</li>
        <li>Register</li>
        <li class="color-purple">
          Folow us
          <span class="icon__container">
            <i></i>
          </span>
        </li>
      </ul>
    </section>

    <section class="flex__three">
      <h2 class="color-purple">Contact Us</h2>
      <div class="icon__and__text">
        <div class="icon__container">
          <i></i>
          <span>+2346707653444</span>
        </div>
        <div class="icon__container">
          <i></i>
          <span>27,Alara Street Yaba 100012 Lagos State</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  // align-items: center;
  // flex-grow: 1;
  width: 100%;

  .flex__one {
    h1 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .flex__one-text {
      font-size: 12px;
      margin-bottom: 82px;
      font-weight: 400;
      line-height: 172.4%;
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
}
</style>
