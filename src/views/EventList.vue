<template>
  <div>
    <h1>Events List here</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents() //you have to run json-server --watch db.json
      .then(response => {
        this.events = response.data
      })
      .catch(errors => {
        console.log('There was an error: ' + errors.response)
      })
  }
}
</script>

<style></style>
