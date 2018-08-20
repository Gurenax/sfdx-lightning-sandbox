({
    lightningDebounce : function(fn, ms) {
        const delayinMs = !ms ? 0 : ms
        return (...args) => {
            clearTimeout(window.timeoutId)
            window.timeoutId = setTimeout(() => fn.apply(this, args), delayinMs)
        }
    },

    lightningDebounceWithCallback : function(fn, ms) {
        const delayinMs = !ms ? 0 : ms
        return (...args) => {
            clearTimeout(window.timeoutId)
            window.timeoutId = setTimeout($A.getCallback(() => fn.apply(this, args)), delayinMs)
        }
    },

    increaseNumber : function(component, num) {
        const val = component.get('v.debounceCounterValue')
        component.set('v.debounceCounterValue', val + num)
    },

    /**
     * Sameed's Debounce - Need to test this
     */
    sameedDebounce: function (fn, delayInMs) {
        const delay = !delayInMs ? 0 : delayInMs
        const timeoutId = fn.toString() // generating a unique string by stringifying the function
        return (...args) => {
            clearTimeout(window[timeoutId])
            window[timeoutId] = setTimeout($A.getCallback(() => fn.apply(this, args)), delay)
        }
    },

})
