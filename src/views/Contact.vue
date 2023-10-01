<template>
  <div>
    <NavigationComponent />

    <ContactComponent />

    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import NavigationComponent from '../components/NavigationComponent.vue'

import FooterComponent from '../components/FooterComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'

export default {
  name: 'home',
  components: {
    NavigationComponent,
    FooterComponent,
    ContactComponent
  }
}
</script>
