<template>
  <div class="form__container">

    <SuccessMessage :success="success" />

    <FormHeader />

    <div class="form">
      <form @submit.prevent="processForm">

        <div class="form__group">

          <div class="form__group--input">
            <label for="first_name">First Name</label>
            <div class="form__input" :class="{ error: error.firstName }">
              <input type="text" v-model.trim="form.firstName" id="first_name" class="form__input-input">
            </div>
            <div class="form__error" v-show="error.firstName">
              <p class="error_msg">
                This field is required
              </p>
            </div>
          </div>

          <div class="form__group--input">
            <label for="last_name">Last Name</label>
            <div class="form__input" :class="{ error: error.lastName }">
              <input type="text" v-model.trim="form.lastName" id="last_name" class="form__input-input">
            </div>
            <div class="form__error" v-show="error.lastName">
              <p class="error_msg">
                This field is required
              </p>
            </div>
          </div>

        </div>


        <div class="form__group--input">
          <label for="email">Email Address</label>
          <div class="form__input" :class="{ error: error.emailAddress }">
            <input type="email" v-model.trim="form.emailAddress" id="email" placeholder="email@example.com"
              class="form__input-input">
          </div>
          <div class="form__error" v-show="error.emailAddress">
            <p class="error_msg">Please enter a valid email address</p>
          </div>
        </div>

        <div class="query__group">
          <div class="query__group--inputs">
            <div class="form__input radio">
              <input type="radio" id="general" value="general" v-model="form.query" name="query"
                class="form__input-input">
              <label for="general">general enquiry</label>
            </div>
            <div class="form__input radio">
              <input type="radio" id="support" value="support" name="query" v-model="form.query"
                class="form__input-input">
              <label for="support">support request</label>
            </div>
          </div>
          <div class="form__error" v-show="error.query">
            <p class="error_msg">Please select a query type</p>
          </div>
        </div>

        <div class="form__group--input mb-2">
          <label for="message">Message</label>
          <div class="form__input" :class="{ error: error.message }">
            <textarea v-model.trim="form.message" id="message"></textarea>
          </div>
          <div class="form__error" v-show="error.message">
            <p class="error_msg">This field is required</p>
          </div>
        </div>

        <div class="form__group--input">
          <div class="form__input no-border checkbox">
            <input type="checkbox" id="consent" v-model="form.agree" :value="form.agree" :checked="form.agree">
            <label for="consent" class="consent_label">I consent to being contacted by the team *</label>
          </div>
          <div class="form__error" v-show="error.agree">
            <p class="error_msg">To submit this form, please consent to being contacted</p>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import FormHeader from './components/FormHeader.vue';
import SuccessMessage from './components/SuccessMessage.vue';

export default {
  name: 'App',
  components: {
    SuccessMessage,
    FormHeader,
  },
  data() {
    return {
      success: false,
      form: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        query: '',
        message: '',
        agree: false
      },
      error: {}
    }
  },

  methods: {
    updateSuccess() {
      this.success = !this.success
    },

    processForm() {
      // reset error state
      this.error = {};

      Object.keys(this.form).forEach(key => {
        if (!this.form[key]) {
          this.error[key] = true
        }
      })

      // stop form submission if error
      if (Object.keys(this.error).length) {
        return;
      }

      this.resetForm();
      this.success = true;
      this.closeSuccess();
    },

    resetForm() {
      this.form.firstName = this.form.lastName = this.form.emailAddress = this.form.message = this.form.query = '';
      this.form.agree = false;
    },

    closeSuccess() {
      setTimeout(() => {
        this.success = false
      }, 2000);
    }
  }
}
</script>

<style lang="scss">
// colors
$green200: hsl(148, 38%, 91%);
$green600: hsl(169, 82%, 27%);
$red: hsl(0, 66%, 54%);
$white: hsl(0, 0%, 100%);
$grey500: hsl(186, 15%, 59%);
$grey900: hsl(187, 24%, 22%);

$borderRadius: 6px;

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html {
  font-weight: 300;
  font-size: 62.5%;
  font-family: "Karla", sans-serif;
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

input:not([type="radio"]) {
  width: 100%;
}

input[type='checkbox'] {
  width: unset;
}

textarea {
  resize: none;
  width: 100%;
}

input[type="radio"] {
  accent-color: $green600;
}

input {
  border: none;
  outline: none;
  // width: 100%;

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
  background-color: $green200;
  display: grid;
  place-items: center;
  height: 100dvh;
  width: 100%;
  font-size: 1.6rem;
}

.form {
  &__container {
    background-color: $white;
    border-radius: $borderRadius;
    padding: 2.5rem;
    margin: 2rem auto;
    width: 100%;
    max-width: 60rem;


    @media (max-width:480px) {
      padding: 2rem 1.5rem;
    }

    &--header {
      margin-bottom: 2rem;
    }

    &-title {
      text-transform: capitalize;
      font-weight: 500;
    }
  }

  &__group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    grid-template-rows: auto;
    margin-bottom: 2rem;

    @media (max-width:480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    &--input {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      width: 100%;
    }

  }

  &__input {
    padding: .5rem 1.5rem;
    border: 1.5px solid $grey500;
    border-radius: $borderRadius;

    &.no-border {
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
    }

    &:focus-within,
    &:hover {
      border-color: $green600;
    }


    &.error {
      border-color: $red;
    }

    &.radio {
      display: flex;
      align-items: center;
      gap: 1rem;

      &:focus-within,
      &:hover {
        background-color: $green200;
      }
    }

    & input,
    & textarea {
      border: none;
      outline: none;
    }
  }

  .error_msg {
    color: $red;
    font-weight: 300;
    font-size: 1.2rem;
  }
}

.query__group {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  &--inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);


    grid-template-rows: auto;
    gap: 2rem;

    @media (max-width:480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
}

.consent_label {
  margin-left: 1rem;
  text-transform: unset;
}

.mb-2 {
  margin-bottom: 2rem !important;
}

button {
  padding: 1rem;
  width: 100%;
  background-color: $green600;
  margin-top: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: $white;
  border-radius: $borderRadius;

  &:hover {
    background-color: $grey900;
  }
}

.success {
  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: $grey900;
  border-radius: $borderRadius;
  padding: 2rem;
  min-width: 30rem;
  opacity: 0;
  transition: all .3s;

  &.active {
    opacity: 1;
    top: 3rem;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    color: $white;
    font-weight: 600;
    text-transform: capitalize;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &_text {
    color: $green200;
  }
}
</style>
