import { Selector } from "testcafe";
import Navbar from '../page-objects/components/Navbar'
import SearchResultPage from "../page-objects/pages/SearchResultPage"


const navbar = new Navbar();
const searchResultPage = new SearchResultPage();

//prettier-ignore
fixture`Search Navigation Funtionality`
    .page`http://zero.webappsecurity.com/index.html`

test('User can user search navigation bar',
    async t => {
        navbar.search('online bank')
        await t.expect(searchResultPage.result_tittle.exists).ok()
        await t.expect(navbar.searchBox.exists).ok()
        await t.expect(searchResultPage.search_result.innerText).contains('Zero - Free Access to Online Banking')
    })