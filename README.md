# spyfu-vue-transitions

This repository will eventually house our beautiful transition components, so they can be used across projects.

##### A couple of project goals...

- The transitions need to be composable (example: fading items in a list while the container transitions height)
- All transitions should expose the underlying transition hooks. This will give us the ability to extend transitions for one off variations, or more complex choreography.
- Transition components should be functional where possible. This will keep them easy to use, even inside of repeating elements. 
- The use of `will-change` needs to be configurable, and should of off by default.
- Transitions should expose a prop to customize the `appear` behavior when possible.
- All state transitions should accept easing functions as a prop.