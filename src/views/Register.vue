<template>
  <div>
    <NavigationComponent />

    <RegisterComponent />

    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import NavigationComponent from '../components/NavigationComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'

export default {
  name: 'home',
  components: {
    RegisterComponent,
    NavigationComponent,
    FooterComponent
  }
}
</script>
