import { Selector } from 'testcafe'

// prettier-ignore
fixture`Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`

    //Hook before, beforeEach, after, afterEach
    .before(async t => {
        //Test setup goes here
        //await runDatabaseReset()
        //await seedTestData()

    })
    .beforeEach(async t => {
        //Runs Before each test 
        await t.maximizeWindow()
        await t.setTestSpeed(1)             //for debug the ui speed we need to declear speed 
    })
    .after(async t => {
        //Cleaning test Data
        //Loggon and sending data to monitoring systems
    })
    .afterEach(async t => {

    })

test('My First testCafe test', async t => {

    // here goes testCafe code
    const developer_name_input = Selector('#developer-name')
    const developer_comments = Selector('#comments')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    //take screenShot
    //await t.takeScreenshot({fullPage:true})
    //take ScreenShot of Element
    //await t.takeElementScreenshot(submit_button)

    await t.typeText(developer_name_input, 'Md Bittu Ansari')
    await t.typeText(developer_comments, 'Hello Developer')
    await t.click(submit_button)
    await t.expect(articleText).contains("Md Bittu Ansari")

    await t
        .expect(Selector('#article-header').innerText).contains('Bittu')})