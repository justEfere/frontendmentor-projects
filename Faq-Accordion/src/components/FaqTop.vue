<template>
    <div class="background_img">
        <picture>
            <source media="(max-width: 500px)" :srcset="mobileIcon">
            <img :src="desktopIcon" alt="responsive image">
        </picture>
    </div>
</template>

<script>
export default {
    props: {
        mobileIcon: String,
        desktopIcon: String
    }
}
</script>