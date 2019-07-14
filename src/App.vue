<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <Form @submit="submitForm">
                <FormPanel title="About">
                    <FormPanelRow>
                        <template #label>
                            <Label required for="title">Title</Label>
                        </template>

                        <TextField
                            required
                            id="title"
                            v-model="formData.title"
                            placeholder="Make it short and clear"
                        />
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label required for="description">Description</Label>
                        </template>

                        <TextArea
                            required
                            id="description"
                            v-model="formData.description"
                            placeholder="Write about your event, be creative"
                            helper-text="Max lenght 140 characters"
                            :max-length="140"
                        />
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label for="category">Category</Label>
                        </template>

                        <Select
                            id="category"
                            v-model="formData.category_id"
                            placeholder="Select category"
                            helper-text="Describes topic and people who should be interested in this event"
                            :options="categories"
                        />
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label for="payment">Payment</Label>
                        </template>

                        <Radio
                            id="freeradio"
                            name="paid_event"
                            v-model="formData.paid_event"
                            :value-to-set="false"
                        >Free event</Radio>

                        <Radio
                            id="paidradio"
                            name="paid_event"
                            v-model="formData.paid_event"
                            :value-to-set="true"
                        >Paid event</Radio>

                        <template v-if="formData.paid_event">
                            <TextField
                                inline
                                required
                                id="eventfee"
                                v-model="formData.event_fee"
                                placeholder="Fee"
                            />
                            <span>$</span>
                        </template>
                    </FormPanelRow>
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
import FormPanelRow from '@/components/FormPanelRow.vue';
import Button from '@/components/Button.vue';
import Label from '@/components/Label.vue';
import TextField from '@/components/TextField.vue';
import TextArea from '@/components/TextArea.vue';
import Select from '@/components/Select.vue';
import Radio from '@/components/Radio.vue';

export default {
    data: () => ({
        formData: {
            title: '',
            description: '',
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
        },
        categories: [
          {
            "id": 0,
            "name": "Cycling"
          },
          {
            "id": 1,
            "name": "Hiking"
          },
          {
            "id": 2,
            "name": "Cooking"
          },
          {
            "id": 3,
            "name": "Rock climbing"
          },
          {
            "id": 4,
            "name": "Yoga"
          },
          {
            "id": 5,
            "name": "Fencing"
          },
          {
            "id": 6,
            "name": "Swimming"
          },
          {
            "id": 7,
            "name": "Badminton"
          },
          {
            "id": 8,
            "name": "Running"
          },
          {
            "id": 9,
            "name": "Dance"
          }
        ]
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
        FormPanelRow,
        TextField,
        TextArea,
        Select,
        Radio,
        Button,
        Label
    },
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
