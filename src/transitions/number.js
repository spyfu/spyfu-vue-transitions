import { ease } from '../utils';
import { easeInOutQuart } from '..//constants';

// protected method to animate counting
function count(vm, to, from) {
    const diff = to - from;

    if (vm.ease) {
        vm.ease.cancel();
        vm.ease = null;
    }

    vm.ease = ease(vm.curve, (t) => {
        vm.display = from + (diff * t);
    }, vm.duration);
}

export default {
    data() {
        return {
            currentAnimation: null,
            display: this.appear ? 0 : this.value,
        };
    },
    mounted() {
        if (this.appear) {
            setTimeout(() => count(this, this.value, 0), this.delay);
        }
    },
    render() {
        const value = Math.round(this.display);

        return this._c('span', [
            this._t('default', [
                this._v(this._s(value))
            ], {
                value: this.display,
            })
        ], 2);
    },
    methods: {
        cancel() {
            if (this.currentAnimation) {
                this.ease.cancel();
            }
            this.display = this.value;
        },
    },
    props: {
        appear: {
            default: false,
            type: Boolean,
        },
        curve: {
            default: () => easeInOutQuart,
            type: Array,
        },
        delay: {
            default: 0,
            type: Number,
        },
        duration: {
            default: 3000,
            type: Number,
        },
        value: {
            required: true,
            type: Number,
        },
    },
    watch: {
        value(to, from) {
            count(this, to, from);
        },
    },
};