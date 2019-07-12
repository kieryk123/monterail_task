<template functional>
    <header class="app-header">
        <div class="app-header__inner">
            <h1 class="app-header__headline">{{ props.headline }}</h1>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        headline: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">

</style>
