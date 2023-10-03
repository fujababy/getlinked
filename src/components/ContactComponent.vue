<template>
  <section class="block">
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

          <!-- icons -->
        </div>
      </div>

      <div class="flex__two">
        <Form @submit="contactForm">
          <h1 class="form__header">Questions or need assistance?</h1>
          <p class="form__sub--header">Let us know about it!</p>
          <p class="form__sub--herder-two">Email us below to any question related to our event</p>

          <div class="custom__input">
            <Field
              id="first_name"
              name="name"
              placeholder="First Name"
              :rules="validateName"
              v-model="formData.first_name"
            />
            <ErrorMessage class="error" name="name" />
          </div>
          <div class="custom__input">
            <Field
              id="phone"
              name="phone"
              placeholder="Phone"
              :rules="validatePhone"
              v-model="formData.phone"
            />
            <ErrorMessage class="error" name="name" />
          </div>
          <div class="custom__input">
            <Field
              id="first_name"
              name="email"
              placeholder="Mail"
              :rules="validateEmail"
              v-model="formData.email"
            />
            <ErrorMessage class="error" name="email" />
          </div>
          <div class="message">
            <Field
              id="message"
              as="textarea"
              name="message"
              placeholder="Message"
              :rules="validateMessage"
              cols="30"
              rows="10"
              v-model="formData.message"
            />

            <ErrorMessage class="error" name="message" />
          </div>
          <div class="btn-container">
            <button @click="notify" class="btn submit-btn">Submit</button>
          </div>

          <div class="textandicon">
            <p class="color-purple">Share on</p>
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
        </Form>
      </div>
      <!-- 
      <img class="ecllipse-1" src="../assets/svg/contact-Purple-Lens-Flare-PNG.svg" alt="" /> -->
    </div>

    <div class="icon__and___text"></div>

    <!-- purple blur flare -->
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-two" />

    <img class="absolute__items-1" src="../assets/icons/star.svg" alt="" />
    <img class="absolute__items-2" src="../assets/icons/star1.svg" alt="" />
    <img class="absolute__items-3" src="../assets/icons/star2.svg" alt="" />
    <img class="absolute__items-4" src="../assets/icons/satagra.svg" alt="" />
  </section>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import axios from '../utils/axios'
import { toast } from 'vue3-toastify'

import 'vue3-toastify/dist/index.css'

export default {
  name: 'ContactForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },

  setup() {
    const notify = () => {
      toast('Thanks for your feedback!', {
        autoClose: 2000
      }) // ToastOptions
    }
    return { notify }
  },

  data() {
    return {
      formData: {
        first_name: '',
        email: '',
        phone_number: '',
        message: ''
      }
    }
  },

  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2))
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Required'
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid Email!'
      }
      // All is good
      return true
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return 'Required'
      }
      return true
    },
    validatePhone(value) {
      // if the field is empty
      if (!value) {
        return 'Required'
      }
      return true
    },
    validateMessage(value) {
      // if the field is empty
      if (!value) {
        return 'Required'
      }

      // if the field is not a valid email
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // if (!regex.test(value)) {
      //   return 'Your name can only be Aphanumeric!'
      // }
      // All is good
      return true
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
      height: 100vh;

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
          // display: flex;
          // flex-direction: column;
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
            max-height: 110px;
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
