import { Selector } from "testcafe";

import PracticeFormPage from "../page-objects/pages/PracticeFormPage";

const practiceForm = new PracticeFormPage()

fixture`User enter data in form`
    .page`https://demoqa.com/automation-practice-form`

test('User FIlling data with ',
    async t => {
        await t.click(practiceForm.formSelect)

    })