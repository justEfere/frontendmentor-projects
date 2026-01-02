<template>
    <div class="job__listings--content-header">
        <p class="job__listings--content-title">{{ jobCompany }}</p>
        <span class="status new" v-if="statusNew">new!</span>
        <span class="status featured" v-if="statusFeatured">featured</span>
    </div>

</template>

<script>
export default {
    props: {
        statusNew: Boolean,
        statusFeatured: Boolean,
        jobCompany: String
    }
}
</script>