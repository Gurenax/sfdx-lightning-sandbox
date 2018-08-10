({
    lightningDebounce : function(fn, ms) {
        const m = !ms ? 0 : ms
        return function() {
            const args = arguments
            clearTimeout(window.timeoutId)
            window.timeoutId = setTimeout(() => fn.apply(this, args), m)
        }
    },

    increaseNumber : function(component, num) {
        const val = component.get('v.debounceCounterValue')
        component.set('v.debounceCounterValue', val + num)
    }

})
