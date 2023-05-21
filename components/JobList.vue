<template>
  <div>
    <v-slide-y-transition group>
      <v-card variant="tonal" v-for="job in orderedJobs" :key="job.id">
        <v-card-item>
          <v-card-title> {{ job.title }} in {{ job.location }} </v-card-title>
          <v-card-subtitle> {{ job.salary }} rupees </v-card-subtitle>
        </v-card-item>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloremque est cumque, minima velit aspernatur alias cum laborum!
          Quaerat ipsa unde adipisci soluta quo aspernatur ipsum, inventore ad
          iste in?
        </v-card-text>
      </v-card>
    </v-slide-y-transition>
  </div>
</template>

<script setup lang="ts">
import { OrderTerm, Job } from '../types/Types'

const props = defineProps({
  jobs: {
    required: true,
    type: Array as PropType<Job[]>,
  },
  order: {
    required: true,
    type: String as PropType<OrderTerm>,
  },
})

const orderedJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
})
</script>

<style scoped></style>
