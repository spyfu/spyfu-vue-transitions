import bezierEasing from 'bezier-easing';

/**
 * Queue callbacks along a cubic-bezier easing curve.
 * 
 * @param {Array<Number>}   curve       the easing curve to use
 * @param {Function}        cb          callback function to execute
 * @param {number}          duration    easing duration in milliseconds
 * @param {number}          frames      number of times to run callback fn
 */
export function ease(curve, cb, duration, frames = null) {
    // assume 60fps if no value was provided
    if (!frames) {
        frames = duration / 16.6666;
    }

    // calculate the easing curve, and create an array
    // to hold all of the timeouts we're about make
    const easing = bezierEasing(...curve);
    const timeouts = [];

    // queue up each frame of the animation
    for (let i = 0; i <= frames; i += 1) {
        const frame = i / frames;

        timeouts.push(
            setTimeout(() => cb(easing(frame), i), frame * duration),
        );
    }

    // and finally, return an object we can use to cancel the timeouts
    return {
        cancel: () => timeouts.forEach(clearTimeout),
    };
}