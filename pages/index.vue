<template>
  
        <v-carousel height="400" fluid cycle hide-delimiters>
         
           <v-carousel-item v-for="product in fProducts" v-bind:src="product.image" cover>
             
           </v-carousel-item>
         
        </v-carousel>

     
</template>

<script setup lang="ts">
import JobList from '../components/JobList.vue'
import { OrderTerm, Job } from '../types/Types'
import { useFeaturedStore } from '~/stores/featuredStore';

const featuredStore = <any>useFeaturedStore()
featuredStore.getFeaturedProducts()

const fProducts = featuredStore.featuredProducts

const sort = ['title', 'salary', 'location']
const order = ref<OrderTerm>('title')

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
</script>

<style lang="scss"></style>
