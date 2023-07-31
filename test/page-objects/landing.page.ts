import Page from "./page.js"
import chai from "chai"

const expect = chai.expect;

class LandingPage extends Page{
    constructor() {
        super()
    }
    
    /**Page objects */
    get repositoryIcon() {return $('//p[normalize-space()="Repository"]')}
    get studiesCard() {return $('//span[normalize-space()="Studies"]')}
    get techStudyListMenuButton() {return $('//span[@class="fdxicon-regular fdx-menu dropdown-toggle icon"]')}
    get viewMenuItem() {return $('#fdxMdbContainerListItem0View')}
    get formsCard() {return $('//span[@id="FORMTypeName"]')}
    get dataAcquisitionBtn() {return $('//span[@id="dataAcquisitionName"]')}

    // /**Page actions */
    async goToTechStudyMenu() {
        await this.repositoryIcon.click();
        await this.studiesCard.click();
        await this.techStudyListMenuButton.click();
    }

    async validateMenuItem() {
        const menuItemText = await this.viewMenuItem.getText();
        expect(menuItemText).to.equal("View");
    }

    async navigateToForm() {
        await this.viewMenuItem.click();
        await this.dataAcquisitionBtn.click();
        await this.formsCard.click();

    }

    
    
}
export default new LandingPage()