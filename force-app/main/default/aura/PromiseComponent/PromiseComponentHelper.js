({
    getAllUsersPromise : function(component) {
        // Get Apex Controller Method
        const action = component.get('c.getAllUsers')

        return new Promise((resolve, reject) => {
            // Set parameters if needed
            // action.setParams({})

            // Build the Action
            action.setCallback(this, response => {
                const state = response.getState()

                if(state === 'SUCCESS') {
                    const allUsers = response.getReturnValue()
                    resolve(allUsers)
                } else {
                    const errors = response.getError()
                    reject(errors)
                }
            })

            // Perform Action
            $A.enqueueAction(action)
        
        })
    }
})
