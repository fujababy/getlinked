<template>
  <section class="block">
    <!--alert message-->
    <div
      class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 cursor-pointer animate-bounce"
      v-if="reg_show_alert"
      :class="reg_alert_variant"
    >
      {{ reg_alert_msg }}
    </div>
    <div class="flex__items">
      <div class="flex__one">
        <header>
          <h1 class="color-purple">Get in touch</h1>
        </header>
        <div class="span__items">
          <span>Contact </span>
          <span>Information</span>
          <span>27,Alara Street</span>
          <span>Yaba 100012</span>
          <span>Lagos State</span>
          <span>Call us : 07067981819</span>
          <span>we are open from Monday-Friday</span>
          <span>08:00am - 05:00pm </span>
          <span class="color-purple">Share on</span>
          <div class="icon-container animate-bounce">
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
      </div>

      <div class="flex__two">
        <vee-form :validation-schema="schema" class="form" @submit="register">
          <h1 class="form__header">Questions or need assistance?</h1>
          <p class="form__sub--header">Let us know about it!</p>
          <p class="form__sub--herder-two">Email us below to any question related to our event</p>
          <!-- first name -->
          <div class="custom__input">
            <vee-field
              name="first_name"
              id="first_name"
              type="text"
              placeholder="First Name"
              v-model="formData.first_name"
            />
            <ErrorMessage class="text-red-500 mt-2 text-lg" name="first_name" />
          </div>
          <!-- phone -->
          <div class="custom__input">
            <vee-field
              name="email"
              id="email"
              type="text]"
              placeholder="Email"
              v-model="formData.email"
            />
            <ErrorMessage class="text-red-500 mt-2 text-lg" name="email" />
          </div>
          <!-- email -->
          <div class="custom__input">
            <vee-field
              name="phone_number"
              id="phone_number"
              type="number"
              placeholder="Phone Number"
              v-model="formData.phone_number"
            />
            <ErrorMessage class="text-red-500 mt-2 text-lg" name="phone_number" />
          </div>
          <!-- message -->
          <div class="message">
            <vee-field
              as="textarea"
              name="message"
              id="message"
              type="text"
              placeholder="Message"
              v-model="formData.message"
            />
            <ErrorMessage class="text-red-500 mt-2 text-lg" name="message" />
          </div>
          <div class="btn-container">
            <button class="btn submit-btn" :disabled="reg_in_submission" value="Submit">
              Submit
            </button>
          </div>
        </vee-form>
      </div>
    </div>

    <div class="icon__and___text"></div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-two" />

    <img class="absolute__items-1" src="../assets/icons/star.svg" alt="" />
    <img class="absolute__items-2" src="../assets/icons/star1.svg" alt="" />
    <img class="absolute__items-3" src="../assets/icons/star2.svg" alt="" />
    <img class="absolute__items-4" src="../assets/icons/satagra.svg" alt="" />
  </section>
</template>
<script>
import axios from '../utils/axios'

export default {
  name: 'contactForm',
  // open() {
  //   this.$toast.open({
  //     message: 'Registration successful',
  //     type: 'success',
  //     duration: 3000,
  //     dismissible: true,
  //     position: 'top-right',
  //     pauseOnHover: true
  //   })
  // },
  components: {},

  data() {
    return {
      formData: {
        first_name: '',
        email: '',
        phone_number: '',
        message: ''
      },
      schema: {
        first_name: 'required|min:3|max:100|alpha_spaces',
        phone_number: 'required|min:11|max:15|',
        email: 'required|min:3|max:100|email',
        message: 'required|min:3|max:100|'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-indigo-500 ',
      reg_alert_message: 'Please wait! Account is being registered.'
    }
  },

  methods: {
    register(values) {
      console.log(values)
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-indigo-500'
      this.reg_alert_msg = 'Please wait! Your account is being created.'
      this.reg_alert_variant = 'bg-green-500 rounded'
      this.reg_alert_msg = 'Thank You! Your Message has been delivered.'
    },

    // api call
    contactForm() {
      axios
        .post('/hackathon/contact-form', this.formData)
        .then((response) => {
          this.formData = {
            first_name: '',
            email: '',
            phone_number: '',
            message: ''
          }
          console.log(response)
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  position: relative;
  overflow: hidden;
  // width: 100%;
  // margin-top: 115px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  .flex__items {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 115px;
    position: relative;
    margin-bottom: 115px;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      // height: auto;
      margin-top: 0;
    }

    .flex__one {
      width: 100%;
      padding-left: 190px;
      header,
      h1 {
        color: #d434fe;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 17px;
      }
      .span__items {
        span {
          display: block;
          color: #fff;

          font-size: 16px;

          font-weight: 400;
        }
        :nth-child(2) {
          margin-bottom: 17px;
        }
        :nth-child(5) {
          margin-bottom: 21px;
        }
        :nth-child(6) {
          margin-bottom: 22px;
        }
        :nth-child(8) {
          margin-bottom: 35px;
        }
        :nth-child(9) {
          color: #d434fe;
          margin-bottom: 18px;
        }

        .icon-container {
          display: flex;

          .icon {
            margin-right: 19px;
          }

          @media screen and (max-width: 768px) {
            display: none;
          }
        }

        .animate-bounce {
          animation-duration: 2s;
          animation-timing-function: ease-out;
        }
      }

      @media screen and (max-width: 820px) {
        display: none;
      }
    }

    .flex__two {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 115px;
      height: auto;

      @media screen and (max-width: 768px) {
        margin-top: 0;
      }

      form {
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        // width: 617px;

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 75px 90px 67px 90px;

        @media screen and (max-width: 768px) {
          padding-left: 30px;
          padding-right: 30px;
          margin: auto;
          background: none;
        }

        .form__header {
          color: #d434fe;
          font-size: 20px;
          font-weight: 600;

          @media screen and (max-width: 768px) {
            // text-align: center;
            width: 195px;
            // margin-top: 111px;
          }
        }
        .form__sub--header {
          color: #d434fe;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 34px;

          @media screen and (max-width: 768px) {
            // text-align: center;
            margin-bottom: 24px;
          }
        }

        .form__sub--herder-two {
          font-size: 14px;
          margin-bottom: 1.5rem;

          @media screen and (max-width: 768px) {
            font-size: 12px;
            margin-bottom: 30px;
          }
        }

        .custom__input {
          margin-bottom: 42px;
          display: flex;
          flex-direction: column;
          // gap: 1rem;
          width: 100%;

          input {
            padding: 15px 20px;
            // max-width: 437px;
            width: 100%;
            border-radius: 4px;
            border: 1px solid #fff;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            color: #ffffff;
            font-size: 16px;

            @media screen and (max-width: 768px) {
              width: 100%;
            }
          }
          input::placeholder {
            color: #ffffff;
          }
        }

        .error {
          color: red;
          font-size: 12px;
        }
        .message {
          display: flex;
          flex-direction: column;
          textarea {
            padding: 13px 0 14px 29px;
            // width: 437px;
            border-radius: 4px;
            border: 1px solid #fff;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            color: #ffffff;
            font-size: 16px;
            width: 100%;
            max-height: 150px;
            min-height: 100px;
          }
        }

        .textandicon {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-top: 41px;
          display: none;

          p {
            text-align: center;
          }

          .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 23px;
            margin-top: 20px;
          }

          @media screen and (max-width: 768px) {
            display: block;
          }

          .animate-bounce {
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
          }
        }
      }

      .btn-container {
        text-align: center;
        .submit-btn {
          margin-top: 31px;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }
      }
    }
  }

  .icon__and___text {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    padding-left: 135px;
    padding-right: 49px;

    @media screen and (max-width: 768px) {
      justify-content: center;
      align-items: end;
      // margin: auto;
    }

    p {
      text-align: left;
    }
  }
}
</style>
