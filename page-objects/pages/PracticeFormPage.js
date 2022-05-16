import { Selector,t } from "testcafe";

class PracticeFormPage{
    constructor(){
        this.formSelect=Selector('div').withText('Forms')

    }
}
export default PracticeFormPage