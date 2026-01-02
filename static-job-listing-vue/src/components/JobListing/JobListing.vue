<template>
    <div class="job__listings--item" :class="{ 'featured': job.featured }">
        <div class="job__listings--flexitems">
            <div class="job__listings--details">
                <BaseBrand :brandImage="job.logo" />

                <div class="job__listings--content">
                    <JobListingHeader :statusNew="job.new" :statusFeatured="job.featured" :jobCompany="job.company" />

                    <p class="job__listings--content-heading">
                        {{ job.position }}
                    </p>


                    <BreadCrumb :postedAt="job.postedAt" :contractType="job.contract" :jobLocation="job.location" />

                </div>
            </div>

            <FilterItem :jobRole="job.role" :jobLevel="job.level" :jobLanguage="job.languages" :jobTools="job.tools"
                @addFilter="updateFilter" />

        </div>
    </div>
</template>

<script>
import BaseBrand from './BaseBrand.vue';
import JobListingHeader from './JobListingHeader.vue';
import BreadCrumb from './UI/BreadCrumb.vue';
import FilterItem from './UI/FilterItem.vue';

export default {
    components: {
        BaseBrand,
        JobListingHeader,
        BreadCrumb,
        FilterItem
    },

    props: {
        job: Object
    },

    methods: {
        updateFilter(value) {
            this.$emit('addFilter', value)
        }
    }
}
</script>