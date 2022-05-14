import { Selector } from "testcafe";

class Navbar{
    constructor(){
        this.search_box=Selector('#searchTerm');
        this.signin_btn=Selector('#signin_button');
        //Selector
    }   
}
export default Navbar