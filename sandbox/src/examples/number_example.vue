<template>
    <section>
        <h3>Number transition</h3>

        <p>Transition state between two numbers. To format the number, use a scoped slot.</p>

        <div class="toolbar">
            <a href="#" @click.prevent="randomize">Randomize</a>
        </div>

        <h3><v-number-transition :value="value" /></h3>
        
    </section>
</template>

<script>
const rand = (min, max) => Math.floor(Math.random() * max) + min;

export default {
    data() {
        return {
            value: rand(0, 10000),
        }
    },
    methods: {
        randomize() {
            this.value = rand(0, 10000);
        }
    }
}
</script>
