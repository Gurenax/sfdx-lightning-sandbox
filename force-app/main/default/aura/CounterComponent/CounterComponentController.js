({
    handleIncrement : function(component, event, helper) {
        const newValue = component.get('v.countValue') + 1
        component.set('v.countValue', newValue)
    },
    
    handleDecrement : function(component, event, helper) {
        const newValue = component.get('v.countValue') - 1
        component.set('v.countValue', newValue)
    }
})
