({
    // Client Side controller function name cannot be the same with the Server Side controller method name
    // e.g. if the apex class method is getUsers, this function should be named something else (i.e. getUsersList)
    getUsersList : function(component, event, helper) {
        helper.getAllUsersPromise(component).then(
            $A.getCallback(result => {
                console.log('allUsers', result)
                component.set('v.users', result)
            }),
            $A.getCallback(error => {
                // Something went wrong
                console.error('An error occurred getting the account : ' + error.message);
            })
        )
    }
})
