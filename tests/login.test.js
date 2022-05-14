import { Selector } from "testcafe";

fixture `Login Test`
    .page `http://zero.webappsecurity.com/`

    .before(async t=>{
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()

    })

    .beforeEach(async t=>{
        await t.maximizeWindow();
        await t.setTestSpeed(1);
    })

    .after(async t=>{
        //Cleaning test Data
        //Loggon and sending data to monitoring systems
    })

    .afterEach(async t=>{
        //Runs after each test
    })

    test('Login with Invalid credential',async t=>{
        const signin_btn=Selector('#signin_button');
        const user_form = Selector('#login_form');
        const user_email=Selector('#user_login');
        const user_pswd=Selector('#user_password');
        const login=Selector('.btn-primary');
        const err_msg=Selector('.alert-error').innerText


        //Action
        await t.click(signin_btn);
        await t.expect(user_form.exists).ok();
        await t.typeText(user_email,'netces02',{paste:true});
        await t.typeText(user_pswd,'MAsumit1526@',{paste:true});
        await t.expect(login.exists).ok();
        await t.click(login)
        await t.expect(err_msg).contains('Login and/or password are wrong.')

    })


    test('Login with Valid credential',async t=>{
        const signin_btn=Selector('#signin_button');
        const user_form = Selector('#login_form');
        const user_email=Selector('#user_login');
        const use_pswd=Selector('#user_password');
        const login=Selector('.btn-primary');
        const err_msg=Selector('.alert-error').innerText


        //Action
        await t.click(signin_btn);
        await t.expect(user_form.exists).ok();
        await t.typeText(user_email,'username',{paste:true});
        await t.typeText(use_pswd,'password',{paste:true});
        await t.expect(login.exists).ok();
        //await t.click(login)
        //await t.expect(err_msg).contains('Login and/or password are wrong.')

    })