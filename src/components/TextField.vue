<template>
    <div class="form-field form-field--textfield">
        <div class="form-field__label-col">
            <label class="form-field__label">{{ label }}<span v-if="required" class="form-field__label-required-sign">*</span></label>
        </div>
        <div class="form-field__input-col">
            <input
                class="form-field__input"
                type="text"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)"
                @blur="$emit('blur')"
            >
            <p v-if="helperText" class="form-field__helper-text">{{ helperText }}</p>
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
        }
    }
}
</script>
