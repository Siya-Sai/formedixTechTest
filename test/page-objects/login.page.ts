import Page from "./page.js";
import chai from "chai";

class LoginPage extends Page {
  constructor() {
    super();
  }
  /**Page objects */
  get loginNameInput() {
    return $('//input[@id="Login Name - Login Form"]');
  }
  get passwordInput() {
    return $('//input[@id="Passowrd - Login Form"]');
  }
  get loginBtn() {
    return $('//span[@class="MuiButton-label button-label"]');
  }
  get loginLabel() {
    return $('//h1[normalize-space()="Login"]')
  }

  /**Page actions */

  async enterLoginName(loginName: string) {
    try {
      await this.typeInto(await this.loginNameInput, loginName);
    } catch (err) {
      err.message = `Error entering login name: ${loginName}, ${err.message}`;
      throw err;
    }
  }

  async enterPassword(password: string) {
    try {
      await this.typeInto(await this.passwordInput, password);
    } catch (err) {
      err.message = `Error entering password: ${password}, ${err.message}`;
      throw err;
    }
  }

  async clickLoginBtn() {
    try {
      await this.loginBtn.scrollIntoView()
      await this.click(await this.loginBtn);
    } catch (err) {
      err.message = `Error clicking button, ${err.message}`;
      throw err;
    }
  }

  async loginToBingoLine(loginName: string, password: string) {
    try {
      await this.enterLoginName(loginName);
      await this.enterPassword(password);
      await this.clickLoginBtn();
    } catch (err) {
      throw err;
    }
  }
}
export default new LoginPage();
