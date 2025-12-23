<template>
    <div class="faq__content--item">
        <div class="faq__content--item-header">
            <p class="faq__content--item-title">
                {{ faq.title }}
            </p>
            <button class="faq__button" @click="processClick">
                <img :src="activeFa == id ? faqMinus : faqPlus" alt="" class="faq_button">
            </button>
        </div>
        <div class="faq__content--content">
            <p class="faq__content-text" v-if="activeFa == id">
                {{ faq.content }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        faq: Object,
        id: Number,
        activeFa: Number
    },


    data() {
        return {
            faqPlus: "images/icon-plus.svg",
            faqMinus: "images/icon-minus.svg",
        }
    },

    methods: {
        processClick() {
            if (this.activeFa == this.id) {
                this.$emit('nullActive')
            } else {
                this.$emit('clicked', this.id)
            }
        }
    }
}
</script>