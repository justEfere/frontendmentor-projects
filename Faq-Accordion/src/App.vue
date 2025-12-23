<template>
  <div>
    <faq-top :mobileIcon="bgIconMobile" :desktopIcon="bgIconDesktop" />

    <div class="faq">
      <FaqHeader :icon="starIcon" />

      <div class="faq__content">
        <FaqItem v-for="(faq, index) in faqs" :faq="faq" :key="faq.title" :id="index" :activeFa="activeFaq"
          @clicked="processClick" @nullActive="activeFaq = null" />
      </div>
    </div>
  </div>

</template>

<script>
import FaqHeader from './components/FaqHeader.vue';
import FaqItem from './components/FaqItem.vue';
import FaqTop from './components/FaqTop.vue';

export default {
  components: {
    FaqHeader,
    FaqItem,
    FaqTop
  },

  data() {
    return {
      bgIconMobile: "images/background-pattern-mobile.svg",
      bgIconDesktop: "images/background-pattern-desktop.svg",
      starIcon: "images/icon-star.svg",
      activeFaq: 0,

      faqs: [
        {
          title: "What is Frontend Mentor, and how will it help me?",
          content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
          title: "Is Frontend Mentor free?",
          content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
          title: "  Can I use Frontend Mentor projects in my portfolio?",
          content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
          title: "  How can I get help if I'm stuck on a Frontend Mentor challenge?",
          content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        },

      ]
    }
  },

  methods: {
    processClick(index) {
      this.activeFaq = index
    }
  }
}
</script>

<style lang="scss">
// colors
$White: hsl(0, 100%, 100%);
$Purple100: hsl(275, 100%, 97%);
$Purple600: hsl(292, 16%, 49%);
$Purple950: hsl(292, 42%, 14%);

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-weight: 400;
  font-size: 62.5%;
  font-family: "Work Sans", sans-serif;
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
  height: 100%;
  background-size: cover;
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
  height: 100dvh;
  width: 100%;
  background-color: $Purple100;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
}

.background_img {
  background-color: $Purple950;
  position: absolute;
  top: 0;
  left: 0;
  // height: 25dvh;
  width: 100%;
  z-index: -1;
}

.faq {
  background-color: $White;
  border-radius: 10px;
  padding: 3rem;
  max-width: 50rem;
  margin: auto 1rem;

  &__header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;

    &--img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
    }
  }

  &__content {
    &--item {
      margin: 3.5rem auto;

      &:last-child {
        margin-bottom: 0;
      }


      &:not(:last-child) {
        border-bottom: 1px solid $Purple100;
      }

      &-title {
        font-weight: 600;
      }

      &-header {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 1.5rem;
        margin-bottom: 1rem;
        color: $Purple950;

        &:hover {
          color: rgb(209, 23, 209);
        }
      }
    }

    &--content {
      padding-bottom: 2rem;
      color: $Purple600;
    }
  }

  &__button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
  }
}
</style>
