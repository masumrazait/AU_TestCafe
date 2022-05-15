import { Selector } from "testcafe";
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar()

//prettier-ignore
fixture`Send forgotten Password test`
    .page`http://zero.webappsecurity.com/index.html`

    .before(async t => {
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()
    })

    .beforeEach(async t => {
        await t.maximizeWindow();
        await t.setTestSpeed(1);
    })

    .after(async t => {
        //Cleaning test Data
        //Loggon and sending data to monitoring systems
    })

    .afterEach(async t => {
        //Runs after each test
    })


test('User want to reset password', async t => {
    //stared code
    const user_form = Selector('#login_form')
    const forgot_paswd_link = Selector('a').withText('Forgot your password ?');
    const forgot_paswd_form = Selector('#send_password_form');
    const user_email = Selector('#user_email');
    const sent_pswd_btn = Selector('.btn-primary');
    const message = Selector('div').innerText

    //Action
    //await t.expect(navbar.signin_btn.exists).ok();
    await t.click(navbar.signin_btn);
    await t.expect(user_form.exists).ok();
    await t.click(forgot_paswd_link);
    await t.expect(forgot_paswd_form.exists).ok();
    await t.typeText(user_email, 'netcse02@gmail.com', { paste: true });
    await t.click(sent_pswd_btn);

    //Assertion
    await t.expect(message).contains('email: netcse02@gmail.com');

})