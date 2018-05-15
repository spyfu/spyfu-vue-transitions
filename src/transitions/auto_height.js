export default {
    render(h, context) {
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
