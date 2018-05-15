<style>
    body {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        margin: 24px;
        font-weight: 300;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    section {
        border-top: 1px solid #ccc;
        padding: 24px 0;
    }

    h1 {
        font-size: 48px;
        font-weight: 300;
        margin-bottom: 24px;
        margin-top: 0;
        padding: 0;
    }

    h3 {
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 24px;
        margin-top: 0;
    }

    p {

    }

    .toolbar {
        margin: 12px 0;
    }
</style>

<style lang="scss" scoped>
    .inner {
        margin: 0 auto;
        max-width: 1400px;
    }
</style>

<template>
    <div id="app">
        <div class="inner">
            <h1>spyfu-vue-transitions</h1>

            <v-auto-height-example />
        </div>
    </div>
</template>

<script>
import autoHeightExample from './examples/auto_height_example.vue';

export default {
    components: {
        'v-auto-height-example': autoHeightExample,
    }
}
</script>