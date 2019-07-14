<template>
    <div :class="['form-field', 'form-field--textfield', inlineClass]">
        <input
            class="form-field__input"
            :id="id"
            type="text"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
        <p v-if="helperText" class="form-field__helper-text">{{ helperText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            required: false
        },
        helperText: {
            type: String,
            required: false
        },
        inline: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        inlineClass() {
            return this.inline ? 'form-field--inline' : '';
        }
    }
}
</script>
