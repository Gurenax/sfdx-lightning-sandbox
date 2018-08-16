/**
*   React Component Controller
*/
public with sharing class ReactComponentController {
    
    @AuraEnabled
    public static List<Contact> findAll() {
        return [SELECT Id, Name FROM Contact LIMIT 20];
    }

    @AuraEnabled
    public static List<Contact> findByName(String name) {
        String key = '%' + name + '%';
        return [SELECT Id, Name FROM Contact WHERE Name LIKE :key LIMIT 20];
    }
    
}