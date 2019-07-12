<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <Form @submit="submitForm">
                <FormPanel title="About">
                    <input v-model="formData.one" type="text">
                </FormPanel>

                <FormPanel title="Coordinator">
                    <input v-model="formData.two" type="text">
                </FormPanel>

                <FormPanel title="When">
                    <input v-model="formData.three" type="text">
                </FormPanel>

                <button type="submit" name="button">submit</button>
            </Form>
        </main>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Form from '@/components/Form.vue';
import FormPanel from '@/components/FormPanel.vue';

export default {
    data: () => ({
        formData: {
            one: '',
            two: '',
            three: ''
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
        FormPanel
    },
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
