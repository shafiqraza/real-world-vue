import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 1, name: 'John' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],

    events: [],
    totalEvents: '',
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    FETCH_EVENTS(state, events) {
      state.events = events
    },
    FETCH_EVENT(state, event) {
      state.event = event
    },
    TOTAL_EVENTS(state, totalEvents) {
      state.totalEvents = totalEvents
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          // console.log('Total events are: ' + response.headers['x-total-count'])
          commit('TOTAL_EVENTS', response.headers['x-total-count'])
          commit('FETCH_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.findEventById(id)
      if (event) {
        commit('FETCH_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('FETCH_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error: ' + error.response)
          })
      }
    }
  },
  modules: {},
  getters: {
    findEventById: state => id => {
      return state.events.find(event => event.id == id)
    }
  }
})
