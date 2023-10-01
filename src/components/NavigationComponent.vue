<template>
  <section>
    <!-- <nav class="desktop-view">
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
    </nav> -->

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />

    <nav class="mobile-menu">
      <a href="/ ">
        <h1 v-if="!showMenu">get<span class="color-purple">linked</span></h1>
      </a>

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

      <!-- <button @click="toggleShowMenu"> -->
      <img v-if="showMenu" src="../assets/svg/opentoggle-icon.svg" alt="" @click="toggleShowMenu" />
      <img
        v-if="!showMenu"
        @click="toggleShowMenu"
        src="../assets/svg/opentoggle-icon.svg"
        alt=""
      />
      <!-- </button> -->
    </nav>

    <!-- <div class="flex-container">
      <div class="header">
        <h1 v-if="!showBooks">gerlinked</h1>
      </div>
      <div class="list" v-if="showBooks">
        <ul>
          <li>12</li>
          <li>123</li>
          <li>1234</li>
        </ul>
      </div> -->
    <!-- <div class="image">
        <img src="../assets/svg/menu-icon.svg" alt="" />
      </div> -->
    <!-- <button v-if="showBooks" @click="toggleShowBooks">hide books</button>
      <button v-if="!showBooks" @click="toggleShowBooks">shide books</button>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
      // anchor: 'false'
      // showBooks: false
      // showHead: !false
    }
  },
  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu
    }
  }
  // methods: {
  //   toggleShowBooks() {
  //     this.showBooks = !this.showBooks
  //   }
  // }
}
</script>

<style lang="scss" scoped>
section {
  // .flex-container {
  //   display: none;
  //   .header {
  //     .list {
  //     }
  //   }

  //   @media screen and (max-width: 768px) {
  //     display: block;
  //     display: flex;
  //     justify-content: space-between;

  //     .list {
  //       @media screen and (max-width: 768px) {
  //         // display: none;
  //         align-self: flex-start;
  //         margin-top: 50px;
  //       }
  //     }
  //   }
  // }

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
      margin-left: -130px;
      // margin-top: 40px;
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

        // :nth-child(4) {
        //   color: linear-gradient(270deg, #903aff 0%, #d434fe 56.42%, #ff26b9 99.99%, #fe34b9 100%);
        // }
      }
    }
  }
}
</style>
