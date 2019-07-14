<template>
    <div class="form-field form-field--datefield">
        <input
            class="form-field__input"
            :id="id"
            type="date"
            :value="value"
            :min="min"
            :max="max"
            @input="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
        <p v-if="helperText" class="form-field__helper-text">{{ helperText }}</p>
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
        required: {
            type: Boolean,
            required: false
        },
        helperText: {
            type: String,
            required: false
        },
        min: {
            type: String,
            required: false
        },
        max: {
            type: String,
            required: false
        }
    }
}
</script>
