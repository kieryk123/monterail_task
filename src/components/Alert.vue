<template>
    <div :class="['alert', alertClass]">
        <div class="alert__head">
            <slot name="head"></slot>
        </div>
        <div class="alert__body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false
        }
    },
    computed: {
        alertClass() {
            return this.type ? `alert--${this.type}` : '';
        }
    }
}
</script>
