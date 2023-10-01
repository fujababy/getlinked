<template>
  <section>
    <nav class="desktop-view">
      <a href="/">
        <h1>get<span class="color-purple">linked</span></h1>
      </a>
      <div>
        <ul>
          <router-link :to="{ name: '' }">
            <li class="nav-item me-5"><span class="nav-link">Timeline</span></li>
          </router-link>
          <router-link :to="{ name: '' }">
            <li class="nav-item me-5"><span class="nav-link">Overview</span></li>
          </router-link>
          <router-link :to="{ name: '' }">
            <li class="nav-item me-5"><span class="nav-link">FAQs</span></li>
          </router-link>
          <router-link :to="{ name: 'Contact' }">
            <li class="nav-item me-5"><span class="nav-link">Contact</span></li>
          </router-link>
        </ul>
      </div>

      <router-link :to="{ name: 'Register' }">
        <button class="btn">Register</button>
      </router-link>
    </nav>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />

    <!-- mobile nav -->
    <nav class="mobile-menu">
      <a href="/ " v-if="anchor">
        <h1>get<span class="color-purple">linked</span></h1>
      </a>
      <!--  -->
      <div class="nav-modal" v-if="showMenu">
        <ul>
          <router-link :to="{ name: 'Home' }">
            <li class="nav-item me-5"><span class="nav-link">Timeline</span></li>
          </router-link>
          <router-link :to="{ name: '' }">
            <li class="nav-item me-5"><span class="nav-link">Overview</span></li>
          </router-link>
          <router-link :to="{ name: '' }">
            <li class="nav-item me-5"><span class="nav-link">FAQs</span></li>
          </router-link>
          <router-link :to="{ name: 'Contact' }">
            <li class="nav-item me-5"><span class="nav-link">Contact</span></li>
          </router-link>
        </ul>
        <router-link :to="{ name: 'Register' }">
          <button class="btn">Register</button>
        </router-link>
      </div>
      <!--  -->
      <button @click="toggleShowMenu">
        <img
          v-if="!showMenu"
          src="../assets/svg/opentoggle-icon.svg"
          alt=""
          @click="anchor = !anchor"
        />
        <img
          @click="anchor = !anchor"
          v-if="showMenu"
          src="../assets/svg/opentoggle-icon.svg"
          alt=""
        />
      </button>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMenu: 'true'
      // anchor: 'false'
    }
  },
  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  .desktop-view {
    position: fixed;
    background: #150e28;

    top: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 63px 128px 25px 128px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    // display: none;

    @media screen and (max-width: 768px) {
      display: none;
    }

    a {
      h1 {
        font-family: Clash Display;
        font-size: 3.6rem;
        font-weight: 700;
      }
    }
    ul {
      font-size: 16px;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 5.6rem;
      li {
        //   margin-right: 56px;
        cursor: pointer;
      }
    }
  }

  .mobile-menu {
    display: flex;
    justify-content: space-between;
    align-items: first baseline;
    padding: 63px 128px 25px 128px;
    border-bottom: 1px solid;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    display: none;
    position: relative;

    @media screen and (max-width: 768px) {
      display: block;
      padding: 39px 51px;
      display: flex;
    }
    a {
      h1 {
        font-family: Clash Display;
        font-size: 36px;
        font-weight: 700;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    .nav-modal {
      ul {
        font-size: 16px;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 56px;
        li {
        }
        @media screen and (max-width: 768px) {
          flex-direction: column;
          gap: 20px;
          margin-bottom: 29px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
