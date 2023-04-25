<template>
    <v-app-bar density="compact">
        <slot name="left"/>    
        <v-spacer/>
        <RouterLinkBtn :icon="'mdi-home'" :text="'home'" :to="'/home'"/>
        <SearchBar />
        <v-spacer/>
        <slot name="right"/>           
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterLinkBtn from './molecules/atoms/RouterLinkBtn.vue';
import SearchBar from './molecules/SearchBar.vue';

export default defineComponent({
    components: {
        RouterLinkBtn,
        SearchBar,
    },

    setup () {
        

        return {}
    }
})
</script>

<style scoped>
</style>