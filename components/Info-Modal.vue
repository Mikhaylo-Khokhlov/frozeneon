<template>
  <v-dialog
    v-model="toggle"
    class="modal"
    width="500"
    @click:outside="closeModal"
  >
    <v-card class="modal-card">
      <v-card-title v-if="info.name" class="text-h5 grey lighten-2">
        {{ info.name }}
        <v-icon class="ml-auto" @click="closeModal"> mdi-close </v-icon>
      </v-card-title>
      <v-card-text class="pt-5 modal-card-text">
        <table class="modal-table">
          <tr>
            <td>Downloads last 30 days</td>
            <td>
              {{ info.downloadsLast30Days ? info.downloadsLast30Days : '---' }}
            </td>
          </tr>
          <tr v-if="info.owner">
            <td>Owner</td>
            <td>{{ info.owner.name ? info.owner.name : '---' }}</td>
          </tr>
          <tr v-if="info.owner">
            <td>Owner link</td>
            <td>
              <a :href="info.owner.link" target="_blanck">{{
                info.owner.link ? info.owner.link : '---'
              }}</a>
            </td>
          </tr>
          <tr v-if="info.repository">
            <td>Repository</td>
            <td>
              <a :href="info.repository.url" target="_blanck">{{
                info.repository.url ? info.repository.url : '---'
              }}</a>
            </td>
          </tr>
          <tr v-if="info.originalAuthor">
            <td>Original author email</td>
            <td>
              {{
                info.originalAuthor.email ? info.originalAuthor.email : '---'
              }}
            </td>
          </tr>
        </table>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions v-if="info.homepage" class="d-block">
        <v-spacer></v-spacer>
        <div>
          <p>More info on:</p>
          <a :href="info.homepage" target="_blanck">{{ info.homepage }}</a>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    switcher: {
      type: Boolean,
      default: () => false,
    },
    info: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return { toggle: false }
  },

  watch: {
    switcher(val) {
      this.toggle = val
    },
  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &-card {
    cursor: pointer;

    &-text {
      overflow: auto;
    }
  }
  &-table {
    border-collapse: collapse;
    width: 100%;
    color: #000;

    & td {
      border: 1px solid #ddd;
      padding: 8px;
    }

    & tr {
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      &:hover {
        background-color: #ddd;
      }
    }
  }
}
</style>
