<template>
  <section class="register__page">
    <div class="flex__items">
      <div class="flex__item-1">
        <h1 class="form__header animate-pulse">Register</h1>
        <figure>
          <img src="../assets/svg/register-image (1).webp" alt="" />
        </figure>
      </div>

      <div class="flex__item-2">
        <Form class="register__form" @submit="registerForm">
          <h1 class="form__header animate-pulse">Register</h1>
          <div class="sub-heading-container">
            <p class="sub-heading-text">Be part of this movement!</p>

            <div class="sub-heading-image">
              <img src="../assets/images/girl-working.png" alt="" />
              <img src="../assets/images/boy-walking.png" alt="" />
            </div>
          </div>

          <span class="create">CREATE YOUR ACCOUNT</span>

          <div class="first__input-container">
            <div class="input__container">
              <label for="">Team's Name</label>
              <Field
                id="team_name"
                name="teamName"
                type="text"
                placeholder="Enter the name of your group"
                :rules="validateteamName"
                v-model="formData.team_name"
              />
              <ErrorMessage class="error" name="teamName" />
            </div>
            <div class="input__container">
              <label for="">Phone</label>
              <Field
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                :rules="validatePhone"
                v-model="formData.phone_number"
              />
              <ErrorMessage class="error" name="phone" />
            </div>
          </div>
          <div class="first__input-container margin-top">
            <div class="input__container">
              <label for="">Email</label>
              <Field
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
                :rules="validateEmail"
                v-model="formData.email"
              />
              <ErrorMessage class="error" name="email" />
            </div>
            <div class="input__container">
              <label for="">Project Topic</label>
              <Field
                id="project_topic"
                name="project"
                type="text"
                placeholder="What is your group project topic"
                :rules="validateProject"
                v-model="formData.project_topic"
              />
              <ErrorMessage class="error" name="project" />
            </div>
          </div>
          <div class="first__input-container">
            <div class="input__container">
              <label for="">Category</label>
              <select name="" id="">
                <option value="saab">Select your category</option>
                <option value="fiat">1</option>
                <option value="audi">2</option>
              </select>
            </div>
            <div class="input__container">
              <label for="">Group Size</label>
              <select name="" id="">
                <option value="saab">Select</option>
                <option value="fiat">1</option>
                <option value="audi">10</option>
                <option value="audi">50</option>
              </select>
            </div>
          </div>

          <label for="Category"> </label>

          <div class="please__container">
            <span class="review">Please review your registration details before submitting</span>

            <span class="radio__container">
              <input type="checkbox" v-model="formData.true" />
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>

          <div class="btn-container">
            <button @click="open" class="btn btn-register">Register Now</button>
          </div>
        </Form>
      </div>
    </div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-two" />

    <button>Show toast</button>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import axios from '../utils/axios'

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },

  data() {
    return {
      formData: {
        email: '',
        phone_number: '',
        team_name: '',
        group_size: 10,
        project_topic: '',
        category: 1,
        privacy_policy_accepted: true
      }
    }
  },

  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2))
    },
    validateteamName(value) {
      // if the field is empty
      if (!value) {
        return 'Required!'
      }

      // if the field is not a valid email
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // if (!regex.test(value)) {
      //   return 'This field must be a valid Email!'
      // }
      // All is good
      return true
    },
    validatePhone(value) {
      // if the field is empty
      if (!value) {
        return 'Required!'
      }

      // if the field is not a valid email
      // const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // if (!regex.test(value)) {
      //   return 'Your name can only be Aphanumeric!'
      // }
      // All is good
      return true
    },

    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Required!'
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'Your name can only be Aphanumeric!'
      }
      // All is good
      return true
    },
    validateProject(value) {
      // if the field is empty
      if (!value) {
        return 'Required!'
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
    registerForm() {
      axios
        .post('/hackathon/registration', this.formData)
        .then((response) => {
          this.formData = {
            email: '',
            phone_number: '',
            team_name: '',
            group_size: 10,
            project_topic: '',
            category: 1,
            privacy_policy_accepted: true
          }
          console.log(response)
        })
        .catch((error) => console.log(error))
    },
    open() {
      this.$toast.open({
        message: 'Registration successful',
        type: 'success',
        duration: 3000,
        dismissible: true,
        position: 'top-right',
        pauseOnHover: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register__page {
  position: relative;
  overflow: hidden;
  padding-top: 180px;
  padding-bottom: 68px;

  @media screen and (max-width: 768px) {
    // flex-direction: column;
    padding-top: 0;
  }
  .flex__items {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      padding-top: 0;
    }

    .flex__item-1 {
      .form__header {
        display: none;
        color: #d434fe;
        margin-bottom: 46px;
        font-size: 18px;
        padding-left: 60px;
        padding-top: 30px;
        font-weight: 600;

        @media screen and (max-width: 820px) {
          display: block;
        }
      }
      width: 100%;
      figure {
        img {
          width: 100%;
        }
      }
    }

    .flex__item-2 {
      width: 100%;
      .register__form {
        padding: 65px 91px;
        max-width: 740px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 820px) {
          background: none;
          padding: 0;
          width: 100%;
          padding: 0 30px;
        }

        .form__header {
          color: #d434fe;
          margin-bottom: 46px;
          font-size: 32px;
          font-weight: 600;
          display: block;

          @media screen and (max-width: 820px) {
            display: none;
          }
        }
        .sub-heading-container {
          display: flex;
          align-items: last baseline;
          column-gap: 11px;

          .sub-heading-text {
            color: #fff;
            font-size: 14px;
            font-weight: 400;

            @media screen and (max-width: 820px) {
              font-size: 12px;
            }
          }
          .sub-heading-image {
            border-bottom: 1px dashed #d434fe;
            padding-right: 45px;
            padding-left: 45px;
            display: flex;

            @media screen and (max-width: 820px) {
              padding: 0;
            }
          }
        }
        .create {
          display: block;
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 33px;
          margin-top: 19px;

          @media screen and (max-width: 820px) {
            font-size: 18px;
            font-weight: 400;
          }
        }

        .first__input-container {
          display: flex;
          // column-gap: 32px;

          @media screen and (max-width: 820px) {
            flex-direction: column;
          }
          .input__container {
            margin-top: 29px;
            width: 100%;
            label {
              display: block;
              margin-bottom: 11px;
              font-size: 14px;
            }
            input {
              padding: 15px 20px;
              // width: 437px;
              border-radius: 4px;
              border: 1px solid #fff;
              background: rgba(255, 255, 255, 0.03);
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              color: #ffffff;
              font-size: 16px;
              // max-width: 263px;

              @media screen and (max-width: 820px) {
                width: 100%;
              }
            }

            select {
              padding: 15px 20px;
              border-radius: 4px;
              border: 1px solid #fff;
              background: rgba(255, 255, 255, 0.03);
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              color: #ffffff;
              font-size: 16px;
              background-image: none;
              width: 250px;

              @media screen and (max-width: 820px) {
                width: 100%;
              }
            }

            .select:active {
              background: #000;
            }

            ::placeholder {
              font-size: 14px;
            }

            .error {
              color: red;
            }
          }
        }

        .please__container {
          .review {
            display: block;
            color: #ff26b9;
            margin-top: 23px;
            font-size: 12px;
            margin-bottom: 16px;
            font-weight: 400;
            font-style: italic;
          }

          .radio__container {
            display: flex;
            align-items: center;
            column-gap: 10px;
          }
        }
      }
    }
  }

  .btn-register {
    width: 100%;
    margin-top: 22px;
    margin-bottom: 30px;
  }

  .blur-one {
    position: absolute;
    top: 0;
    left: -120px;
    filter: blur(90px);
    width: 600px;
    // width: 1037px;
    // height: 948px;
    z-index: -1;
    background-blend-mode: hard-light;
  }
  .blur-two {
    position: absolute;
    bottom: 0;
    right: -120px;
    filter: blur(90px);
    width: 600px;
    z-index: -1;
    background: #2b1170;
  }
}
</style>
