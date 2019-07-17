<template functional>
    <button
        :class="['btn', `${props.disabled ? 'btn--disabled' : ''}`]"
        :type="props.submit ? 'submit' : 'button'"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        submit: {
            type: Boolean,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        }
    }
}
</script>
