({
    // Client Side controller function name cannot be the same with the Server Side controller method name
    // e.g. if the apex class method is getUsers, this function should be named something else (i.e. getUsersList)
    getUsersList : function(component, event, helper) {
        helper.lightningPromisify(component, helper.getAllUsersPromise).then(result => {
            component.set('v.users', result)
        })
        .catch(error => {
            // Error in Promise
            console.error('An error in Promise occurred getting the account : ' + error.message);
        })
    }
})
