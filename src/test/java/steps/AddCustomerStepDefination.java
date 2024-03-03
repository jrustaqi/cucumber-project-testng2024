package steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pages.AddNewCustomerPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class AddCustomerStepDefination extends TestBase{
	
	LoginPage loginPage;
	DashboardPage dashboardPage;
	AddNewCustomerPage addNewCustomerPage;
	
	@Before
	public void initMethod() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class); 
		addNewCustomerPage = PageFactory.initElements(driver, AddNewCustomerPage.class); 
	}
	@Given("^User is on the CodeFios login page$")
	public void user_is_on_the_CodeFios_login_page() {
		driver.get("https://www.codefios.com/ebilling/login");
	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username) {
		loginPage.insertUsername(username);
	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) {
		loginPage.insertPassword(password);
	}

	@When("^User clicks on the Sighin button$")
	public void user_clicks_on_the_Sighin_button() {
		loginPage.clickOnSinginButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() {
		Assert.assertEquals("Codefios", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User clicks on the Customer menu$")
	public void user_clicks_on_the_Customer_menu() {
		dashboardPage.clickOnCustomersMenu();
	}

	@When("^User clicks on the Add Customer menu$")
	public void user_clicks_on_the_Add_Customer_menu() {
		dashboardPage.clickOnAddCustomerMenu();
	}

	@Then("^User should land on Add New Customer page$")
	public void user_should_land_on_Add_New_Customer_page() {
		Assert.assertEquals("Manage Client", dashboardPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User enters the fullName as \"([^\"]*)\"$")
	public void user_enters_the_fullName_as(String fullname) {
		addNewCustomerPage.insertFullname(fullname);
	}

	@When("^User enters the compny as \"([^\"]*)\"$")
	public void user_enters_the_compny_as(String company) {
		addNewCustomerPage.selectCompanyfromDropDown(company);
	}

	@When("^User enters the email as \"([^\"]*)\"$")
	public void user_enters_the_email_as(String email) {
		addNewCustomerPage.insertEmail(email);
	}

	@When("^User enters the phone as \"([^\"]*)\"$")
	public void user_enters_the_phone_as(String phone) {
		addNewCustomerPage.insertPhone(phone);
	}
	
	@When("^User enters the address as \"([^\"]*)\"$")
	public void user_enters_the_address_as(String address) {
		addNewCustomerPage.insertAddress(address);
	}

	@When("^User enters the city as \"([^\"]*)\"$")
	public void user_enters_the_city_as(String city) {
		addNewCustomerPage.insertCity(city);
	}

	@When("^User enters the zipCode as \"([^\"]*)\"$")
	public void user_enters_the_zipCode_as(String zipCode) {
		addNewCustomerPage.insertZipCode(zipCode);
	}

	@When("^User enters the country as \"([^\"]*)\"$")
	public void user_enters_the_country_as(String country) {
		addNewCustomerPage.selectCountryFromDropDown(country);
	}

	@When("^User enters the group as \"([^\"]*)\"$")
	public void user_enters_the_group_as(String group) {
		addNewCustomerPage.selectGroupFromDropDown(group);
	}

	@When("^User clicks on the save button$")
	public void user_clicks_on_the_save_button() {
		addNewCustomerPage.clickOnSaveButton();
	}

	@Then("^User should see the new inserted customer info$")
	public void user_should_see_the_new_inserted_customer_info() {
		Assert.assertEquals("Manage Client", addNewCustomerPage.getPageTitle());
		addNewCustomerPage.validateInsertedCustomer();
		takeScreenshot(driver);
	}
	
	@After
	public void tearDown(){
		driver.close();
		driver.quit();
	}

}
