<template>
    <div class="main__search" v-if="filterItems.length > 0">
        <div class="main__search--items">
            <SearchItem v-for="item in filterItems" :key="item" :items="item" @removeItem="removeItem" />
        </div>
        <div class="main__search--control">
            <ClearButton @clearFilter="clearFilter" />
        </div>
    </div>
</template>

<script>
import SearchItem from './SearchItem.vue';
import ClearButton from './UI/ClearButton.vue';

export default {
    components: {
        SearchItem,
        ClearButton
    },
    props: {
        filterItems: Array
    },
    methods: {
        clearFilter() {
            this.$emit("clearFilter")
        },
        removeItem(item) {
            this.$emit("removeItem", item)
        },
    }
}
</script>