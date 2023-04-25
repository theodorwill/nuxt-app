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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { OrderTerm, Job } from '../types/Types'
import { computed } from '@vue/reactivity'

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },

  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return { orderedJobs }
  },
})
</script>

<style scoped></style>
