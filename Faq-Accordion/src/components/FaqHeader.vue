<template>
    <div class="faq__header">
        <span class="faq__header--img">
            <img :src="icon" alt="" class="faq__header-img">
        </span>
        <h1>FAQs</h1>
    </div>
</template>

<script>
export default {
    props: {
        icon: String
    }
}
</script>