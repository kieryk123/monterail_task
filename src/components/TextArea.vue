<template>
    <div class="form-field form-field--textarea">
        <div class="form-field__label-col">
            <label class="form-field__label">{{ label }}<span v-if="required" class="form-field__label-required-sign">*</span></label>
        </div>
        <div class="form-field__input-col">
            <textarea
                class="form-field__input"
                type="text"
                :placeholder="placeholder"
                v-model="value"
                @blur="$emit('blur')"
                :maxlength="maxLength"
            ></textarea>
            <p v-if="helperText" class="form-field__helper-text">
                <span>{{ helperText }}</span>
                <span>{{ length }}/{{ maxLength }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
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
        }
    },
    data: () => ({
        value: ''
    }),
    watch: {
        value() {
            this.$emit('input', this.value);
        }
    },
    computed: {
        length() {
            return this.value.length;
        }
    }
}
</script>
