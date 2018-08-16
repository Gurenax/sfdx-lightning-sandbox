({
    doInit: function(component, event, helper) {
        console.log('>>> doInit')
    },

    reactBeforeLoad: function(component, event, helper) {
        console.log('reactBeforeLoad')
    },

    reactInit : function(component, event, helper) {
        console.log('reactInit')
        
        const dataService = {
            findAll : $A.getCallback(function(callback) {
                const action = component.get("c.findAll");
                action.setCallback(this, function(a) {
                    const contacts = a.getReturnValue()
                    callback(contacts)
                })
                $A.enqueueAction(action, false)
            }),
            findByName : $A.getCallback(function(name, callback) {
                const action = component.get("c.findByName")
                action.setParams({name: name})
                action.setCallback(this, function(a) {
                    const contacts = a.getReturnValue()
                    callback(contacts)
                })
                $A.enqueueAction(action, false)
            })
        }
        
        const container = component.find("container").getElement()

        reactApp.init(container, dataService)
        
    }
})