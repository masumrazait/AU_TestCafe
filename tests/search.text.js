import { Selector } from "testcafe";
import xPathToCss from 'xpath-to-css'

//prettier-ignore
fixture `Search Navigation Funtionality`
.page`http://zero.webappsecurity.com/index.html`

test('User can user search navigation bar',async t=>{
    //Selector
    const search_box=Selector('#searchTerm');
    const result_tittle=Selector('h2');
    const search_result=Selector('div').innerText

    //XPATH TO CSS EXAMPLE
    const xPath ='/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/form[1]/input[1]'
    const css =xPathToCss(xPath);
    console.log(css);

    //Action 
    await t.typeText(search_box,'online bank',{paste:true});
    await t.pressKey('enter');

    //Assertion
    await t.expect(search_box.exists).ok();
    await t.expect(result_tittle.exists).ok();
    await t.expect(search_result).contains('Zero - Free Access to Online Banking');


})