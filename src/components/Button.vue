<template functional>
    <button
        class="btn" 
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
        }
    }
}
</script>
