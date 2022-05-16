import { Selector } from "testcafe";
import FeedbackPage from "../page-objects/pages/FeedbackPage";

const feedbackPage = new FeedbackPage()

//prettier-ignore
fixture`User can shared the feedback and experience`
    .page`http://zero.webappsecurity.com/`

//first test Case User try to share feedback with invalid details 
test('Shared feedback with invalid details', async t => {
    await t.click(feedbackPage.feedback_tab);
    await t.expect(feedbackPage.feedback_form.exists).ok();
    await t.typeText(feedbackPage.Name_input, 'AutomationTester', { paste: true });
    await t.typeText(feedbackPage.email_input, 'netcse02@gmail.com', { paste: true })
    await t.typeText(feedbackPage.subject_input, 'user can not login successfully', { paste: true });
    await t.typeText(feedbackPage.comment_input, 'Hi Team am try to loging my account with valid credential but am unable to loging and also i am getting error message', { paste: true });
    await t.expect(feedbackPage.send_message_btn.exists).ok();
    await t.click(feedbackPage.send_message_btn);

    //Assertion
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments, AutomationTester.')

})