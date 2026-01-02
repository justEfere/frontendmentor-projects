<template>
    <button class="link_btn" @click="clearFilter">
        clear
    </button>
</template>


<script>
export default {
    methods: {
        clearFilter() {
            this.$emit("clearFilter")
        }
    }
}
</script>