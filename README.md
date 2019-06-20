# dynamic-navigation-in-napili-communities

<a href="https://githubsfdeploy.herokuapp.com?owner=meighan&repo=dynamic-navigation-in-napili-communities">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>

How to Use
1.  In the Community Builder create 2 Standard pages, one for "My Account" and one for "My Profile".  
2. On the "My Account" page drop the myAccountRedirect component, and on the "My Profile" page, drop the myProfileRedirect component. 
3. Set the visibility for your "My Account" page to be for an audience that is User Type not equal to Standard.
4. Create a 2nd "My Internal Account Page" to be for an audience that is User Type equal to Standard.
5. In your navigation bar, add use Community page option in the navigation to add a link for "My Account" and/or "My Profile" and Save

Boom! Now in your navigation can link to the current user's account and profile, redirecting them to the out of the box User's Profile page and User's Account page.
