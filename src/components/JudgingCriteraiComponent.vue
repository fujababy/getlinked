<template>
  <div class="media media-height">
    <div class="media__image" data-aos="fade-up" data-aos-duration="900">
      <img class="judging-image" src="../assets/svg/judge.svg" alt="" />
    </div>
    <div class="media__body">
      <h2 class="media__header judging-width">
        Judging Criteria<span class="color-purple"> Key attributes</span>
      </h2>
      <p class="media__text margin-bottom">
        <span class="color-pink">Innovation and Creativity:</span> Evaluate the uniqueness and
        creativity of the solution. Consider whether it addresses a real-world problem in a novel
        way or introduces innovative features.
      </p>
      <p class="media__text margin-bottom">
        <span class="color-pink">Functionality:</span> Assess how well the solution works. Does it
        perform its intended functions effectively and without major issues? Judges would consider
        the completeness and robustness of the solution.
      </p>
      <p class="media__text margin-bottom">
        <span class="color-pink">Impact and Relevance:</span> Determine the potential impact of the
        solution in the real world. Does it address a significant problem, and is it relevant to the
        target audience? Judges would assess the potential social, economic, or environmental
        benefits.
      </p>
      <p class="media__text margin-bottom">
        <span class="color-pink">Technical Complexity:</span> Evaluate the technical sophistication
        of the solution. Judges would consider the complexity of the code, the use of advanced
        technologies or algorithms, and the scalability of the solution.
      </p>
      <p class="media__text margin-bottom">
        <span class="color-pink">Adherence to Hackathon Rules: </span>Judges will Ensure that the
        team adhered to the rules and guidelines of the hackathon, including deadlines, use of
        specific technologies or APIs, and any other competition-specific requirements.
      </p>
      <button class="btn">Read More</button>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: none;
  border-right: none;
  padding-top: 80px;
  padding-bottom: 100px;
  //   height: 617px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    gap: 0;
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 48px;
    padding-bottom: 58.65px;
  }

  .media__image {
    .judging-image {
      @media screen and (max-width: 768px) {
        width: 100%;
        // height: 275px;
      }
    }
  }
  .media__body {
    @media screen and (max-width: 768px) {
      // text-align: center;
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

      .color-purple {
        color: #d434fe;
      }
    }

    .judging-width {
      max-width: 267px;

      @media screen and (max-width: 768px) {
      }
    }
    .media__text {
      font-size: 14px;
      font-weight: 400;
      line-height: 27.5px;
      max-width: 535px;

      @media screen and (max-width: 768px) {
        font-size: 12px;
      }

      .color-pink {
        color: #ff26b9;
        font-weight: 700;
      }

      .text__bold {
        font-weight: 700;
      }
    }
    .margin-bottom {
      margin-bottom: 22px;
    }
  }
}
</style>
