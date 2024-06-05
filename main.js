let signupForm = document.getElementById('signupForm')
let signinForm = document.getElementById('signinForm')
let signupEmail = document.getElementById('signupEmail')
let signupEmailChecker = document.getElementById('signupEmailChecker')
let singupPasswordChecker = document.getElementById('singupPasswordChecker')
let signuppassword = document.getElementById('signuppassword')
let signupName = document.getElementById('signupName')
let signupNameChecker = document.getElementById('signupNameChecker')
let singupUsername = document.getElementById('singupUsername')
let singupUsernameChecker = document.getElementById('singupUsernameChecker')
let signinUsername = document.getElementById('signinUsername')
let signinpassword = document.getElementById('signinpassword')
let signinUsernameChecker = document.getElementById('signinUsernameChecker')
function showSignin(){
    signinForm.classList.remove('d-none')
    signupForm.classList.add('d-none')
    
}
function showSignup(){
    signupForm.classList.remove('d-none')
    signinForm.classList.add('d-none')
}
    async function signinFunction() {
        const response = await fetch("https://665736a19f970b3b36c865bf.mockapi.io/logIn");
        const data = await response.json();
        console.log(data)
        data.forEach(element => {
            let validater = (element.pass === signinpassword.value && element.username === signinUsername.value)
            if (!validater){
                signinUsernameChecker.innerText = 'Either the email or the password are invalid or both'
              }else{
                window.location.href = "./contentpage.html";
                console.log('im here')
              }
        });
        
        console.log(data);
        
    }


      







  emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,4}$/
  uNameReg = /^[A-Z]+[a-z0-9]{1,}$/
  nameReg = /^[A-Za-z]{3,}$/
  passReg = /^[0-9]{4,}$/

  function validInfo(){
    signupEmailChecker.innerText = ''
    signupNameChecker.innerText = ''
    singupPasswordChecker.innerText = ''
    singupUsernameChecker.innerText = ''
    if (!nameReg.test(signupName.value)){
        signupNameChecker.innerText = 'Must have more than 3 letters'
     }else if (!uNameReg.test(singupUsername.value)){
        singupUsernameChecker.innerText = 'First letter must be capital'
    } else if (!emailReg.test(signupEmail.value)) {
        signupEmailChecker.innerText = 'Invalid email format'
    } else if (!passReg.test(signuppassword.value)){
        singupPasswordChecker.innerText = 'Password must contain at least 4 numbers and no other characters'
    }else{
        postLoginInfo()
    }

  }



  async function postLoginInfo() {
    try {
      const response = await fetch("https://665736a19f970b3b36c865bf.mockapi.io/logIn", {
        method: "POST", 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ username: singupUsername.value ,
            name: signupName.value,
            email: signupEmail.value,
            pass: signuppassword.value}),
      });
  
      const result = await response.json();
      console.log(signupEmail.value)
      console.log("Success:", result);
      showSignin();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  
    