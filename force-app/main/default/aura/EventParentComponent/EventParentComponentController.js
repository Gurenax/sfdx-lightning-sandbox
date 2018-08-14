({
    doInit : function(component, event, helper) {
        console.log('>>> Component Initialising...')
    },

    handleCreateSomething: function(component, event, helper) {
        let params = event.getParams()
        let message = params.payload.message;
        let receiverId = params.payload.receiver;
        let childCmp2 = component.find(receiverId)
        childCmp2.sendMessageToChild2(message);
    }

})
