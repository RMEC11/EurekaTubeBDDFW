package mytubepackage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TubeSteps {
	String path=(System.getProperty("user.dir"));
WebDriver driver=null;
	@Given("^Open Login Page in Browser$")
	public void Open_Login_Page_in_Browser() {
		System.setProperty("webdriver.chrome.driver", path+"\\src\\test\\resources\\executables\\chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("I start the application");
		driver.get("http://www.3deureka.in/");
		String title = driver.getTitle();
		driver.manage().window().maximize();
		System.out.println(title);
		
		//Hello 
	}
	@Given("^Open Login Page\"([^\"]*)\"$")
	public void Open_Login_Page(String browser) {
		
		if(browser.equalsIgnoreCase("firefox")) {
		System.setProperty("webdriver.gecko.driver",path+"\\src\\test\\resources\\executables\\geckodriver.exe");
		driver = new FirefoxDriver();
		System.out.println("I start the application");
		driver.get("http://www.3deureka.in/");
		String title = driver.getTitle();
		driver.manage().window().maximize();
		System.out.println(title);
		}else if(browser.equalsIgnoreCase("chrome")){
			
			System.setProperty("webdriver.chrome.driver", path+"\\src\\test\\resources\\executables\\chromedriver.exe");
			driver = new ChromeDriver();
			System.out.println("I start the application");
			driver.get("http://www.3deureka.in/");
			String title = driver.getTitle();
			driver.manage().window().maximize();
			System.out.println(title);
		}else {
			System.setProperty("webdriver.ie.driver", path+"\\src\\test\\resources\\executables\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			System.out.println("I start the application");
			driver.get("http://www.3deureka.in/");
			String title = driver.getTitle();
			driver.manage().window().maximize();
			System.out.println(title);
		}
	}
	@Then("^Click on signin$")
	public void Click_on_signin() {
driver.findElement(By.id("signInClick")).click();
		
    	System.out.println("I clicked on Signin button");
		
	}
	@When("^Fill required user\"([^\"]*)\" and \"([^\"]*)\" info$")
	public void Fill_required_user_and_info(String username,String password) throws Exception {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"txtUserName\"]")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"txtPwd\"]")).sendKeys(password);
		System.out.println("I fill the valid credentials");
		
	}
	@When("^Fill required info$")
	public void Fill_required_info() throws Exception {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"txtUserName\"]")).sendKeys("beroze@designmate.com");
		driver.findElement(By.xpath("//*[@id=\"txtPwd\"]")).sendKeys("dm@1234");
		System.out.println("I fill the valid credentials");
		
	}
	@Then("^Click on login$")
	public void Click_on_login() {
		driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div[2]/form/input[4]")).click();
		System.out.println("I Clicked on Login Button");
		
	}
	@Then("^Search for topic$")
	public void Search_for_topic() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"txtSearch\"]")).sendKeys("Characteristics of living organisms");
		
		driver.findElement(By.xpath("//*[@id=\"search\"]")).click();
		
	}
	@Then("^Open logout$")
	public void Open_logout() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("/html/body/nav/div/div[2]/div[2]/li/a")).click();
		driver.findElement(By.xpath("/html/body/nav/div/div[2]/div[2]/li/ul/form/li[3]/a")).click();
		System.out.println("I logout and Now Browser closed");
		
		
	}
	@And("^Close browser$")
	public void Close_browser() throws InterruptedException {
		driver.quit();
	}
}
