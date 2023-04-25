<template>
        <v-list density="compact" nav>
            <RouterLinkListItem :icon="'mdi-home'" :text="'Home'" :to="'/'"/>
            <RouterLinkListItem :icon="'mdi-shopping'" :text="'Products'" :to="'/products'"/>
            <RouterLinkListItem :icon="'mdi-information-variant'" :text="'About'" :to="'/about'"/>
        </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterLinkListItem from '../molecules/atoms/RouterLinkListItem.vue';
import RouterLinkBtn from '../molecules/atoms/RouterLinkBtn.vue';

export default defineComponent({
    components: {
        RouterLinkListItem,
        RouterLinkBtn,
    },
    
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>