<template functional>
    <form
        class="form"
        @submit.prevent="listeners.submit"
    >
        <slot></slot>
    </form>
</template>

<script>
export default {

}
</script>
