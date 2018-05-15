(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.spyfuVueTransitions = {})));
}(this, (function (exports) { 'use strict';

    var auto_height = {
        render: function render(h, context) {
            return h('div', {
                class: 'v-auto-height-transition',
            }, [
                context.slots().default
            ]);
        },
        functional: true,
        props: {
            tag: {
                default: 'div',
                type: String,
            },
        },
    };

    exports.autoHeightTransition = auto_height;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spyfu-vue-transitions.js.map
