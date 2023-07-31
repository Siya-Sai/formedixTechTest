import Page from "./page.js";
import chai from "chai";

class LoginPage extends Page {
  constructor() {
    super();
  }
  /**Page objects */
  get usernameInput() {
    return $('//input[@id="username"]');
  }
  get passwordInput() {
    return $('//input[@id="password"]');
  }
  get signInButton() {
    return $('//button[@id="btnSubmit"]');
  }
  get signInLabel() {
    return $('//h1[normalize-space()="Sign in"]')
  }

  get modalMessageLabel() {
    return $('//p[@id="alert-dialog-description"]')
  }

  /**Page actions */

  async enterUsername(username: string) {
    try {
      await this.typeInto(await this.usernameInput, username);
    } catch (err) {
      err.message = `Error entering login name: ${username}, ${err.message}`;
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

  async clicksignInBtn() {
    try {
      await this.signInButton.scrollIntoView()
      await this.signInButton.click();
    } catch (err) {
      err.message = `Error clicking button, ${err.message}`;
      throw err;
    }
  }

  async signInToRyze(loginName: string, password: string) {
    try {
      await this.enterUsername(loginName);
      await this.enterPassword(password);
      await this.clicksignInBtn();
    } catch (err) {
      throw err;
    }
  }

  async getErrorMessage(){
    await this.modalMessageLabel.getValue();
  }
}
export default new LoginPage();
