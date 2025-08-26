class LoginPage {

    //object locators
    get usernameTextbox(){
        return $('#username')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginButton(){
        return $('button[type="submit"]')
    }
    get loginMessage(){
        return $('#flash')
    }

    //atomic or single function
    async login(username, password, loginButton){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()

    }

    async checkMessage(msg){
        await expect(this.loginMessage).toHaveText(msg)
    }
}
module.exports = new LoginPage()