<template>
    <div :class="['form-field', 'form-field--timefield', validationClass]">
        <input
            class="form-field__input"
            :id="id"
            :name="name"
            type="time"
            :value="value"
            min="01:00"
            max="12:00"
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
        required: {
            type: Boolean,
            required: false
        },
        helperText: {
            type: String,
            required: false
        },
        errorMessages: {
            type: Array,
            required: false
        },
        valid: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        validationClass() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? '' : 'form-field--error';
            }
        },
        isErrorMessageVisible() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? false : true;
            }
        }
    }
}
</script>
