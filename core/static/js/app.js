
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


function logar(){
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")

    if(email.value == "joao@gmail.com"  && senha.value == "12345678"){
        localStorage.setItem("acesso", true)

        window.location.href = "html/inicio.html"
    }else{
        alert("Por favor preencha os dados corretamentes")
    }
}