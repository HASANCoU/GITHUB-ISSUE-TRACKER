console.log("Login.js Connected With index.html");

const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');
const btn = document.getElementById('signin-btn');



btn.addEventListener("click",()=>{

    const password = passwordInput.value;
    const username = usernameInput.value;

    console.log(password,username);

    if(username==="admin" && password === "admin123"){
        alert("Login Successful");
        window.location.assign('../home.html');
    }
    else{
        
        alert("Invalid Credentials!!!")
    }
})

