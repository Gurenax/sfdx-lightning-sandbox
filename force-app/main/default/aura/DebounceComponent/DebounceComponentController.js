({
    increaseNumber : function(component, event, helper) {
        helper.lightningDebounce(helper.increaseNumber, 1000)(component,1)
    }
})
