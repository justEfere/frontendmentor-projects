<template>
    <div class="overview__card">
        <div class="overview__card--top">
            <p class="overview__card--top-text">
                {{ title }}
            </p>
            <span class="overview__card--top--icon">
                <img :src="socialIcon" alt="" class="overview__card--img">
            </span>
        </div>
        <div class="overview__card--bottom">
            <p class="overview__card--bottom-text">{{ count }}</p>
            <div class="overview__card--bottom--change" :class="changeType">
                <span class="overview__card--change-icon">
                    <img :src="changeType == 'up' ? upChangeIcon : downChangeIcon" alt="" class="change_icon">
                </span>
                <p class="overview__card--change-percent">
                    {{ percentage }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        count: String,
        percentage: String,
        changeType: String,
        socialIcon: String
    },

    data() {
        return {
            upChangeIcon: "images/icon-up.svg",
            downChangeIcon: "images/icon-down.svg",
        }
    }
}
</script>