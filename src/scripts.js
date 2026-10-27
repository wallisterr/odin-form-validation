import _ from 'lodash'
import './styles.css'

let formValidation = (()=>{
    const form = document.querySelector(".form")
    const countryDiv = document.querySelector(".countryDiv")
    const postalCodeDiv = document.querySelector(".postalCodeDiv")
    const emailDiv = document.querySelector(".emailDiv")
    const passwordDiv = document.querySelector(".passwordDiv")
    const passwordConfirmationDiv = document.querySelector(".passwordConfirmationDiv")
    
    const countryInput = document.querySelector("#countryInput")
    const postalCodeInput = document.querySelector("#postalCodeInput")
    const emailInput = document.querySelector("#emailInput")
    const passwordInput = document.querySelector("#passwordInput")
    const passwordConfirmationInput = document.querySelector("#passwordConfirmationInput")
    
    let countryError = NaN
    let postalCodeError = NaN
    let emailError = NaN
    let passwordError = NaN
    let passwordConfirmationError = NaN

    let countryErrorSpan = document.createElement("span")
    let postalCodeErrorSpan = document.createElement("span")
    let emailErrorSpan = document.createElement("span")
    let passwordErrorSpan = document.createElement("span")
    let passwordConfirmationErrorSpan= document.createElement("span")

    countryDiv.append(countryErrorSpan)
    postalCodeDiv.append(postalCodeErrorSpan)
    emailDiv.append(emailErrorSpan)
    passwordDiv.append(passwordErrorSpan)
    passwordConfirmationDiv.append(passwordConfirmationErrorSpan)

    const validCountries = ["switzerland","germany","france","netherlands"]
    
    countryInput.addEventListener("input",e=>{
        if(!validCountries.includes(countryInput.value.toLowerCase())){
            countryError = "only countries allowed are: germany, switzerland, france and netherlands"
            countryErrorSpan.innerText = countryError
        }
        else{
            countryError = ""
            countryErrorSpan.innerText = countryError
            if(countryInput.value.toLowerCase()=="germany"){
                postalCodeInput.setAttribute("maxlength", "5")
            }
            if(countryInput.value.toLowerCase()=="switzerland"){
                postalCodeInput.setAttribute("maxlength","4")
            }
            if(countryInput.value.toLowerCase()=="netherlands"){
                postalCodeInput.setAttribute("maxlength","6")
            }
        }
        
    })
    postalCodeInput.addEventListener("input",e=>{
        if(countryInput.value.toLowerCase() == "germany" && !/[0-9][0-9][0-9][0-9][0-9]/.test(postalCodeInput.value)){
            postalCodeError = "germany only has 5 numbers"
            postalCodeErrorSpan.innerText = postalCodeError
        }
        if(countryInput.value.toLowerCase() == "germany" && /[0-9][0-9][0-9][0-9][0-9]/.test(postalCodeInput.value)){
            postalCodeError = ""
            postalCodeErrorSpan.innerText = postalCodeError
        }
        if(countryInput.value.toLowerCase() == "netherlands" && /[0-9][0-9][0-9][0-9]/.test(postalCodeInput.value)){
            postalCodeError = "pass"
            postalCodeErrorSpan.innerText = postalCodeError
        }
    })
    
    emailInput.addEventListener("input",e=>{
        if (emailInput.validity.typeMismatch){
            emailError = "this doesnt look like an email"
            emailErrorSpan.innerText = emailError
        }else{
            emailErrorSpan.innerText = ""
            emailError = ""
        }
    })


    passwordInput.addEventListener("input",e=>{

        if(!/[1234567890]/.test(passwordInput.value)){
            passwordError = "password doesnt have a number"
            passwordErrorSpan.innerText = passwordError
        }
        else if(!/\s/.test(passwordInput.value)){
            passwordError = "add a space please"
            passwordErrorSpan.innerText = passwordError
        }
        else{
            passwordError = ""
            passwordErrorSpan.innerText = passwordError
        }
        

        if(passwordConfirmationInput.value!=passwordInput.value){
            passwordConfirmationError = "passwords dont match"
            passwordConfirmationErrorSpan.innerText = passwordConfirmationError
        }else{
            passwordConfirmationError = ""
            passwordConfirmationErrorSpan.innerText = passwordConfirmationError
        }
    })

    passwordConfirmationInput.addEventListener("input",e=>{
        if(passwordConfirmationInput.value!=passwordInput.value){
            passwordConfirmationError = "passwords dont match"
            passwordConfirmationErrorSpan.innerText = passwordConfirmationError
        }else{
            passwordConfirmationError = ""
            passwordConfirmationErrorSpan.innerText = passwordConfirmationError
        }
    })

    form.addEventListener("submit",e=>{
        if (!emailError==""){
            e.preventDefault()
        }
    })



})()