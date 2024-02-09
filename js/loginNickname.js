function login () {
    //alert(codeValid)
    if (codeValid) {
        localStorage.setItem("loginNickname", document.getElementById("loginInput").value);
        localStorage.setItem("loginCode", NICKNAME_CODE);
        window.location.href = "main.html";
    }
}

window.onload = function() {checkIfLogged()};

function checkIfLogged() {
    if (localStorage.getItem("loginNickname") == null || localStorage.getItem("loginNickname") == "" || localStorage.getItem("loginCode") == null || localStorage.getItem("loginCode") == "") {
        if (SITENAME != "login") {
            window.location.href = "login.html";
        }
    }
}