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
        <transition name="fade-inline">
            <span v-if="isErrorMessageVisible" class="form-field__error-label">{{ errorMessages[0] }}</span>
        </transition>
    </div>
</template>

<script>
import { formFieldMixin } from '@/mixins.js';

export default {
    mixins: [formFieldMixin],
    props: {
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
        inputmode: {
            type: String,
            required: false
        }
    },
    computed: {
        inlineClass() {
            return this.inline ? 'form-field--inline' : '';
        }
    }
}
</script>
