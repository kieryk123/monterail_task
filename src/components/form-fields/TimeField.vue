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
        required: {
            type: Boolean,
            required: false
        },
        helperText: {
            type: String,
            required: false
        }
    }
}
</script>
