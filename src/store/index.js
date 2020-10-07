import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'John' },
    categories: [
      'sustainablity',
      'nature',
      'animal walfare',
      'housing',
      'education',
      'food',
      'comumnity'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: true },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: true }
    ],
    events: [
      { id: 1, text: '...', organizer: true },
      { id: 2, text: '...', organizer: true },
      { id: 3, text: '...', organizer: false },
      { id: 4, text: '...', organizer: true }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todos => todos.done).length
    },
    unDoneTodos: state => {
      return state.todos.filter(todos => !todos.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
