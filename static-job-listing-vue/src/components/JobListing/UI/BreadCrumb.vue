<template>
    <div class="job__listings--breadcrumblist">
        <p class="job__listings--breadcrumblist-item" v-show="postedAt">
            {{ postedAt }}
        </p>
        <p class="job__listings--breadcrumblist-item" v-show="contractType">
            {{ contractType }}
        </p>
        <p class="job__listings--breadcrumblist-item" v-show="jobLocation">
            {{ jobLocation }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        postedAt: String,
        contractType: String,
        jobLocation: String
    }
}
</script>