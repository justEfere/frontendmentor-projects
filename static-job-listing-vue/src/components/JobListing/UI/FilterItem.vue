<template>
    <div class="job__listings--item-actions">
        <button class="filter_btn" v-show="jobRole" @click="addFilter(jobRole)">
            {{ jobRole }}
        </button>
        <button class="filter_btn" v-show="jobLevel" @click="addFilter(jobLevel)">
            {{ jobLevel }}
        </button>
        <button class="filter_btn" v-for="language in jobLanguage" :key="language" @click="addFilter(language)">
            {{ language }}
        </button>
        <button class="filter_btn" v-for="tool in jobTools" :key="tool" @click="addFilter(tool)">
            {{ tool }}
        </button>
    </div>
</template>

<script>

export default {
    props: {
        jobRole: String,
        jobLevel: String,
        jobLanguage: Array,
        jobTools: Array
    },

    methods: {
        addFilter(value) {
            this.$emit("addFilter", value)
        },
    },
}
</script>