({
    lightningPromisify : function(component, fn) {
        return fn(component).then(
            $A.getCallback(result => result),
            $A.getCallback(error => { throw error })
        )
    },
    
    getAllUsersPromise : function(component) {
        // Get Apex Controller Method
        const action = component.get('c.getAllUsers')

        // Call the promise
        return new Promise((resolve, reject) => {
            // Set parameters if needed
            // action.setParams({})

            // Build the Action
            action.setCallback(this, response => {
                const state = response.getState()

                if(state === 'SUCCESS') {
                    resolve(response.getReturnValue())
                } else {
                    reject(response.getError())
                }
            })

            // Perform Action
            $A.enqueueAction(action)
        
        })
    }
})
