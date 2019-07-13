<template>
    <div class="form-field form-field--select">
        <select
            required
            class="form-field__input"
            :id="id"
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
</template>

<script>
export default {
    props: {
        id: {
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
