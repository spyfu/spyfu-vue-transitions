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

export { auto_height as autoHeightTransition };
//# sourceMappingURL=spyfu-vue-transitions.esm.js.map
