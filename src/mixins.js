export const formFieldMixin = {
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
};
