<template>
    <div class="search__item">
        <p class="search__item-text">{{ items }}</p>
        <button class="cancel_btn" @click="removeItem(items)">
            <img :src="cancelIcon" alt="" class="icon_remove">
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cancelIcon: "images/icon-remove.svg"
        }
    },

    props: {
        items: String
    },

    methods: {
        removeItem(item) {
            this.$emit("removeItem", item)
        }
    }
}
</script>