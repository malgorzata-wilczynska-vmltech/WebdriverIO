describe('Demo Tests', function(){

it('Example Test', async() => {
    
    browser.url('https://google.com') 
    
   //await $('#W0wltc').click()

    await $('[name="q"]').setValue('WebdriverIO')

    // await $('[jsname="uFMOof"]').click()

    browser.keys('Enter')

    browser.pause(5000)

    });

})