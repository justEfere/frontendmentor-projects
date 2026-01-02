<template>
    <div class="job__listings--brand">
        <img :src="brandImage" alt="" class="job__listings--brand-img">
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        brandImage: String
    }
}
</script>