<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <Form @submit="submitForm">
                <FormPanel title="About">
                    <!-- <input v-model="formData.title" type="text"> -->
                    <TextField
                        required
                        v-model="formData.title"
                        label="title"
                        placeholder="Make it short and clear"
                    />
                    <TextArea
                        required
                        v-model="formData.description"
                        label="description"
                        placeholder="Write about your event, be creative"
                        helper-text="Max lenght 140 characters"
                        :max-length="140"
                    />
                </FormPanel>

                <Button submit>publish event</Button>
            </Form>
        </main>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Form from '@/components/Form.vue';
import FormPanel from '@/components/FormPanel.vue';
import Button from '@/components/Button.vue';
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';

export default {
    data: () => ({
        formData: {
            one: '',
            two: '',
            three: '',
            title: '',
            description: 'lol',
            category_id: null,
            paid_event: false,
            event_fee: null,
            reward: null,
            date: '', // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
            duration: null, // in seconds
            coordinator: {
                email: '',
                id: ''
            }
        }
    }),
    methods: {
        submitForm() {
            console.log('form submited');
            console.log({...this.formData});
        }
    },
    components: {
        AppHeader,
        Form,
        FormPanel,
        TextField,
        TextArea,
        Button
    },
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
