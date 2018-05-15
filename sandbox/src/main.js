import App from './App.vue';
import Vue from 'vue';

//
// transitions
//
import { 
    autoHeightTransition,
} from '../../src/index';

Vue.component('v-auto-height-transition', autoHeightTransition);

//
// sandbox app
//
new Vue({
    el: '#app',
    render: h => h(App),
});
