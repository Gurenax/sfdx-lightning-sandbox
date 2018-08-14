({
    receiveMessage : function(component, event, helper) {
        let { message } = event.getParam('arguments') // This specifically needs to be called 'arguments'
        component.set('v.messageValue', message)
    }
})
