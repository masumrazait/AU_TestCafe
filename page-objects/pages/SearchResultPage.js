import { Selector } from "testcafe";

class SearchResultPage {
    constructor() {
        this.result_tittle = Selector('h2')
        this.search_result = Selector('div')
        
    }
}
export default SearchResultPage