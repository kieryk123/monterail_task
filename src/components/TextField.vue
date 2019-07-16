<template>
    <div :class="['form-field', 'form-field--textfield', inlineClass, validationClass]">
        <input
            class="form-field__input"
            :id="id"
            :name="name"
            type="text"
            :value="value"
            :placeholder="placeholder"
            :inputmode="inputmode"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
        <p v-if="helperText" class="form-field__helper-text">{{ helperText }}</p>
        <span v-if="isErrorMessageVisible" class="form-field__error-label">{{ errorMessages[0] }}</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
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
        },
        errorMessages: {
            type: Array,
            required: false
        },
        valid: {
            type: Boolean,
            required: false
        },
        inputmode: {
            type: String,
            required: false
        }
    },
    computed: {
        inlineClass() {
            return this.inline ? 'form-field--inline' : '';
        },
        validationClass() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? '' : 'form-field--error';
            } else {
                return null;
            }
        },
        isErrorMessageVisible() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? false : true;
            } else {
                return null;
            }
        }
    }
}
</script>
