package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = "classpath:features", 
		glue = "steps",
		tags = "@Regression",
		monochrome = true,					//if FALSE will not print readable and pretty report in console
		dryRun = false,						//if TRUE then will not execute the steps, will check for initialization errors
		plugin = { 
				"pretty", 
				"html:target/cucumber-Report.html",
				"json:target/report.json" 
				}
		)
public class AddCustomerRunner extends AbstractTestNGCucumberTests{

}
