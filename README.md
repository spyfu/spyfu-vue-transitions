# spyfu-vue-transitions

[![npm](https://img.shields.io/npm/v/spyfu-vue-transitions.svg)](https://www.npmjs.com/package/spyfu-vue-transitions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/spyfu/spyfu-vue-transitions/blob/master/LICENSE)

This repository will eventually house our beautiful transition components, so they can be used across projects.

### A couple of project goals...

- The transitions need to be composable (example: fading items in a list while the container transitions height)
- All transitions should expose the underlying transition hooks. This will give us the ability to extend transitions for one off variations, or more complex choreography.
- Transition components should be functional where possible. This will keep them easy to use, even inside of repeating elements. 
- The use of `will-change` needs to be configurable, and should be off by default.
- Transitions should expose a prop to customize the `appear` behavior when possible.
- All state transitions should accept easing functions as a prop.
- For transitions that require wrapping elements, that element's tag should be customizable.

### Some transitions that will be added...

- [x] `AutoHeightTransition` - Transition the height of a container sized by it's content
- [ ] `AuthHeightTransitionGroup` - Transition the height of a container sized by it's child elements
- [ ] `FadeTransition` - Fade an element in and out
- [ ] `FadeMoveTransition` - A fade transition that also translates in a given direction
- [x] `NumberTransition` - State transition between numbers
- [ ] `StaggeredEnterTransition` - Staggers the entering of elements by a given duration
