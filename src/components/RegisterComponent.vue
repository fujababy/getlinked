<template>
  <section class="register__page">
    <div
      class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center hover:bg-indigo-400 cursor-pointer"
      v-if="reg_show_alert"
      :class="reg_alert_variant"
    >
      {{ reg_alert_msg }}
    </div>
    <div class="flex__items">
      <div class="flex__item-1">
        <h1 class="form__header animate-pulse">Register</h1>
        <figure>
          <img src="../assets/svg/register-image1.webp" alt="" />
        </figure>
      </div>

      <div class="flex__item-2">
        <vee-form class="register__form" :validation-schema="schema" @submit="registerForm">
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
              <vee-field
                id="team_name"
                name="team_name"
                type="text"
                placeholder="Enter the name of your group"
              />
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="team_name" />
            </div>
            <div class="input__container">
              <label for="">Phone</label>
              <vee-field
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
              />
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="phone" />
            </div>
          </div>
          <div class="first__input-container margin-top">
            <div class="input__container">
              <label for="">Email</label>
              <vee-field
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="email" />
            </div>
            <div class="input__container">
              <label for="">Project Topic</label>
              <vee-field
                id=""
                name="project"
                type="text"
                placeholder="What is your group project topic"
              />
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="project" />
            </div>
          </div>
          <div class="first__input-container">
            <div class="input__container">
              <label for="">Category</label>
              <vee-field as="select" name="category" id="" class="select">
                <option value="select">Select your category</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </vee-field>
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="category" />
            </div>
            <div class="input__container">
              <label for="">Group Size</label>
              <vee-field as="select" class="select" name="group">
                <option value="select">Select</option>
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="50">50</option>
              </vee-field>
              <ErrorMessage class="text-red-500 mt-2 text-lg block" name="group" />
            </div>
          </div>

          <div class="please__container">
            <span class="review">Please review your registration details before submitting</span>

            <span class="radio__container">
              <input type="checkbox" v-model="formData.true" />
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>

          <div class="btn-container">
            <button class="btn btn-register">Register Now</button>
          </div>
        </vee-form>
      </div>
    </div>

    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-one animate-pulse" />
    <img src="../assets/svg/Purple-Lens-Flare.svg" alt="" class="blur-two" />
  </section>
</template>

<script>
import axios from '../utils/axios'

export default {
  components: {},

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
      },
      schema: {
        team_name: 'required|min:3|max:100|alpha_spaces',
        phone: 'required|min:11|max:15|',
        email: 'required|min:3|max:100|email',
        project: 'required|min:3|max:100|',
        category: 'required',
        group: 'required'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_message: 'Please wait! Account is being registered.'
    }
  },

  methods: {
    onSubmit(values) {
      console.log(values)
    },

    register(values) {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-indigo-500'
      this.reg_alert_msg = 'Please wait! Your account is being created.'
      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_msg = 'Thank You! Your Message has been delivered.'
      console.log(values)
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
              // color: #ffffff;
              font-size: 16px;
              background-image: none;
              width: 237px;

              @media screen and (max-width: 820px) {
                width: 100%;
              }
            }

            select option {
              background: rgba(255, 255, 255, 0.03);
              box-shadow: 0px 4px 4px 0px #00000040;
              // color: #ffffff;
              font-size: 16px;
              background-image: none;
              width: 100%;
            }

            option:not(:checked) {
              background: #d434fe;
              width: 100%;
            }
            .select:active {
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
