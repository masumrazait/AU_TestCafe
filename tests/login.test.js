import { Selector } from "testcafe"
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()


fixture`Login Test`
    .page`http://zero.webappsecurity.com/`

test('Login with Invalid credential',
    async t => {
        await t.click(navbar.signin_btn)
        loginPage.loginToApp('Invalid username', 'invalid password')
        const err_msg = Selector('.alert-error').innerText;
        await t.expect(err_msg).contains('Login and/or password are wrong.')
        await t.click(loginToApp.submitButton)
    })


test('Login with Valid credential',
    async t => {
        await t.click(navbar.signin_btn)
        loginPage.loginToApp('username', 'password')
        await t.click(loginToApp.submitButton)
        await t.expect(loginToApp.submitButton.exists).ok()

    })