import { Selector, t } from "testcafe";

class LoginPage {
    constructor() {
        this.user_email = Selector('#user_login')
        this.user_pswd = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
    }

    async loginToApp(username, password) {
        await t
            .typeText(this.user_email, username, { paste: true, replace: true })
            .typeText(this.user_pswd, password, { paste: true, replace: true })
            .click(this.submitButton)
    }
}
export default LoginPage