<template>
  <section class="block">
    <div class="privacy__and__terms">
      <div class="privacy__and__terms-heading">
        <h1>Privacy Policy and <span class="color-purple">Terms</span></h1>
        <p>Last updated on September 12, 2023</p>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always
          take of our participant
        </p>
      </div>

      <section class="privacy__and__terms-body">
        <span class="at__getlinked">
          At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your data when you participate in our tech hackathon event. By participating in
          our event, you consent to the practices described in this policy.
        </span>

        <div class="text__and__input-container">
          <h2 class="listening__policy">Listening Policy</h2>
          <p class="here">Here are terms of our Standard License:</p>

          <div class="input__container">
            <div class="flex-1">
              <input type="checkbox" />
              <span
                >The Standard License grants you a non-exclusive right to navigate and register for
                our event</span
              >
            </div>

            <div class="flex-2">
              <input type="checkbox" />
              <span
                >You are licensed to use the item available at any free source sites, for your
                project developement</span
              >
            </div>
          </div>
        </div>

        <div class="btn-align">
          <button class="btn text-align">Read More</button>
        </div>
      </section>
    </div>

    <img class="privacy-image" src="../assets/svg/policy-2x-d00ce42a.png" alt="" />
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 50px;
  // padding: 169px 147px 167px 187px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding-top: 71px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 83px;

    row-gap: 114px;
  }

  .privacy__and__terms {
    .privacy__and__terms-heading {
      @media screen and (max-width: 820px) {
        text-align: center;
      }
      h1 {
        font-size: 32px;
        font-weight: 700;
        font-family: 'Clash Display';
        width: 300px;
        // margin: auto;

        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
        .color-purple {
          // color: #d434fe;
        }
        margin-bottom: 17px;
      }

      p:nth-of-type(1) {
        color: rgba(255, 255, 255, 0.75);
        font-size: 14px;
        font-weight: 400;
        line-height: 27.5px;
        margin-bottom: 30px;

        @media screen and (max-width: 768px) {
          margin-bottom: 28px;
        }
      }
      p:nth-of-type(2) {
        font-size: 14px;
        font-weight: 400;
        line-height: 188.4%;
        max-width: 438px;
        margin-bottom: 69px;

        @media screen and (max-width: 820px) {
          font-size: 12px;
          line-height: 188.4%;
          padding-bottom: 30px;
          margin: auto;
        }
      }
    }
  }

  .privacy__and__terms-body {
    max-width: 569px;
    border-radius: 5px;
    border: 1px solid #d434fe;
    background: rgba(217, 217, 217, 0.03);
    line-height: 216.4%;

    @media screen and (max-width: 768px) {
    }

    .at__getlinked {
      display: block;
      padding: 59px 72px 0 72px;
      font-size: 14px;
      font-weight: 400;
      line-height: 216.4%;

      @media screen and (max-width: 768px) {
        margin-bottom: 21px;
        padding: 45px 12px 0 15px;
        text-align: center;
        font-size: 12px;
      }
    }

    .text__and__input-container {
      padding-left: 72px;
      padding-right: 39px;

      @media screen and (max-width: 768px) {
        padding-left: 22px;
      }
      .listening__policy {
        margin-top: 24px;
        color: #d434fe;
        font-size: 16px;
        font-weight: 700;
      }

      .here {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 18px;
      }

      .input__container {
        span {
          display: block;
          //   margin-left: 14px;
          font-size: 14px;
        }

        .flex-1 {
          display: flex;
          align-items: flex-start;
          span {
            margin-left: 10px;

            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }

          input {
            margin-top: 5px;
          }
        }

        .flex-2 {
          display: flex;
          align-items: flex-start;
          span {
            margin-left: 10px;
            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }

          input {
            margin-top: 5px;
          }
        }

        :nth-child(1) {
          margin-bottom: 18px;
        }
      }
    }

    .btn-align {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
      margin-bottom: 59px;

      @media screen and (max-width: 768px) {
        margin-top: 40px;
      }
    }
  }

  .privacy-image {
    // width: 559px;
    // height: 749px;
    @media screen and (max-width: 768px) {
      width: 100%;
      // height: 351px;
      margin-right: 2rem;
    }
  }

  .lock-image {
    position: absolute;
    right: 200px;
    top: 0;
    z-index: -1;
    height: 635px;

    @media screen and (max-width: 768px) {
      width: 249px;
      height: 311px;

      top: 1015px;
      left: 70px;
    }
  }
}
</style>
