import App from './App.vue';
import Vue from 'vue';

//
// transitions
//
import { 
    autoHeightTransition,
    numberTransition,
} from '../../src/index';

Vue.component('v-auto-height-transition', autoHeightTransition);
Vue.component('v-number-transition', numberTransition);

//
// sandbox app
//
new Vue({
    el: '#app',
    render: h => h(App),
});
