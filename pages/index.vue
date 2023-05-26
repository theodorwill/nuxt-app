<template>
  <v-row>
  <v-carousel height="400" fluid cycle hide-delimiters>
    <CarouselPromo v-for="product in fProducts" :product="product">
    </CarouselPromo>
  </v-carousel>
  <div class="mx-auto color-primary spacing-header"><h1>Products</h1></div>
  <ProductList :url="url"></ProductList>
</v-row>
</template>

<script setup lang="ts">
import CarouselPromo from '~/components/store/molecules/CarouselPromo.vue'
import JobList from '../components/JobList.vue'
import { OrderTerm, Job } from '../types/Types'
import { useFeaturedStore } from '~/stores/featuredStore'
import ProductList from '../components/ProductList.vue'

const url = 'https://fakestoreapi.com/products'

const featuredStore = <any>useFeaturedStore()

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

<style lang="scss">
.spacing-header {
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  background-color: rgb(var(--v-theme-primary));
  height: 100px;
  width: 100%;

  h1 {
    text-align: center;
    color:white
  }
}
</style>
