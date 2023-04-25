<template> 
        <v-btn :to="to">
            <v-icon>
                {{ icon }}
            </v-icon>
            {{ text }}
        </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: {
            required: false,
            type: String
        },
        text: {
            required: false,
            type: String
        },
        to: {
            required: true,
            type: String
        }
    },

    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>