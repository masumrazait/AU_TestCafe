import { Selector } from "testcafe"
import GFb from '../page-objects/pages/GFb'

const gfb = new GFb()


fixture`Fb Test`
    .page`https://www.cemkolaghat.org/student/login.aspx`

    test('login with invalid credentials', async t => {
        gfb.ceform('gowthami@ggggg.fff', 'Gowthu@123')
        await t.click(gfb.clg)
        await t.expect(gfb.emsg.innerText).contains('Invalid username')
    })