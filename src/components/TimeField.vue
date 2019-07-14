<template>
    <div class="form-field form-field--timefield">
        <input
            class="form-field__input"
            :id="id"
            type="time"
            :value="value"
            min="01:00"
            max="12:00"
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
        }
    }
}
</script>
