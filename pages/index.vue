<template>
  <div>
    <v-select
      v-model="defaultSelected"
      class="w-25"
      :items="sort"
      label="Sort by:"
      hide-details="auto"
      variant="underlined"
      @update:modelValue="order = $event"
    ></v-select>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JobList from '../components/JobList.vue'
import { OrderTerm, Job } from '../types/Types'

export default defineComponent({
  components: {
    JobList,
  },

  data() {
    return {
      defaultSelected: 'title',
      sort: ['title', 'salary', 'location'],
    }
  },

  setup() {
    const jobs = ref<Job[]>([
      {
        title: 'farm worker',
        location: 'lon lon ranch',
        salary: 30000,
        id: '1',
      },
      {
        title: 'quarryman',
        location: 'death mountain',
        salary: 40000,
        id: '2',
      },
      {
        title: 'flute player',
        location: 'the lost woods',
        salary: 35000,
        id: '3',
      },
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
      {
        title: 'prison guard',
        location: 'gerudo valley',
        salary: 32000,
        id: '5',
      },
    ])
    const order = ref<OrderTerm>('title')

    return { jobs, order }
  },
})
</script>

<style lang="scss"></style>
