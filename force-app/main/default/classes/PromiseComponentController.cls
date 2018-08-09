public with sharing class PromiseComponentController {
    
    @AuraEnabled
    public static List<User> getAllUsers() {
        try {
            List<User> allUsers = [SELECT Name, Username FROM User];
            
            // AuraHandledException e = new AuraHandledException('ToNumber length invalid');
            // e.setMessage('ToNumber length invalid');
            // system.debug(e);
            // throw e;

            return allUsers;
        } catch(Exception e) {
            throw e;
        }
    }
}
