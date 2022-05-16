import { t } from "testcafe";

export async function login(username, password) {
    await t.click('#signin_button');
    await t.typeText(user_email, 'netcse02@gmail.com', { paste: true });
    await t.typeText(user_pswd, 'netcse', { paste: true })
    await t.expect(submitButton.exists).ok();
    await t.click(submitButton)
    await t.expect(err_msg).contains('Login and/or password are wrong.')

}