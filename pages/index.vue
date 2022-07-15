<template>
  <div class="">
    <div v-if="isEmpty">
      <v-data-table
        :headers="headers"
        :items="packages"
        :items-per-page="10"
        disable-sort
        hide-default-footer
        class="elevation-1"
        :page.sync="page"
        @click:row="openDialog"
      >
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="allPages"
          @input="getPage"
        ></v-pagination>
      </div>
    </div>

    <div v-else>
      <p class="no-info">Nothing found.</p>
      <p class="no-info">
        Start your search or check if the search query is correct.
      </p>
    </div>
    <InfoModal
      :switcher="modalToggle"
      :info="packageInfo"
      @close-modal="closeInfoModal"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InfoModal from '~/components/Info-Modal'

export default {
  name: 'IndexPage',
  components: { InfoModal },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Version', value: 'version' },
        { text: 'Homepage', value: 'homepage' },
        { text: 'Description', value: 'description', align: 'center' },
      ],
      modalToggle: false,
      page: 1,
      packageInfo: {},
    }
  },
  computed: {
    ...mapGetters({
      packages: 'packages/getPackages',
      searchField: 'packages/getSearchField',
      allPages: 'packages/getAllPages',
    }),

    isEmpty() {
      return this.packages.length > 0 && this.searchField
    },
  },
  methods: {
    ...mapActions({
      changeSelectPage: 'packages/changeSelectPage',
      packagesRequest: 'packages/packagesRequest',
    }),

    openDialog(item) {
      this.modalToggle = true
      this.packageInfo = item
    },

    closeInfoModal() {
      this.modalToggle = false
    },

    async getPage() {
      const reqData = { data: this.searchField, pageNumber: this.page }
      await this.packagesRequest(reqData)
    },
  },
}
</script>

<style lang="scss" scoped>
.no-info {
  text-align: center;
  font-size: 40px;
}
</style>
