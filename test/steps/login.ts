import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";
import landingPage from "../page-objects/landing.page.js";
import loginPage from "../page-objects/login.page.js";

Given(/^bingonline page is opened$/, async function () {
  await landingPage.navigateTo("https://m.bingoliner.com/mv2/login");
  await chai.expect(loginPage.loginLabel.isDisplayed);
});

When(/^user enters (.*) (.*)/, async function (loginName, password) {
  await loginPage.loginToBingoLine(loginName, password);
  await browser.pause(1000);
});

Then(/^pop up modal with (.*) is displayed$/, async function (errorMessage) {
   let actuallMessage = await loginPage.getErrorMessage();
  await chai.expect(actuallMessage).to.equal(errorMessage)

});
