# TC01_Login
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|FT01|Verify that Username field, password field and login button is visible|1. The application is accessible.|1. Launch the application. 2. Navigate to the login screen.  |The user is successfully getting username field, password field and login button||
|IT02|Verify Login Functionality with Valid Credentials|1. The application is accessible. 2. The user has a valid username and password.|1. Launch the application. 2. Navigate to the login screen. 3. Enter the valid username in the "Username" field. 4. Enter the valid password in the "Password" field. 5. Click on the "Login" button.|The user is successfully logged into the application and redirected to the home page/dashboard. |Username: anki123@gmail.com , Password: ankita123|
|IT03|Verify Login with Invalid Username|1. The application is accessible. 2. The user has an invalid username.|1. Launch the application. 2. Navigate to the login screen. 3. Enter an invalid username in the "Username" field. 4. Enter the valid password in the "Password" field. 5. Click on the "Login" button.|An error message is displayed. The user is not logged into the application.|Username: random , Password: ankita123|
|IT04|Verify Login with Invalid Password|1. The application is accessible. 2. The user has an invalid password.|1. Launch the application. 2. Navigate to the login screen. 3. Enter the valid username in the "Username" field.  4. Enter an invalid password in the "Password" field.  5. Click on the "Login" button.|An error message is displayed. The user is not logged into the application.|Username: anki123@gmail.com                 Password: random|
|IT05|Verify Login with Blank Username and Password|1. The application is accessible.|1. Launch the application. 2. Navigate to the login screen. 3. Leave the "Username" and "Password" fields blank. 4. Click on the "Login" button.|An error message is displayed. The user is not logged into the application.||


# TC02_Register
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|FT01|Verify that all the components on the Registration page is visible| 1. The application is accessible.	|1. Launch the application. 2. Navigate to the Registration screen.  |	The user is successfully getting all the fields of the Registration page |	
|IT01|Verify User Registration with Valid Data | 1. The application is accessible. |	1. Launch the application.  2. Navigate to the registration screen.  3. Enter valid data in all required fields.  4. Click on the "Register" button.| The user is successfully registered and redirected to the welcome page. | Valid data for registration	|
|IT02 | Verify Registration with Existing Username	| 1. The application is accessible.	| 1. Launch the application. 2. Navigate to the registration screen.  3. Enter an existing username in the "Username" field.  4. Enter valid data in other required fields.  5. Click on the "Register" button.	An error message is displayed, indicating that the username is already taken. The user is not registered. |	Enter existing email id	|
|IT03 | Verify Registration without selecting privacy policy	1. The application is accessible. |	1. Launch the application. 2. Navigate to the registration screen.  3. Enter valid data in required fields  4. don't select privacy policy option    5. Click on the "Register" button.	An error message is displayed, indicating that required fields are missing. | The user is not registered. |	Valid data for registration	|
|IT04 | Verify Registration with Blank Fields	| 1. The application is accessible.	| 1. Launch the application.  2. Navigate to the registration screen.  3. Leave required fields blank.   4. Click on the "Register" button.	| An error message is displayed, indicating that required fields are missing.  The user is not registered.|
|IT05	| Verify Registration with email not in format	| 1. The application is accessible.	| 1. Launch the application. 2. Navigate to the registration screen.  3. Enter an email not in proper fromat   4. Enter valid data in other required fields.  5. Click on the "Register" button.| An error message is displayed, indicating that the please enter email with proper format	|	


# TC03_Forgot Password
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|FT01 |	Verify that forgot password link is visible	User is on the login page	| 1. Launch the application.  2. Navigate to the login screen  | 	The "Forget Password" link should be present on the login page.|	
|IT01	| Verify navigation to "Forget Password" page	User is on the login page	| 1. Launch the application.  2. Navigate to the login screen  3. Click on the "Forget Password" link.	| User should be navigated to the "Forget Password" page.|		
|IT02 | Verify email input on "Forget Password" page |	User is on the "Forget Password" page| 1. Launch the application.  2. Navigate to the login screen   3. Enter a registered email address.  4. Click on the "Submit" button.	| User should see a success message indicating an email with reset instructions has been sent.	|		
|IT03	| Verify email input with unregistered/invalid email	| User is on the "Forget Password" page	|1. Launch the application.   2. Navigate to the login screen        3. Enter an unregistered email address.  4. Click on the "Submit" button.	| User should see an error message indicating the email address is not registered.			


# TC04_RegisterFromLoginPage
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01|Verify Register Link/Icon is visible on login page | 1. The application is accessible. |	1. Launch the application.  2. Navigate to the login screen  |	The Register link should be present on the login page.	|
|TC02	| Verify user is able to navigate to register page |1. The application is accessible.	| 1. Launch the application.  2. Navigate to the login screen  3. Click on Register Link |	User should be navigated to the Register page.			


# TC05_My Account
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|IT01	| Verify user is able to Access My Account Page	User is on the login page |	1. Log in to the application 2. Navigate to the "My Account" page	My Account page loads successfully	| Valid Username and password	|
|IT02	| Verify that all the components are visible on the myaccount page	| User is on the login page |	1. Log in to the application   2. Navigate to the "My Account" page  | My Account page loads successfully	| Valid Username and password	|	
|IT03	| Verify that user is able to navigate to edit account information page	| User is on the login page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on edit account information icon |	My Edit Account page loads successfully	| Valid Username and password |
|IT04	| Verify that user is able to navigate to change password page	| User is on the login page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on change password icon	| My Change password page loads successfully	| Valid Username and password|		
|IT05	| Verify that user is able to navigate to update address book page	|User is on the login page|	1. Log in to the application   2. Navigate to the "My Account" page  3. Click on update address book icon	| My Address Book page loads successfully	| Valid Username and password	|	
|IT06	| Verify that user is able to navigate to wish list page| 	User is on the login page	| 1. Log in to the application   2. Navigate to the "My Account" page  3. Click on wishlist icon | My Wishlist page loads successfully	| Valid Username and password	|	
|IT07	| Verify that user is able to navigate order history page	| User is on the login page|	1. Log in to the application   2. Navigate to the "My Account" page  3. Click on order history icon	| My Order History page loads successfully	| Valid Username and password	|	
|IT08	| Verify that user is able to logout sucessfully	| User is on the login page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on logout icon	Login page loads successfully	| Valid Username and password |		


# TC06_Edit Profile
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01|Verify all  components are visible on edit profile page	| User is on the My Account page |	1. Log in to the application   2. Navigate to the "My Account" page  3. Click on edit account information icon   |	All components should be present on the edit profile page. |	valid credential for login	|	
|TC02|	Verify that user correct information is visible on edit profile page	| User is on the My Account page |	1. Log in to the application   2. Navigate to the "My Account" page    3. Click on edit account information icon  | All correct information should pe visible on the edit profile page	| valid credential for login |
|TC03	| verify user is able to Edit Profile with Valid Data|	User is on the My Account page	|1. Log in to the application  2. Navigate to the "My Account" page   3. Click on edit account information icon   4. Enter valid data in the field   5. click on continue button  | 	Navigate to MyAccount Page and Success message should be displayed	| Valid credentials and valid data for profile update	|	
|TC04|	verify user is unable to Edit Profile with All Fields Blank |	User is on the My Account page|	1. Log in to the application   2. Navigate to the "My Account" page   3. Click on edit account information icon   4. leave all/any fields blank    5. click on continue button  | 	Error Message should be displayed	| valid credential for login |	
|TC05	| verify user is unable to Edit Profile with Invalid Email Format |	User is on the My Account page	| 1. Log in to the application  2. Navigate to the "My Account" page  3. Click on edit account information icon   4. Enter invalid email in the field   5. click on continue button  | 	Error Message should be displayed |	valid credential for login|	
|TC06	| Verify user is able to go back to myaccount page |	User is on the My Account page	| 1. Log in to the application  2. Navigate to the "My Account" page  3. Click on edit account information icon   4. click on back button   |	My Account page should be displayed	valid credential for login	|	


# TC07_Change Password
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01	| Verify all  components are visible on change password page	| User is on the My Account page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on change password icon  | 	All components should be present on the change password page.	| valid credential for login |
|TC02	| Verify that user is able to change password with valid data	| User is on the My Account page | 1. Log in to the application  2. Navigate to the "My Account" page   3. Click on change password icon     4. Enter valid password  5. Click on Continue Button	| Navigate to MyAccount Page and Success message should be displayed	| valid credential for login and valid new password	|	
|TC03	| Verify that user is unable to change password with different value in password and confirm password	| User is on the My Account page| 	1. Log in to the application  2. Navigate to the "My Account" page  3. Click on change password icon     4. Enter different data in password  and confirm password field    5. Click on Continue Button	Error Message should be displayed |	valid credential for login |
|TC04	|verify user is unable to change password with All Fields Blank |	User is on the My Account page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on change password icon   4. leave all/any fields blank   5. click on continue button   |	Error Message should be displayed |	valid credential for login	|
|TC05	| verify user is unable to change password with less number of character than 4	User is on the My Account page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on change password icon   4. enter data of size less than 4   5. click on continue button   |	Error Message should be displayed	| valid credential for login |		
|TC06	| Verify user is able to go back to myaccount page |	User is on the My Account page	|1. Log in to the application   2. Navigate to the "My Account" page    3. Click on change password icon    4. click on back button   |	My Account page should be displayed	valid credential for login	|	


# TC08_Add Address
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01	| Verify all  components are visible on change password page |	User is on the My Account page |1. Log in to the  application    2. Navigate to the "My Account" page   3. Click on Address icon  | 	All components should be present on the address page.	| valid credential for login|	
|TC02	| Verify user is able to add new address with valid data	| User is on the My Account page |	1. Log in to the application   2. Navigate to the "My Account" page  3. Click on Address icon  4. Enter all valid data   5. Click on continue button  | 	New Address added sucessfully and visible on the address page	| valid credential for login and valid data for address	|	
|TC03	| Verify that user is unable to add new address with blank fields |	User is on the My Account page	| 1. Log in to the application  2. Navigate to the "My Account" page   3. Click on Address icon    4. Leave all fields blank  5. Click on continue button   |	Error Message should be displayed	| valid credential for login|


# TC09_Edit Delete Address
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01	| Verify all  components are visible on address page |	User is on the My Account page |	1. Log in to the application  2. Navigate to the "My Account" page   3. Click on address icon   |	All components should be present on the address page.	| valid credential for login	|
|TC02	| Verify that user correct address information is visible on edit address page	| User is on the My Account page	| 1. Log in to the application   2. Navigate to the "My Account" page   3. Click on address icon   4. Click on edit icon of the address  |	All correct information should pe visible on the edit address page |	valid credential for login	|
|TC03	| verify user is able to Edit existing address with Valid Data	| User is on the My Account page	| 1. Log in to the application   2. Navigate to the "My Account" page    3. Click on address icon   4. Click on edit icon of the address    5. Enter valid data in the field                      6. click on continue button   |	Navigate to address Page and Success message should be displayed and address should be updated	| Valid credentials and valid data for profile update|
|TC04	| verify user is able to delete the existing address (if more than one address available)|	User is on the My Account page	| 1. Log in to the application    2. Navigate to the "My Account" page   3. Click on address icon   4. Click on delete icon of the address if multiple address available |	Navigate to address Page and Success message should be displayed and address should be deleted	|		
|TC05	| verify user is unable to delete the existing address (if only one address available)	| User is on the My Account page |	1. Log in to the application    2. Navigate to the "My Account" page    3. Click on address icon   4. Click on delete icon of the address if only one available	| Navigate to address Page and error message should be displayed and address should not be deleted	|		
|TC06	| Verify user is unable to edit existing address with empty mandatory fields	| User is on the My Account page |	1. Log in to the application   2. Navigate to the "My Account" page   3. Click on address icon   4. Click on edit icon of the address     5. leave mandatory fields empty   6. click on continue button  | 	 error message should be displayed and address should not be edited		|


# TC10_Add to Wishlist
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01	| Verify confirmation on addition item to the wishlist |	User is on the My Account page	| 1. Log in to the application   2. Select an item from menu bar     3. Click on add wishlist icon    | 	Confirmation message appears	| valid credential for login |		
|TC02	| Verify valid item added in the wishlist |	User is on the My Account page	| 1. Log in to the application     2. Select an item from menu bar    3. Click on add wishlist icon      4. go to wishlist | Same item should be added in the wishlist	| valid credential for login |		
|TC03 |	Verify valid item removed from the wishlist (if again click on wishlist icon of productwhich is already added in the wishlist)	| User is on the My Account page	| 1. Log in to the application    2. Select an item from menu bar    3. Click on add wishlist icon      4. Again click on wishlist icon   5. go to wishlist |	Same item should be removed from the wishlist	| valid credential for login |	
|TC04 |	Verify valid item removed from the wishlist |	User is on the My Account page	| 1. Log in to the application    2. Go to wishlist    3. click on remove icon  |	Item should be removed from the wishlist	| valid credential for login	|	
|TC05 |	Verify addition without login	| User is on application page |	1. Select an item from menu bar   2. Click on add wishlist icon   |	Login/Register Message should be displayed |			
|TC06	| Verify User ask to login if try to see wishlist without login	User is on application page	|1. Click on wishlist icon	| Should navigate to login page	|		


# TC11_Add to Cart
|**Test Case ID** | **Test Description** | **Precondition** | **Test Steps** | **Expected Result** | **Test Data** |
|---------------|--------------------|----------------|--------------|-------------------|-------------|
|TC01	| Verify confirmation on addition item to the cart |	User is on the My Account page |	1. Log in to the application   2. Select an item from menu bar  3. Click on cart icon  | 	Confirmation message appears	| valid credential for login	|	
| TC02 |	Verify valid item added in the cart	User is on the My Account page	| 1. Log in to the application   2. Select an item from menu bar   3. Click on cart icon   4. go to cart  | item should be added in the cart |	valid credential for login	|
|TC03	| Verify valid item quantity increased by 1 (if again click on cart icon of product which is already added in the cart)	| User is on the My Account page |	1. Log in to the application   2. Select an item from menu bar   3. Click on cart icon    4. Again click on cart icon  5. go to cart  | Same item quantity should be increased by 1	| valid credential for login	|	
|TC04	| Verify Valid item from wishlist added to the cart	User is on the My Account page |	1. Log in to the application   2. Go to wishlist    3. Click on cart icon    4. go to cart  | item should be added in the cart	| valid credential for login |		
|TC04	| Verify valid item removed from the cart | User is on the My Account page |	1. Log in to the application   2.  Go to cart   3. click on remove icon of selected item  |	Item should be removed from the cart |	valid credential for login	|	
|TC05	| Verify addition without login	User is on application page |	1. Select an item from menu bar   2. Click on cart icon   3. go to cart  |	item should be added in the cart |	
|TC06	| Verify User will get empty cart list if click on cart icon without login |	User is on application page	| 1. Click on cart icon	| Should display empty cart list |			
