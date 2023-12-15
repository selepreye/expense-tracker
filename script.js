const container1 = document.querySelector(".container1");
const login = document.querySelector(".signup-link");
const signUp = document.querySelector(".login-link");

    // make signup and login forms appear
    
    signUp.addEventListener("click", ()=>{
        container1.classList.add("active");
    });

    login.addEventListener("click", ()=>{
        container1.classList.remove("active");
    });
