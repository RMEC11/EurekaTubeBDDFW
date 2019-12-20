package mytubepackage;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"Features"},
		glue= {"mytubepackage"},
		plugin= {"html:target/cucumber-html-report",
				"json:target/cucumber.json",
				"pretty:target/cucumber-pretty.txt",
				"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/extentreport.html"}
		
		)

public class TubetestRunner {

	
}
