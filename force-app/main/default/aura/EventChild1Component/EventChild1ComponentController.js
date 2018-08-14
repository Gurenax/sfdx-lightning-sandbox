({
    fireEvent : function(component, event, helper) {
        let evt = component.getEvent('createSomethingToParent')
        evt.setParams({
            payload: {
                message: 'Hello',
                receiver: 'Child2'
            }
        })
        evt.fire()
    }
})
