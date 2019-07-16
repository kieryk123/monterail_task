<template functional>
    <label class="form-label" :for="props.for">
        <slot></slot>
        <transition name="fade-inline">
            <span v-if="props.required" class="form-label__required-sign">*</span>
        </transition>
    </label>
</template>

<script>
export default {
    props: {
        required: {
            type: Boolean,
            required: false
        },
        for: {
            type: String,
            required: false
        }
    }
}
</script>
