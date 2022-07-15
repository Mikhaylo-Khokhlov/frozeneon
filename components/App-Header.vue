<template>
  <header class="header">
    <v-container class="d-flex justify-center">
      <v-text-field
        v-model="search"
        dense
        class="header-search"
        label="Search"
        solo
        @input="packageSearch"
      ></v-text-field>
    </v-container>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return { search: '' }
  },

  watch: {
    search(newSearch) {
      localStorage.search = newSearch
    },
  },

  mounted() {
    if (localStorage.search) {
      this.search = localStorage.search
      this.packageSearch()
    }
  },
  methods: {
    ...mapActions({
      packagesRequest: 'packages/packagesRequest',
      changeSearchField: 'packages/changeSearchField',
    }),

    async packageSearch() {
      const reqData = { data: this.search, pageNumber: 1 }
      await this.packagesRequest(reqData)
      this.changeSearchField(this.search)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  max-width: 1768px;
  width: 100%;
  margin: 0 auto;
  background-color: #ff8a65;

  &-search {
    max-width: 300px;
  }
}
</style>
