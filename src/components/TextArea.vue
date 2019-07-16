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
export default {
    created() {
            this.localValue = this.value;
    },
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
