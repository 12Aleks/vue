export default{
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'GrowthBasters: Hooked on Growth',
        'description': 'Donec semper pharetra sem sit amet mattis. Morbi efficitur placerat mi, eu consectetur urna finibus sit amet. Duis auctor lacinia augue, vel condimentum nisl auctor vel. Suspendisse aliquet eros at nulla commodo, id pharetra est maximus. Aliquam vel nulla at sem luctus congue. Vestibulum euismod, leo id gravida posuere, urna turpis pellentesque eros, posuere facilisis metus felis vel mauris. Morbi porta turpis ac pellentesque eleifend. Quisque nec lacinia dolor.',
        'whatWatch': 'Film',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Game of thrones',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat nibh eu nulla feugiat efficitur nec eget enim. Vivamus pharetra egestas libero sed interdum. ',
        'whatWatch': 'Serial',
        'completed': false,
        'editing': false,
      }
    ]
  },
  getters: {
  },
  mutations: {
    newVideo(state, payload){
      payload.id = Math.random();
      state.tasks.push(payload)
    }
  },
  actions: {
    newVideo({commit}, payload){
      commit('newVideo', payload)
    }
  }
}
