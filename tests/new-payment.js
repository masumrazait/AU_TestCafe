import { fixture, Selector } from "testcafe";
import { login } from "./helper";

//prettier-ignore
fixture`New payment test`
    .page`http://zero.webappsecurity.com/index.html`

test.before(async t => {
    await login('username', 'password');

})