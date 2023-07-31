import { Given, When, Then, } from "@cucumber/cucumber";
import chai from "chai";
import landingPage from "../page-objects/landing.page.js";
import loginPage from "../page-objects/login.page.js";


Given(/^ryze page is opened$/, async function () {
  await landingPage.open("https://ryze-staging.formedix.com/sign-in");
});


When(/^user enters (.*) (.*)/, async function (loginName, password) {
  await loginPage.signInToRyze(loginName, password);
  
});


Then(/^check tech study menu list$/, async function () {
	await landingPage.goToTechStudyMenu()
  await landingPage.validateMenuItem()
});


Then(/^navigate to forms view$/, async function () {
	await landingPage.navigateToForm()
});





