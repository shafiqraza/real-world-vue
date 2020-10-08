<template>
  <div>
    <h1>Events List here {{ page }}</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <div>
      <span class="pagination" @click="pervPage">Perv Page</span>
      <span class="pagination" @click="nextPage"> Next Page</span>
    </div> -->
    <router-link
      v-if="page != 1"
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="perv"
      >Perv Page</router-link
    >
    |
    <router-link
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      v-if="totalEvents > page * 3"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },

  computed: {
    page() {
      return this.$route.query.page || 1
    },
    ...mapState(['events', 'totalEvents'])
  }
}
</script>

<style scoped></style>
