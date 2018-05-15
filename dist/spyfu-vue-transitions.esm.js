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

export { auto_height as autoHeightTransition };
//# sourceMappingURL=spyfu-vue-transitions.esm.js.map
