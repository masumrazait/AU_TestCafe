import { Selector } from "testcafe";

//prettier-ignore
fixture`User can shared the feedback and experience`
    .page`http://zero.webappsecurity.com/`

//first test Case User try to share feedback with invalid details 
test('Shared feedback with invalid details', async t => {

    //Selector
    const feedback_tab = Selector('#feedback');
    const feedback_form = Selector('.form-inputs');
    const Name_input = Selector('#name');
    const email_input = Selector('#email');
    const subject_input = Selector('#subject');
    const comment_input = Selector('#comment');
    const send_message_btn = Selector('.btn-primary')
    const message = Selector('.offset3.span6').innerText


    //Action
    await t.click(feedback_tab);
    await t.expect(feedback_form.exists).ok();
    await t.typeText(Name_input, 'AutomationTester', { paste: true });
    await t.typeText(email_input, 'netcse02@gmail.com', { paste: true })
    await t.typeText(subject_input, 'user can not login successfully', { paste: true });
    await t.typeText(comment_input, 'Hi Team am try to loging my account with valid credential but am unable to loging and also i am getting error message', { paste: true });
    await t.expect(send_message_btn.exists).ok();
    await t.click(send_message_btn);

    //Assertion
    await t.expect(message).contains('Thank you for your comments, AutomationTester.')

})