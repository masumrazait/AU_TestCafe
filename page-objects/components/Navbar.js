import { Selector, t } from "testcafe"

class Navbar {
    constructor() {
        this.searchBox = Selector('#searchTerm')
        this.signin_btn = Selector('#signin_button')
        //Selector
    }

    async search(test) {
        await t
            .typeText(this.searchBox, test, { paste: true, replace: true })
            .pressKey('enter')
    }
}
export default Navbar