<template>
  <div>
    <h1>Create list, {{ user.id }}</h1>
    <p>This list is created by {{ user.name }}</p>
    <p>There're {{ catLength }} categories:</p>

    <!-- <ul>
      <li v-for="cate in categories" :key="cate">{{ cate }}</li>
    </ul> -->
    <p>{{ doneTodos }} Todos are done and {{ unDoneTodos }} are not.</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>
<script>
// use mapState when you have retrive mutiple stuff from store.js becuse it becomes easy
import { mapState, mapGetters } from 'vuex'

export default {
  // ** when you dont need other computed property
  // computed: mapState({
  //   user: 'user',
  //   categories: 'categories'
  // })

  //**  but if need more computed properties not just from store.js
  computed: {
    //** retriving data from getters

    // catLength() {
    //   return this.$store.getters.catLength
    // },
    // doneTodos() {
    //   return this.$store.getters.doneTodos
    // },
    // undoneTodos() {
    //   return this.$store.getters.unDoneTodos
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    ...mapGetters(['getEventById', 'unDoneTodos', 'doneTodos', 'catLength']),
    ...mapState(['user', 'categories'])
  }
}
</script>
