<template>
    <div class="form-field form-field--select">
        <div class="form-field__label-col">
            <label class="form-field__label">{{ label }}<span v-if="required" class="form-field__label-required-sign">*</span></label>
        </div>
        <div class="form-field__input-col">
            <select
                required
                class="form-field__input"
                @change="$emit('input', $event.target.value)"
                @blur="$emit('blur')"
            >
                <option disabled selected value="">{{ placeholder }}</option>
                <option
                    v-for="option in options"
                    :key="option.id"
                    :value="option.id"
                >{{ option.name }}</option>
            </select>
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
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
