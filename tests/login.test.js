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
        await t.expect(loginPage.err_msg.innerText).contains('Login and/or password are wrong.')

    })

test('Login with valid credential',
    async t => {
        await t.click(navbar.signin_btn)
        loginPage.loginToApp('Masumit1526@gmail', 'invalidpassword')
        await t.expect(loginPage.err_msg.innerText).contains('Login and/or password are wrong.')

    })