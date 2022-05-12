import { Selector } from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    //Hook before, beforeEach, after, afterEach
    .before(async t=>{
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()

    })
    .beforeEach(async t=> {
        //Runs Before each test    
        await t.setTestSpeed(1)             //for debug the ui speed we need to declear speed 
    })
    .after(async t=> {
        //Cleaning test Data
        //Loggon and sending data to monitoring systems
    })
    .afterEach(async t=> {
        //Runs after each test
    })

test('My First testCafe test', async t =>{

    // here goes testCafe code
    await t.typeText('#developer-name',"Md Bittu Ansari")
    await t.typeText('#comments',"Hello Tester")
    await t.click('#submit-button')
    
    //wait but its not good way 
    await t.wait(3000)

    //Expect Comparison
    await t.expect(Selector('#article-header').innerText).contains('Bittu')
})