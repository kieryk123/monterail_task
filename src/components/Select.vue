<template>
    <div :class="['form-field', 'form-field--select', validationClass]">
        <select
            required
            class="form-field__input"
            :id="id"
            :name="name"
            @change="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
            <template v-if="groups">
                <optgroup
                    v-for="(group, index) in groups"
                    :key="index"
                    :label="group"
                >
                    <option
                        v-if="group === 'Me'"
                        :key="options[$store.getters.loggedUserId].id"
                        :value="options[$store.getters.loggedUserId].id"
                        :selected="options[$store.getters.loggedUserId].id === value ? true : false"
                    >{{ group }} - {{ makeOptionString(options[$store.getters.loggedUserId]) }}</option>
                    <option
                        v-else
                        v-for="option in filteredOptions"
                        :key="option.id"
                        :value="option.id"
                        :selected="option.id === value ? true : false"
                    >{{ makeOptionString(option) }}</option>
                </optgroup>
            </template>

            <template v-else>
                <option disabled selected value="">{{ placeholder }}</option>
                <option
                    v-for="option in filteredOptions"
                    :key="option.id"
                    :value="option.id"
                    :selected="option.id === value ? true : false"
                >{{ makeOptionString(option) }}</option>
            </template>
        </select>
        <p v-if="helperText" class="form-field__helper-text">{{ helperText }}</p>
        <span v-if="isErrorMessageVisible" class="form-field__error-label">{{ errorMessages[0] }}</span>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
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
        },
        optionKey: {
            type: [Array, String],
            required: true
        },
        optionValue: {
            type: String,
            required: true
        },
        groups: {
            type: [Array, String],
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
    computed: {
        filteredOptions() {
            if (this.$store.getters.loggedUserId) {
                return this.options.filter(el => el.id != this.$store.getters.loggedUserId);
            } else {
                return this.options;
            }
        },
        validationClass() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? '' : 'form-field--error';
            }
        },
        isErrorMessageVisible() {
            if (this.errorMessages) {
                return this.valid || this.errorMessages.length === 0 ? false : true;
            }
        }
    },
    methods: {
        makeOptionString(option) {
            if (typeof this.optionKey === 'object') {
                return this.optionKey.map(el => option[el]).join(' ');
            } else {
                return option[this.optionKey];
            }
        }
    }
}
</script>
