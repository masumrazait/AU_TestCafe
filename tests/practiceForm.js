import { Selector } from "testcafe";

import PracticeFormPage from "../page-objects/pages/PracticeFormPage";

const practiceForm = new PracticeFormPage()

fixture`User enter data in form`
    .page`https://automationpanda.com/contact/`

test('User FIlling data with ',
    async t => {
        practiceForm.form('Altaf','Altaf@gmail.com','Hi team thanks for developer this website')
        await t.click(practiceForm.submitbtn)
        await t.expect(practiceForm.msg.innerText).contains('Message Sent')
        console.log(practiceForm.msg.innerText)


    })