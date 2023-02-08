import Page from "./page.js"
import chai from "chai"

class LandingPage extends Page{
    constructor() {
        super()
    }
    
    /**Page objects */
    get confirmProvinceBtn() {return $('//span[normalize-space()="Confirm my province"]')}

    // /**Page actions */
    // async clickConfirmProvince(){
    //     await this.confirmProvinceBtn.click()
    
// }
    
}
export default new LandingPage()