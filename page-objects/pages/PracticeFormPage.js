import { Selector, t } from "testcafe";

class PracticeFormPage {
    constructor() {
        //this.formSelect = Selector('h5').withText('Forms')
        this.name = Selector('#g3-name')
        this.email_id = Selector('#g3-email')
        this.comments = Selector('#contact-form-comment-g3-comment')
        // this.mobile_num = Selector('#userNumber')
        this.submitbtn=Selector('.pushbutton-wide')
        this.msg=Selector('h3').withText('Message Sent')

    }

    async form(Name, Email, Comments) {
        await t
            .typeText(this.name, Name, { paste: true, replace: true })
            .typeText(this.email_id, Email, { paste: true, replace: true })
            .typeText(this.comments, Comments, { paste: true, replace: true })
            //.typeText(this.mobile_num, mobile, { paste: true, replace: true })
    }
}
export default PracticeFormPage