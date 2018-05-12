import App from './App.vue';
import Vue from 'vue';
import spyfuVueTransitions from '../../dist/spyfu-vue-transitions.esm.js';

console.log(spyfuVueTransitions);

new Vue({
    el: '#app',
    render: h => h(App),
});
