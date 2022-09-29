var i = 0
var result = ""

function validate(){
    var name = document.forms["form"]["name"].value
    var phone = document.forms["form"]["phone"].value
    var email = document.forms["form"]["email"].value 
    var gender = document.forms["form"]["gender"].value
    var age = document.forms["form"]["age"].value
    var district = document.forms["form"]["district"].value
    var postal = document.forms["form"]["postal"].value
    var address = document.forms["form"]["address"].value
    
    var errormsg = document.getElementById("errormsg")
    if(name.length < 2){
        errormsg.innerText = "Name must be more than 2 characters"
    }else if(!phoneValidation(phone)){
        errormsg.innerText = "Phone number in invalid"
    }else if(!emailValidation(email)){
        errormsg.innerText = "Email must be ends with @mail.com"
    }else if(gender == 0){
        errormsg.innerText = "Gender must be choose"
    }else if(district == ""){
        errormsg.innerText = "Please input your district"
    }else if(postal == ""){
        errormsg.innerText = "Please input you postal"
    }else{
        alert("Registeres")
        i++
    }
}

function emailValidation(email){
    if(email.length < 10){
        return false;
    }else if(email.startsWith("@") || email.startsWith(".")){
        return false;
    }else if(email.endwith("@") || email.endsWith(".")){
        return false;
    }else return true;
}

function phoneValidation(phone){
    if(phone.length < 8 || phone.length > 13){
        return false;
    }else{
        for(let i = 0; i < phone.length; i++){
            if(!(phone[i] >= "0" && phone[i] <= "9")){
                return false;
            }
        }
        return true;
    }
}