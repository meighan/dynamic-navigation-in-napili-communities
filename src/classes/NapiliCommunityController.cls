public class NapiliCommunityController {
    
    @AuraEnabled
    public static User getLoggedInUser(){
        return [SELECT Id, Contact.AccountId, ContactId FROM User WHERE Id =: UserInfo.getUserId() LIMIT 1];
    }
}
