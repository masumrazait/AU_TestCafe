import { Selector, t } from "testcafe";


class LoginPagePr {
    constructor() {
        this.un = Selector('#username')
        this.pwd = Selector('#password')
        this.sub = Selector('#Login')
        this.emsg=Selector('#error')
    }

    async Lform(ue, upwd) {
        await t
            .typeText(this.un, ue, { paste: true, replace: true })
            .typeText(this.pwd, upwd,{ paste: true, replace: true })
    }
}

export default LoginPagePr