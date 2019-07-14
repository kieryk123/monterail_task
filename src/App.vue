<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <Form
                v-if="!isFormSubmitted"
                @submit="submitForm"
            >
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
                            option-key="name"
                            option-value="id"
                        />
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label :required="formData.paid_event">Payment</Label>
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

                    <FormPanelRow>
                        <template #label>
                            <Label for="reward">Reward</Label>
                        </template>

                        <TextField
                            inline
                            required
                            id="reward"
                            v-model="formData.reward"
                            placeholder="Number"
                        />

                        <span>reward points for attendance</span>
                    </FormPanelRow>
                </FormPanel>

                <FormPanel title="Coordinator">
                    <FormPanelRow>
                        <template #label>
                            <Label required for="coordinator_id">Responsible</Label>
                        </template>

                        <Select
                            required
                            id="coordinator_id"
                            v-model="formData.coordinator.id"
                            :options="employes"
                            :option-key="['name', 'lastname']"
                            option-value="id"
                            :groups="['Me', 'Others']"
                        />
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label for="coordinator_email">Email</Label>
                        </template>

                        <TextField
                            id="coordinator_email"
                            v-model="formData.coordinator.email"
                            placeholder="Email"
                        />
                    </FormPanelRow>
                </FormPanel>

                <FormPanel title="When">
                    <FormPanelRow>
                        <template #label>
                            <Label required for="date">Starts on</Label>
                        </template>

                        <DateField
                            id="date"
                            :min="new Date().toISOString().slice(0, 10)"
                            v-model="formData.date"
                        />

                        <span>at</span>

                        <TimeField
                            id="time"
                            v-model="formData.time"
                        />

                        <Radio
                            id="time_am_format"
                            name="time_format"
                            v-model="formData.time_format"
                            value-to-set="AM"
                        >AM</Radio>

                        <Radio
                            id="time_pm_format"
                            name="time_format"
                            v-model="formData.time_format"
                            value-to-set="PM"
                        >PM</Radio>
                    </FormPanelRow>

                    <FormPanelRow>
                        <template #label>
                            <Label for="duration">Duration</Label>
                        </template>

                        <TextField
                            inline
                            id="duration"
                            v-model="formData.duration"
                            placeholder="Number"
                        />

                        <span>hour</span>
                    </FormPanelRow>
                </FormPanel>

                <Button submit>publish event</Button>
            </Form>

            <Alert
                v-else
                type="success"
            >
                <template #head>
                    <h2>Success</h2>
                </template>
                <template #body>
                    <p>Event has been created.</p>
                </template>
            </Alert>
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
import DateField from '@/components/DateField.vue';
import TimeField from '@/components/TimeField.vue';
import Alert from '@/components/Alert.vue';
import categories from '@/data/categories.json';
import employes from '@/data/employes.json';

export default {
    created() {
        if (this.$store.getters.loggedUserId) {
            this.formData.coordinator.id = this.$store.getters.loggedUserId;
        }
    },
    data: () => ({
        formData: {
            title: '',
            description: '',
            category_id: null,
            paid_event: false,
            event_fee: null,
            reward: null,
            date: '', // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
            time: '',
            time_format: 'AM', // AM or PM
            duration: null, // in seconds
            coordinator: {
                email: '',
                id: ''
            },
        },
        isFormSubmitted: false,
        categories,
        employes
    }),
    methods: {
        submitForm() {
            this.isFormSubmitted = true;
            console.log('form submited');
            console.log(JSON.stringify(this.formData, null, 4));
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
        DateField,
        TimeField,
        Button,
        Label,
        Alert
    },
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
