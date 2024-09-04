const puppeteer = require('puppeteer')

const codeObj = require('./codes')

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = '23mcs006@nith.ac.in'
const password = 'Jatin@29'

let browserOpen = puppeteer.launch({
  headless: false,
  args: ['--start-maximized'],
  defaultViewport: null
})

let page

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage()
    return browserOpenPromise;
}).then(function(newTab){
    page = newTab
    let hackerRankOpenPromise = newTab.goto(loginLink)
    return hackerRankOpenPromise
})
.then(function(){
   let emailIsEntered = page.type("input[type='text']",email,{delay:50})
   return emailIsEntered
}).then(function(){
    let passwordIsEntered = page.type("input[type='password']",password,{delay:50})
    return passwordIsEntered
})
.then(function(){
    let loginButtonClicked = page.click("button[type='button']",{delay:50})
    return loginButtonClicked
})
.then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-cd-topic-slug="algorithms"]',page)
    return clickOnAlgoPromise
}).then(function(){
    let getToWarmUp = waitAndClick('input[value="warmup"]',page)
    return getToWarmUp
})
// .then(function(){
//     let waitfor10Seconds = page.waitFor(10000)
//     return waitfor10Seconds
// })
.then(function(){
    let allChanllangePromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
    return allChanllangePromise;
})
.then(function(questionArr){
    console.log('no of questions', questionArr.length)
    let questionWillBeSolved = questionSolver(page,questionArr[0],codeObj.answers[0])
    return questionWillBeSolved
})



function waitAndClick(selector, cPage) {
    return new Promise(function(resolve, reject){
      // wait for the selector to be available
      let waitForModelPromise = cPage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModel = cPage.click(selector)
            return clickModel          
        }).then(function(){
          // click on the element
          resolve()
        }).catch(function(err){
          reject()
        })
      })
  }

  function questionSolver( page,question,answer){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked = question.click()
        questionWillBeClicked.then(function(){
            let editorinFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page)
            return editorinFocusPromise
        }).then(function(){
            return waitAndClick('.checkbox-input',page)
        }).then(function(){
            return page.waitForSelector('textarea.custominput',page)
        }).then(function(){
            return page.type('textarea.custominput',answer,{delay:10})
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:100})
            return AisPressed
        }).then(function(){
            let XIsPressed = page.keyboard.press('X',{delay:100})
            return XIsPressed
        }).then(function(){
            let ctrlisUnPressed = page.keyboard.up('Control')
            return ctrlisUnPressed
        }).then(function(){
        let MainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page)
        return MainEditorInFocus
        }).then(function(){
            let ctrlisPressed = page.keyboard.down('Control')
            return ctrlisPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:10})
            return AisPressed
        }).then(function(){
            let VisPressed = page.keyboard.press('V',{delay:10})
            return VisPressed
        }).then(function(){
            let ctrlisUnPressed = page.keyboard.up('Control')
            return ctrlisUnPressed
        }).then(function(){
            return page.click('.hr-monaco__run-code',{delay:50})
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();

        })
    })
  }