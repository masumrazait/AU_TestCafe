import { Selector } from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

test('My First testCafe test', async t =>{

    // here goes testCafe code
    await t.typeText('#developer-name',"Mahi RAZA")
    await t.typeText('#comments',"Hello Tester")
    await t.click('#submit-button')

    //Expect Comparison
    
    await t.expect(Selector('#article-header').innerText).contains('Mahi')
})