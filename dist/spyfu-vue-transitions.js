(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bezier-easing')) :
    typeof define === 'function' && define.amd ? define(['exports', 'bezier-easing'], factory) :
    (factory((global.spyfuVueTransitions = {}),global.bezierEasing));
}(this, (function (exports,bezierEasing) { 'use strict';

    bezierEasing = bezierEasing && bezierEasing.hasOwnProperty('default') ? bezierEasing['default'] : bezierEasing;

    // these transition hooks are fired in the following order. there
    // is a race between the onAfterEnter and onTransitionEnd hook,
    // but it doesn't matter which of these actually fires first.
    // 1. onBeforeEnter
    // 2. onBeforeLeave
    // 3. onLeave
    // 4. onEnter
    // 5a. onAfterEnter
    // 5b. onTransitionEnd

    function onBeforeEnter(el) {
        // get the entering element ready to be transitioned
        el.style.opacity = 0;
        el.style.transition = "opacity " + (this.props.duration / 2) + "ms " + (this.props.fadeInCurve);
        el.style.willChange = 'opacity';
    }

    function onLeave(el, done) {
        // fix the height of our container
        el.parentElement.style.height = (el.offsetHeight) + "px";
        // make the leaving element fade out
        el.style.opacity = 0;
        // remove the leaving element from the dom after it fades out
        setTimeout(done, this.props.duration / 2);
    }

    function onEnter(el, done) {
        var this$1 = this;

        // prevent the transitioning elements from overflowing our container
        el.parentElement.style.overflow = 'hidden';
        el.parentElement.style.transition = "height " + (this.props.duration) + "ms " + (this.props.heightCurve);
        el.parentElement.style.willChange = 'height';

        // set the new height of our wrapper element
        el.parentElement.style.height = (el.offsetHeight) + "px";

        // wait for the leaving element to fade out, then fade in the entering one
        setTimeout(function () {
            el.style.opacity = 1;

            // and when that transition is complete, end the entering element phase
            setTimeout(done, this$1.props.duration / 2);
        }, this.props.duration / 2);
    }

    function onAfterEnter(el) {
        // remove inline styles from the entering element
        el.removeAttribute('style');
    }

    function onTransitionEnd(e) {
        // when the transitions are over remove inline styles from our wrapper
        if (e.target.classList.contains('v-collapse-transition')) {
            e.target.removeAttribute('style');
        }
    }

    var auto_height = {
        render: function render(h, context) {
            return h('div', {
                class: 'v-auto-height-transition',
                on: {
                    transitionend: onTransitionEnd,
                },
            }, [
                h('transition', {
                    on: {
                        afterEnter: onAfterEnter,
                        beforeEnter: onBeforeEnter.bind(context),
                        enter: onEnter.bind(context),
                        leave: onLeave.bind(context),
                    },
                }, context.slots().default || h('div')) ]);
        },
        functional: true,
        props: {
            duration: {
                default: 350,
                type: Number,
            },
            fadeOutCurve: {
                default: 'ease-out',
                type: String,
            },
            fadeInCurve: {
                default: 'ease-in',
                type: String,
            },
            heightCurve: {
                default: 'ease-in-out',
                type: String,
            },
            tag: {
                default: 'div',
                type: String,
            },
        },
    };

    /**
     * Queue callbacks along a cubic-bezier easing curve.
     * 
     * @param {Array<Number>}   curve       the easing curve to use
     * @param {Function}        cb          callback function to execute
     * @param {number}          duration    easing duration in milliseconds
     * @param {number}          frames      number of times to run callback fn
     */
    function ease(curve, cb, duration, frames) {
        if ( frames === void 0 ) frames = null;

        // assume 60fps if no value was provided
        if (!frames) {
            frames = duration / 16.6666;
        }

        // calculate the easing curve, and create an array
        // to hold all of the timeouts we're about make
        var easing = bezierEasing.apply(void 0, curve);
        var timeouts = [];

        // queue up each frame of the animation
        var loop = function ( i ) {
            var frame = i / frames;

            timeouts.push(
                setTimeout(function () { return cb(easing(frame), i); }, frame * duration)
            );
        };

        for (var i = 0; i <= frames; i += 1) loop( i );

        // and finally, return an object we can use to cancel the timeouts
        return {
            cancel: function () { return timeouts.forEach(clearTimeout); },
        };
    }

    // cubic-bezier easing curves
    var easeInOutQuart = [0.77, 0, 0.175, 1];

    // protected method to animate counting
    function count(vm, to, from) {
        var diff = to - from;

        if (vm.ease) {
            vm.ease.cancel();
            vm.ease = null;
        }

        vm.ease = ease(vm.curve, function (t) {
            vm.display = from + (diff * t);
        }, vm.duration);
    }

    var number = {
        data: function data() {
            return {
                currentAnimation: null,
                display: this.appear ? 0 : this.value,
            };
        },
        mounted: function mounted() {
            var this$1 = this;

            if (this.appear) {
                setTimeout(function () { return count(this$1, this$1.value, 0); }, this.delay);
            }
        },
        render: function render() {
            var value = Math.round(this.display);

            return this._c('span', [
                this._t('default', [
                    this._v(this._s(value))
                ], {
                    value: this.display,
                })
            ], 2);
        },
        methods: {
            cancel: function cancel() {
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
                default: function () { return easeInOutQuart; },
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
            value: function value(to, from) {
                count(this, to, from);
            },
        },
    };

    exports.autoHeightTransition = auto_height;
    exports.numberTransition = number;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spyfu-vue-transitions.js.map
