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
        window.location.assign(`../home.html || /GITHUB-ISSUE-TRACKER/home.html`);// Get repo name dynamically
const base = location.hostname.includes('github.io') ? '/GITHUB-ISSUE-TRACKER' : '';
window.location.assign(`${base}/home.html`);
    }
    else{
        
        alert("Invalid Credentials!!!")
    }
})

