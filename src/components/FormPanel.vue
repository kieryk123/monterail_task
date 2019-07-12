<template functional>
    <div class="form-panel">
        <div class="form-panel__head">
            <h2 class="form-panel__title">{{ props.title }}</h2>
        </div>
        <div class="form-panel__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>
