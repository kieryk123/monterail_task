<template>
    <div :class="['form-field', 'form-field--textarea', validationClass]">
        <textarea
            class="form-field__input"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            v-model="localValue"
            @blur="$emit('blur')"
            :maxlength="maxLength"
        ></textarea>
        <p v-if="helperText" class="form-field__helper-text">
            <span>{{ helperText }}</span>
            <span>{{ length }}/{{ maxLength }}</span>
        </p>
        <transition name="fade-inline">
            <span v-if="isErrorMessageVisible" class="form-field__error-label">{{ errorMessages[0] }}</span>
        </transition>
    </div>
</template>

<script>
import { formFieldMixin } from '@/mixins';

export default {
    mixins: [formFieldMixin],
    created() {
            this.localValue = this.value;
    },
    props: {
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
        maxLength: {
            type: Number,
            required: false
        }
    },
    data: () => ({
        localValue: ''
    }),
    watch: {
        localValue() {
            this.$emit('input', this.localValue);
        }
    },
    computed: {
        length() {
            return this.localValue.length;
        }
    }
}
</script>
