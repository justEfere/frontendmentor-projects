<template>
    <div :class="['success', { 'active': success }]">
        <div class="success__header">
            <span class="success__header-icon">
                <img src="assets/images/icon-success-check.svg" alt="success icon">
            </span>
            <p class="success__header-text">message sent!</p>
        </div>
        <p class="success_text">
            Thanks for completing the form. We'll be in touch soon!
        </p>
    </div>
</template>

<script>
export default {
    props: ["success"]
}
</script>