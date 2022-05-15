import { Selector } from "testcafe";
import Navbar from '../page-objects/components/Navbar'

const navbar = new Navbar();

//prettier-ignore
fixture`Search Navigation Funtionality`
    .page`http://zero.webappsecurity.com/index.html`

test('User can user search navigation bar', async t => {
    //Selector
    const result_tittle = Selector('h2')
    const search_result = Selector('div').innerText

    //Action 
    await t.click(navbar.searchBox)
    navbar.searchBox('online bank');
    
    //Assertion
    await t.expect(result_tittle.exists).ok()
    await t.expect(navbar.searchBox.exists).ok()
    await t.expect(search_result).contains('Zero - Free Access to Online Banking')
})