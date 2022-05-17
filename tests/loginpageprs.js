import { Selector } from "testcafe";
import LoginPagePr from "../page-objects/pages/loginPagePr";

const logincm = new LoginPagePr()

fixture`login scenario`
    .page`https://login.salesforce.com/?locale=in`

test('login with invalid credentials', async t => {
    logincm.Lform('gowthami@ggggg.fff', 'Gowthu@123')
    await t.click(logincm.sub)
    await t.expect(logincm.emsg.innerText).contains('Please check your username and password')
})




