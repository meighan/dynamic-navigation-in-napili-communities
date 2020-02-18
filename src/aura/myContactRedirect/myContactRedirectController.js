({
    redirectToContact: function(component, event, helper) {
        var loggedInUser;
        var state;
        var navEvt;
        
        var action = component.get("c.getLoggedInExternalUser");
        action.setCallback(this, function(response) {
            state = response.getState();
            if (state === "SUCCESS") {
                loggedInUser = response.getReturnValue();
                navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": loggedInExternalUser.ContactId,
                    "slideDevName": "detail"
                });
                navEvt.fire();
            }
        });
        $A.enqueueAction(action);
    }
})