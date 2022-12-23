const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
   e.preventDefault();
    validation();
});

function validation(){
     userValue = username.value.trim(); 
     emailValue = email.value.trim();
     phoneValue = phonenumber.value.trim();
     passwordValue = password.value.trim();
     cpasswordValue = cpassword.value.trim();

     if(userValue === "" ){
        setErrorMsg(username,"username cannot be empty");
     }else if(userValue.length < 3 ){
        setErrorMsg(username,"username  must be at least 3 characters")
     }else if(userValue.length > 15 ){
        setErrorMsg(username,"username must be less than 15 characters")
     }else{
        setSuccessMsg(username);
     }

     if(emailValue === "" ){
        setErrorMsg(email,"email can not be empty");
     }else if(emailValue.length < 5 ){
        setErrorMsg(email,"email must be at least 5 characters")
     }else{
        setSuccessMsg(email);
     }


     if(phoneValue === ""){
        setErrorMsg(phonenumber,"phoneNumber can not be blank")
     }else if(phoneValue.length < 10 ){
        setErrorMsg(phonenumber,"phoneNumber must be at least 10 characters")
     }else if(phoneValue.length > 13 ){
        setErrorMsg(phonenumber,"phoneNumber must be at least 13 characters")
     }else{
        setSuccessMsg(phonenumber)
     }
    
     if(passwordValue === "" ){
         setErrorMsg(password,"create password")
     }else if(passwordValue.length < 5 ){
        setErrorMsg(password,"password must be at least 5 characters")
     }else{
        setSuccessMsg(password)
     }

     if(cpasswordValue === "" ){
        setErrorMsg(cpassword,"confirm  password")
    }else if(cpasswordValue.length < 5 ){
       setErrorMsg(cpassword,"password must be at least 5 characters")
    }else if( cpasswordValue !== passwordValue ){
        setErrorMsg(cpassword,"Enter confirm password")
    }else{
         setSuccessMsg(cpassword)
    }




    
    }


 function setErrorMsg(input,errorMsg){
     let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    formControl.className = 'form-control error '
     small.innerText = errorMsg;
 }

 function setSuccessMsg(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success'
 }












