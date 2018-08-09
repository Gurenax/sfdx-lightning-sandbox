public with sharing class PromiseComponentController {
    
    @AuraEnabled
    public static List<User> getAllUsers() {
        List<User> allUsers = [SELECT Name, Username FROM User];
        return allUsers;
    }
}
