<template>
    <div class="main__header">
        <picture class="main__header-pic">
            <source media="(max-width:500px )" :srcset="mobileImg">
            <img class="main__header-img" :src="desktopImg" alt="">
        </picture>
    </div>
</template>

<script>
export default {
    name: "MainHeader",
    data() {
        return {
            mobileImg: "images/bg-header-mobile.svg",
            desktopImg: "images/bg-header-desktop.svg"
        }
    }
}
</script>