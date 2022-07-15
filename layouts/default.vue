<template>
  <v-app>
    <app-header />
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '~/components/App-Header'
import AppFooter from '~/components/App-Footer'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      fixed: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
