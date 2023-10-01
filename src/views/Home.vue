<template>
  <div>
    <NavigationComponent />
    <HeroComponent />
    <IntroductionComponent />
    <!-- <ContactComponent /> -->
    <!-- <RegisterComponent /> -->
    <!-- <SuccessfulRegistrationComponent /> -->
    <RulesAndGuidelines />
    <JudgingCriteria />

    <faqs-component />

    <TimelineComponent />

    <RewardComponent />
    <PrivacyPolicyAndTerms />
    <PartnersAndSponsorsComponent />

    <FooterComponent />
  </div>
</template>

<script>
import NavigationComponent from '../components/NavigationComponent.vue'
import IntroductionComponent from '../components/IntroductionComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import SuccessfulRegistrationComponent from '../components/SuccessfulRegistrationComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
import PrivacyPolicyAndTerms from '../components/PrivacyPolicyAndTerms.vue'
import IntroductionComponentVue from '../components/IntroductionComponent.vue'
import TimelineComponent from '../components/TimelineComponent.vue'
import HeroComponent from '../components/HeroComponent.vue'
import RewardComponent from '../components/RewardComponent.vue'
import PartnersAndSponsorsComponent from '../components/PartnersAndSponsorsComponent.vue'

import RulesAndGuidelines from '../components/RulesAndGuidelinesComponent.vue'
import JudgingCriteria from '../components/JudgingCriteraiComponent.vue'

// import faqs from '../components/FaqsComponent.vue'
import FaqsComponent from '../components/FaqsComponent.vue'

export default {
  name: 'home',
  components: {
    NavigationComponent,
    IntroductionComponent,
    FaqsComponent,
    RulesAndGuidelines,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    SuccessfulRegistrationComponent,
    PrivacyPolicyAndTerms,
    TimelineComponent,
    RewardComponent,
    HeroComponent,
    PartnersAndSponsorsComponent,
    RulesAndGuidelines,
    JudgingCriteria
  }
}
</script>
