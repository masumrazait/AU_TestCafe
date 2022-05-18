import { ClientFunction, Selector } from "testcafe";

const dataSet =require('../../data/data.json')

const getURL=ClientFunction(()=>window.location)

fixture(`Data driven test demo`)

dataSet.forEach(data=>{
    console.log(data)
    test.page(`https://the-internet.herokuapp.com/login`)
    (`login page-${data.expectedResult}`,async t=>{
        await t
        .maximizeWindow()
        .typeText(Selector('input#username'),data.username)
        .typeText(Selector('input#password'),data.password)
        .click('button')
        t.expect(Selector("div#flash").innerText,data.expectedResult)
    })
})