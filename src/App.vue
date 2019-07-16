<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <ValidationObserver
                ref="validationObserver"
                v-slot="{ valid, untouched, validate }"
            >
                <Form
                    v-if="!isFormSubmitted"
                    @submit="submitForm"
                >
                    <!-- ##### PANEL ABOUT ##### -->
                    <FormPanel title="About">
                        <FormPanelRow>
                            <template #label>
                                <Label required for="title">Title</Label>
                            </template>

                            <ValidationProvider
                                name="title"
                                rules="required"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextField
                                    id="title"
                                    name="title"
                                    v-model="formData.title"
                                    placeholder="Make it short and clear"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>
                        </FormPanelRow>

                        <FormPanelRow>
                            <template #label>
                                <Label required for="description">Description</Label>
                            </template>

                            <ValidationProvider
                                name="description"
                                rules="required"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextArea
                                    id="description"
                                    name="description"
                                    v-model="formData.description"
                                    placeholder="Write about your event, be creative"
                                    helper-text="Max lenght 140 characters"
                                    :max-length="140"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>
                        </FormPanelRow>

                        <FormPanelRow>
                            <template #label>
                                <Label for="category">Category</Label>
                            </template>

                            <Select
                                id="category"
                                name="category"
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

                            <ValidationProvider
                                v-if="formData.paid_event"
                                name="fee"
                                rules="required|numeric"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextField
                                    inline
                                    id="event_fee"
                                    name="event_fee"
                                    v-model="formData.event_fee"
                                    placeholder="Fee"
                                    inputmode="numeric"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>
                            <span v-if="formData.paid_event">$</span>
                        </FormPanelRow>

                        <FormPanelRow>
                            <template #label>
                                <Label for="reward">Reward</Label>
                            </template>

                            <ValidationProvider
                                name="reward"
                                rules="numeric|min_value:1|max_value:100"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextField
                                    inline
                                    id="reward"
                                    name="reward"
                                    v-model="formData.reward"
                                    placeholder="Number"
                                    inputmode="numeric"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>

                            <span>reward points for attendance</span>
                        </FormPanelRow>
                    </FormPanel>

                    <!-- ##### PANEL COORDINATOR ##### -->
                    <FormPanel title="Coordinator">
                        <FormPanelRow>
                            <template #label>
                                <Label required for="coordinator_id">Responsible</Label>
                            </template>

                            <ValidationProvider
                                name="coordinator"
                                rules="required"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <Select
                                    required
                                    id="coordinator_id"
                                    name="coordinator_id"
                                    v-model="formData.coordinator.id"
                                    :options="employes"
                                    :option-key="['name', 'lastname']"
                                    option-value="id"
                                    :groups="['Me', 'Others']"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>
                        </FormPanelRow>

                        <FormPanelRow>
                            <template #label>
                                <Label for="coordinator_email">Email</Label>
                            </template>

                            <ValidationProvider
                                name="coordinator email"
                                rules="email"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextField
                                    id="coordinator_email"
                                    name="coordinator_email"
                                    v-model="formData.coordinator.email"
                                    placeholder="Email"
                                    inputmode="email"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>
                        </FormPanelRow>
                    </FormPanel>

                    <!-- ##### PANEL WHEN ##### -->
                    <FormPanel title="When">
                        <FormPanelRow>
                            <template #label>
                                <Label required for="date">Starts on</Label>
                            </template>

                            <ValidationProvider
                                name="date"
                                rules="required"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <DateField
                                    id="date"
                                    name="date"
                                    :min="tomorrowDate"
                                    v-model="formData.date"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>

                            <span>at</span>

                            <ValidationProvider
                                name="time"
                                rules="required"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TimeField
                                    id="time"
                                    name="time"
                                    v-model="formData.time"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>

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

                            <ValidationProvider
                                name="duration"
                                rules="numeric|min_value:1|max_value:12"
                                v-slot="{ errors, valid }"
                                slim
                            >
                                <TextField
                                    inline
                                    id="duration"
                                    name="duration"
                                    v-model="formData.duration"
                                    placeholder="Number"
                                    inputmode="numeric"
                                    :error-messages="errors"
                                    :valid="valid"
                                />
                            </ValidationProvider>

                            <span>hour</span>
                        </FormPanelRow>
                    </FormPanel>

                    <Button submit>publish event</Button>
                </Form>
            </ValidationObserver>

            <Alert
                v-if="isFormSubmitted"
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
import moment from 'moment';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

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
        async submitForm() {
            const isFormValid = await this.$refs.validationObserver.validate();

            if (!isFormValid) {
                return;
            }

            // this.isFormSubmitted = true;
            console.log('form submited');
            const finalFormData = this.composeFinalFormDataObject(this.formData);
            console.log(JSON.stringify(finalFormData, null, 4));
        },
        getDatetime(date, time, timeFormat) {
            time = moment(`${time}:00 ${timeFormat}`, 'hh:mm A').format('HH:mm');
            return moment(`${date} ${time}`).format('YYYY-MM-DDTHH:mm');
        },
        getSecondsFromHours(hours) {
            return parseFloat(hours) * 3600;
        },
        composeFinalFormDataObject(data) {
            return {
                title: data.title.toString(),
                description: data.description.toString(),
                category_id: parseFloat(data.category_id),
                paid_event: data.paid_event,
                event_fee: parseFloat(data.event_fee),
                reward: parseFloat(data.reward),
                date: this.getDatetime(data.date, data.time, data.time_format), // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
                duration: this.getSecondsFromHours(data.duration), // in seconds
                coordinator: {
                    email: data.coordinator.email.toString(),
                    id: data.coordinator.id.toString()
                }
            }
        }
    },
    computed: {
        tomorrowDate() {
            return moment().add(1, 'days').format('YYYY-MM-DD');
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
        Alert,
        ValidationProvider,
        ValidationObserver
    },
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
