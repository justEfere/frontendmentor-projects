<template>
  <div class="main">
    <div class="main__header">
      <div class="main__header--header">
        <p class="main__header--header-title">
          social media dashboard
        </p>
        <p class="main__header--header-text">
          total followers {{ totalFollowers }}
        </p>
      </div>
      <div class="main__header--toggle">
        <div class="form__input">
          <label for="toggleTheme">{{ darkTheme ? 'Dark' : 'Light' }} Mode</label>
          <div class="form__input--input">
            <input type="checkbox" :value="darkTheme" id="toggleTheme" @change="toggleTheme" :checked="darkTheme">
            <label for="toggleTheme" class="spanLabel"></label>
          </div>
        </div>
      </div>
    </div>

    <div class="main__followers">

      <FollowerCard v-for="follower in followers" :key="follower.username" :change-type="follower.changeType"
        :follower-count="follower.followers" :social-media-type="follower.socialMedia" :user-name="follower.username"
        :today-count="follower.today" :social-media-icon="follower.socialIcon" :type="follower.type" />

    </div>

    <div class="main__overview" v-if="true">
      <div class="main__overview--header">
        <p class="main__overview-title">
          overview - today
        </p>
      </div>

      <div class="main__overview--contents">
        <OverviewCard v-for="overview in overviews" :key="overview.overviewTitle" :changeType="overview.changeType"
          :count="overview.count" :percentage="overview.percent" :socialIcon="overview.socialIcon"
          :title="overview.overviewTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import FollowerCard from './components/FollowerCard.vue';
import OverviewCard from './components/OverviewCard.vue';
export default {
  components: {
    FollowerCard,
    OverviewCard
  },

  data() {
    return {
      darkTheme: {
        type: Boolean,
        default: true
      },

      totalFollowers: "23,004",


      followers: [
        {
          username: "@nathanf",
          followers: 1987,
          socialMedia: "facebook",
          type: "followers",
          today: 12,
          changeType: "up",
          socialIcon: "images/icon-facebook.svg"
        },

        {
          username: "@nathanf",
          followers: 1044,
          socialMedia: "twitter",
          type: "Followers",
          today: 99,
          changeType: "up",
          socialIcon: "images/icon-twitter.svg"
        },

        {
          username: "@realnathanf",
          followers: "11k",
          socialMedia: "instagram",
          type: "Followers",
          today: 1099,
          changeType: "up",
          socialIcon: "images/icon-instagram.svg"
        },

        {
          username: "Nathan F.",
          followers: 8239,
          socialMedia: "youtube",
          type: "Subscribers",
          today: 144,
          changeType: "down",
          socialIcon: "images/icon-youtube.svg"
        }

      ],

      overviews: [

        {
          overviewTitle: "Page Views",
          count: "87",
          percent: "3%",
          changeType: "up",
          socialIcon: "images/icon-facebook.svg"
        },

        {
          overviewTitle: "Likes",
          count: "52",
          percent: "2%",
          changeType: "down",
          socialIcon: "images/icon-facebook.svg"
        },

        {
          overviewTitle: "Likes",
          count: "5462",
          percent: "2257%",
          changeType: "up",
          socialIcon: "images/icon-instagram.svg"
        },

        {
          overviewTitle: "Profile Views",
          count: "52k",
          percent: "1375%",
          changeType: "up",
          socialIcon: "images/icon-instagram.svg"
        },

        {
          overviewTitle: "Retweets",
          count: "117",
          percent: "303%",
          changeType: "up",
          socialIcon: "images/icon-twitter.svg"
        },

        {
          overviewTitle: "Likes",
          count: "507",
          percent: "553%",
          changeType: "up",
          socialIcon: "images/icon-twitter.svg"
        },

        {
          overviewTitle: "Likes",
          count: "107",
          percent: "19%",
          changeType: "down",
          socialIcon: "images/icon-youtube.svg"
        },

        {
          overviewTitle: "Total Views",
          count: "1407",
          percent: "12%",
          changeType: "down",
          socialIcon: "images/icon-youtube.svg"
        },

      ]
    }
  },

  methods: {
    toggleTheme() {
      const root = document.documentElement;
      if (this.darkTheme) {
        root.setAttribute("theme", "light")
      } else {
        root.removeAttribute('theme')
      }
      this.darkTheme = !this.darkTheme
    }
  }
}
</script>

<style lang="scss">
// ### Primary

$Green500: hsl(163, 72%, 41%);
$Red500: hsl(356, 69%, 56%);

// (Facebook)
$Blue600: hsl(208, 92%, 53%);
// (Twitter)
$Blue500: hsl(203, 89%, 53%);
// (Instagram)
$Lineargradient: hsl(37, 97%, 70%) to hsl(5, 77%, 71%) to hsl(329, 70%, 58%);
// (YouTube)
$Red700 : hsl(348, 97%, 39%);

// #### Dark Theme
// (Toggle)
$Lineargradient: hsl(210, 79%, 56%) to hsl(146, 68%, 55%);

// #### Light Theme
// (Toggle)
$Gray400: hsl(230, 22%, 74%);

// ### Neutral

// #### Dark Theme
// (BG)
$Gray950: hsl(230, 17%, 14%);
// (Top BG Pattern)
$Gray900: hsl(232, 19%, 15%);
// (Card BG)
$Navy950: hsl(228, 28%, 20%);
// (Text)
$Gray400: hsl(230, 22%, 74%);
// (Text)
$White: hsl(0, 100%, 100%);

// #### Light Theme
// (BG)
$White: hsl(0, 100%, 100%);
// (Top BG Pattern)
$Blue50: hsl(225, 100%, 98%);
// (Card BG)
$Navy50: hsl(227, 47%, 96%);
// (Text)
$Gray650: hsl(228, 12%, 44%);
// (Text)
$Gray950: hsl(230, 17%, 14%);

:root {
  --bg-color: hsl(230, 17%, 14%);
  --top-bg-pattern: hsl(232, 19%, 15%);
  --card-bg: hsl(228, 28%, 20%);
  --text-sm: hsl(230, 22%, 74%);
  --text-bg: hsl(0, 100%, 100%);

  --toggle-bg: linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%));
}

[theme="light"] {
  --bg-color: hsl(0, 100%, 100%);
  --top-bg-pattern: hsl(225, 100%, 98%);
  --card-bg: hsl(227, 47%, 96%);
  --text-sm: hsl(228, 12%, 44%);
  --text-bg: hsl(230, 17%, 14%);

  --toggle-bg: hsl(230, 22%, 74%);
}


*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

  scrollbar-width: thin;
  scrollbar-color: var(--text-bg) var(--bg-color);
}


html {
  font-weight: 300;
  font-size: 62.5%;
  font-family: "Inter", sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
  border: none;
  outline: none;
  color: inherit;
  cursor: pointer;
}

img {
  width: 100%;
}

textarea {
  resize: none;
  width: 100%;
}

input {
  border: none;
  outline: none;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
}

label {
  text-transform: capitalize;
}


body {
  font-size: 1.4rem;
  background-color: var(--bg-color);
  color: var(--text-sm);
  display: grid;
  place-items: center;
  // overflow: hidden;
}

#app {
  overflow-y: auto;
  min-width: 30rem;
  width: 100%;
  max-width: 140rem;
  margin: 4rem auto;
}

.main {
  padding: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width:600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    &--header {
      &-title {
        font-size: 3rem;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--text-bg);
      }

      &-text {
        text-transform: capitalize;
        font-weight: 500;
      }

      @media (max-width:600px) {
        width: 100%;
        border-bottom: .5px solid $Gray400;
        padding-bottom: 2.5rem;
      }
    }

    &--toggle {
      @media (max-width:600px) {
        width: 100%;
      }
    }

  }

  &__followers {
    display: grid;
    justify-content: stretch;
    grid-template-columns: repeat(auto-fit, minmax(28rem, auto));
    grid-template-rows: auto;
    gap: 2rem;
    width: 100%;
    max-height: 60rem;
    overflow-y: auto;
    overflow-x: hidden;
    // padding-bottom: 5rem;
    cursor: pointer;
  }
}

.form__input {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;

  @media (max-width:600px) {
    justify-content: space-between;
    gap: unset;
  }

  &--input {
    position: relative;
    width: 4rem;
    height: 2rem;
    border-radius: 50px;
    background: var(--toggle-bg);
  }
}

.spanLabel {
  position: absolute;
  height: 80%;
  width: 55%;
  background-color: $White;
  border-radius: 20px;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
  transition: all .3s;
}

#toggleTheme {
  visibility: hidden;
  opacity: 0;
}

#toggleTheme:checked+label {
  left: 35%;
  top: 50%;
  transform: translateY(-50%);
  // background-color: red;
}


.follower__card {
  min-width: 30rem;
  padding: 3rem 2rem;
  background-color: var(--card-bg);
  position: relative;
  border-radius: 5px;
  text-align: center;
  border: 1px solid var(--card-bg);

  &:hover {
    background-color: var(--top-bg-pattern);
  }

  &::before {
    content: "";
    position: absolute;
    top: -.2rem;
    left: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 5px;
    background-color: $White;
  }

  &.facebook::before {
    background-color: $Blue600;
  }

  &.twitter::before {
    background-color: $Blue500;
  }

  &.instagram::before {
    background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%));
  }

  &.youtube::before {
    background-color: $Red700;
  }



  &--social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;

    &-media {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-username {
      font-weight: 600;
    }
  }

  &--stats {
    margin-bottom: 2.5rem;

    &-value {
      font-size: 8rem;
      font-weight: 600;
      color: var(--text-bg);
      margin-bottom: 1rem;
    }

    &-text {
      letter-spacing: 5px;
      color: var(--text-sm);
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1.8rem;
    }
  }

  &--footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &.up {
      color: $Green500;
    }

    &.down {
      color: $Red500;
    }
  }

  &--added {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.6rem;
  }
}

.change {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
  width: 14px;
}

.main__overview {
  margin-top: 5rem;
  width: 100%;
  padding: 1rem;

  &--header {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--text-bg);
  }

  &--contents {
    display: grid;
    justify-content: stretch;
    grid-template-columns: repeat(auto-fit, minmax(28rem, auto));
    grid-template-rows: auto;
    gap: 2rem;
    width: 100%;
  }
}

.overview__card {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--card-bg);

  &:hover {
    background-color: var(--top-bg-pattern);
  }

  &--top,
  &--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &--top {
    color: var(--text-sm);
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
    }
  }

  &--bottom {
    display: flex;
    align-items: end;
    justify-content: space-between;

    &-text {
      font-size: 3rem;
      font-weight: 600;
      color: var(--text-bg);
    }

    &--change {
      &.up {
        color: $Green500;
      }

      &.down {
        color: $Red500;
      }

      display: flex;
      align-items: center;
      gap: .5rem;
      font-weight: 600;
      font-size: 1.2rem;

    }

  }

  &--change {
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 12px;
      width: 12px;
    }
  }
}
</style>
