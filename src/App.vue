<template>
    <div id="app">
        <AppHeader headline="New event"/>
        <main class="app-container">
            <Form @submit="submitForm">

            </Form>
        </main>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Form from '@/components/Form.vue';

export default {
    data: () => ({

    }),
    components: {
        AppHeader,
        Form
    },
    methods: {

    }
}
</script>

<style lang="scss">
    @import "styles/main";
</style>
