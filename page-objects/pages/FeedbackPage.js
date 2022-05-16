import { Selector, t } from "testcafe";

class FeedbackPage {
    constructor() {
        this.feedback_tab = Selector('#feedback');
        this.feedback_form = Selector('.form-inputs');
        this.Name_input = Selector('#name');
        this.email_input = Selector('#email');
        this.subject_input = Selector('#subject');
        this.comment_input = Selector('#comment');
        this.send_message_btn = Selector('.btn-primary')
        this.message = Selector('.offset3.span6')
    }
}
export default FeedbackPage