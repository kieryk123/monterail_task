<template functional>
    <form
        class="form"
        @submit.prevent="listeners.submit"
        novalidate
    >
        <slot></slot>
    </form>
</template>
