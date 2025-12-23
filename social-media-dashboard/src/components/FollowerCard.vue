<template>
    <div class="follower__card" :class="socialMediaType">
        <div class="follower__card--social">
            <div class="follower__card--social-media">
                <img :src="socialMediaIcon" alt="" class="social_media_img">
            </div>
            <p class="follower__card--social-username">
                {{ userName }}
            </p>
        </div>

        <div class="follower__card--stats">
            <p class="follower__card--stats-value">
                {{ followerCount }}
            </p>
            <div class="follower__card--stats-text">
                {{ type }}
            </div>
        </div>

        <div class="follower__card--footer" :class="changeType">
            <span class="change">
                <img :src="changeType == 'up' ? upChangeIcon : downChangeIcon" alt="" class="change_icon">
            </span>
            <p class="follower__card--added">
                {{ todayCount }} today
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        socialMediaType: String,
        socialMediaIcon: String,
        userName: String,
        followerCount: String,
        todayCount: Number,
        changeType: String,
        type: String
    },

    data() {
        return {
            upChangeIcon: "images/icon-up.svg",
            downChangeIcon: "images/icon-down.svg",
        }
    }
}
</script>