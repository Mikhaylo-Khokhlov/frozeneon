export const state = () => ({
  packages: [],
  searchField: '',
  allPages: 0,
})

export const mutations = {
  setPackages(state, payload) {
    state.packages = payload
  },
  setSearchField(state, payload) {
    state.searchField = payload
  },
  setAllPages(state, payload) {
    state.allPages = payload
  },
}

export const actions = {
  async packagesRequest({ commit }, { data, pageNumber }) {
    const algoliasearch = require('algoliasearch')

    const algolia = algoliasearch(
      'OFCNCOG2CU',
      'f54e21fa3a2a0160595bb058179bfb1e',
      { protocol: 'https:' }
    )
    const index = algolia.initIndex('npm-search')

    await index
      .search(data, { page: pageNumber, hitsPerPage: 10 })
      .then(({ hits, nbPages }) => {
        commit('setPackages', hits)
        commit('setAllPages', nbPages)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  changeSearchField({ commit }, data) {
    commit('setSearchField', data)
  },
}

export const getters = {
  getPackages: (state) => state.packages,
  getSearchField: (state) => state.searchField,
  getAllPages: (state) => state.allPages,
}
