<template>
    <div class="radio">
        <input
            class="radio__input"
            :id="id"
            type="radio"
            :name="name"
            :checked="value"
            @change="onChange"
            @blur="$emit('blur')"
        >
        <label
            :for="id"
            class="radio__label"
        >
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    model : {
        prop: 'checked',
        event: 'change'
    },
    props: {
        id: {
            type: String,
            required: true
        },
        value: {
            type: Boolean
        },
        name: {
            type: String,
            required: true
        },
        valueToSet: {
            required: true
        }
    },
    methods: {
        onChange() {
            this.$emit('change', this.valueToSet);
        }
    }
}
</script>
