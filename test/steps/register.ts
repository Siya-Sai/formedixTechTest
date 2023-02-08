import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";
import landingPage from "../page-objects/landing.page.js";
import loginPage from "../page-objects/login.page.js";

Given(/^bingonline page is opened$/, async function () {
  await landingPage.navigateTo("https://m.bingoliner.com/mv2/login");
  await chai.expect(loginPage.loginLabel.isDisplayed)
});

When(/^user enters (.*) (.*)/, async function (loginName, password) {
  await loginPage.loginToBingoLine(loginName, password);
});
