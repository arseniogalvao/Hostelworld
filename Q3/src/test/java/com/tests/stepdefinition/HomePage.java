package com.tests.stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.fail;

/**
 * Created by i2saga on 01/05/2017.
 */
public class HomePage {
    private static final String LINKED_TEXT = "linkedText";
    private static final String XPATH = "xpath";
    private static final String ID = "id";
    private static final String BY_NAME = "name";
    private static String base = "";
    WebDriver dr;


    @Given("^access to link \"(.*)\"$")
    public void OpenBrowser(String LinkPage){
        //Chrome driver
        System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
        dr = new ChromeDriver();
        dr.get(LinkPage);
        /*Collection<String> s = new LinkedList<String>();
        s.addAll(dr.getWindowHandles());
        Iterator<String> iter = s.iterator();
        while(iter.hasNext()){
            System.out.print(iter.toString());
            dr.switchTo().window(iter.next().toString());
        }*/
    }

    @When("^resolution is \"(.*)\" \"(.*)\"$")
    public void resolutionPage(Integer X, Integer Y){
        if (X==0 && Y ==0)
            dr.manage().window().maximize();
        else
            dr.manage().window().setSize(new Dimension(X, Y));
    }

    @And("^insert word to find \"(.*)\"$")
    public void InsertWord(String wordToFind) {
        findElementAndClick("home-search-keywords", ID);
        writeOnElemtentString("home-search-keywords", wordToFind, ID);
        findElementAndClick("//*[@id=\"ui-id-3\"]/a", XPATH);
        findElementAndClick("html/body/div[1]/div/div/div[7]/div[1]/div/div/form/div[3]/div/button", XPATH);
        //dr.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }

    @And("^click menu SotByName$")
    public void ClickSort() {
        ((JavascriptExecutor)dr).executeScript("scroll(0,600)");
        ((JavascriptExecutor)dr).executeScript("scroll(0,-600)");
        dr.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Integer pageSize = dr.manage().window().getSize().getWidth();
        if (pageSize <= 640)
            findElementAndClick("//*[@id=\"pagebody\"]/div[1]/div/div/div[17]/dl/dd[2]/a/i", XPATH);
        else
            findElementAndClick("//*[@id=\"pagebody\"]/div[1]/div/div/div[17]/div[4]/div/div/div/div/dl[1]/dd[2]/i", XPATH);
        findElementAndClick("//*[@id=\"sortByName\"]", XPATH);
    }

    @And("^validate the asort name result$")
    public void AssertValues() {
        System.out.print("==>Validation: ");
        System.out.print(dr.findElement(By.xpath("//*[@id=\"searchResults_100\"]/div[1]/h2/a")).getText());
    }

    @And("^Close and Quit$")
    public void CloseBrowser() {
        dr.quit();
    }

    ///////Aux Functions/////////////////////////
    private void findElementAndClick(String identifier, String Type) {
        if (Type.equals(XPATH)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.xpath(identifier)));
            myDynamicElement.click();
        }else  if (Type.equals(LINKED_TEXT)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.linkText(identifier)));
            myDynamicElement.click();
        }else  if (Type.equals(ID)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.id(identifier)));
            myDynamicElement.click();
        }else  if (Type.equals(BY_NAME)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.name(identifier)));
            myDynamicElement.click();
        }else {
            fail("Not implemented");
        }
    }
    private void writeOnElemtentString (String identifier,String test, String Type) {
        if (Type.equals(XPATH)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.xpath(identifier)));
            myDynamicElement.clear();
            myDynamicElement.sendKeys(test);

        }else if (Type.equals(LINKED_TEXT)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.linkText(identifier)));
            myDynamicElement.clear();
            myDynamicElement.sendKeys(test);
        }else if (Type.equals(ID)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.id(identifier)));
            myDynamicElement.clear();
            myDynamicElement.sendKeys(test);
        }else  if (Type.equals(BY_NAME)) {
            WebElement myDynamicElement = (new WebDriverWait(dr, 15))
                    .until(ExpectedConditions.elementToBeClickable(By.name(identifier)));
            myDynamicElement.clear();
            myDynamicElement.sendKeys(test);
        }else {
            fail("Not implemented");
        }
    }
    //////////////////
    private void changeToTopHandle(){
        base = dr.getWindowHandle();

        Collection<String> s = new LinkedList<String>();
        s.addAll(dr.getWindowHandles());
        Iterator<String> iter = s.iterator();

        while(iter.hasNext()){
            System.out.print(iter.toString());
            dr.switchTo().window(iter.next().toString());
        }
    }
    private void returnToBottomHandle(){
        dr.switchTo().window(base);
    }
//////////////////////
/*
    @BeforeClass(alwaysRun = true)
    public void setUp() throws Exception {
        //dr = new FirefoxDriver();
        baseUrl = "http://gisupg01.i2s.local/";
        dr.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @AfterClass(alwaysRun = true)
    public void tearDown() throws Exception {
        dr.quit();
        String verificationErrorString = verificationErrors.toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }
*/
////////////////////////////////
}
