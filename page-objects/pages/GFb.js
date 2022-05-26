import { Selector, t } from "testcafe";


class GFb {
    constructor() {
        this.cbm = Selector('#ContentPlaceHolder1_txtuserId')
        this.cpwd = Selector('#ContentPlaceHolder1_txtpassword')
        this.clg = Selector('#ContentPlaceHolder1_btnlogin')
        this.emsg=Selector('#ContentPlaceHolder1_lblerror')
    }

    async ceform(ue1, upwd1) {
        await t
            .typeText(this.cbm, ue1, { paste: true, replace: true })
            .typeText(this.cpwd, upwd1,{ paste: true, replace: true })
    }
}

export default GFb