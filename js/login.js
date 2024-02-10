function login () {
    //alert(codeValid)
    if (codeValid) {
        localStorage.setItem("loginNickname", document.getElementById("loginInput").value);
        localStorage.setItem("loginCode", NICKNAME_CODE);
        simpleSFX('./assets/terminal_sfx.mp3', './assets/terminal_sfx.ogg', 0, 1900)
        setTimeout(function(){
            window.location.href = "home.html";
        }, 400);
    }
    else {
        simpleSFX('./assets/terminal_sfx.mp3', './assets/terminal_sfx.ogg', 1.9, 1900)
    }
}

function checkIfLogged() {
    if (localStorage.getItem("loginNickname") == null || localStorage.getItem("loginNickname") == "" || localStorage.getItem("loginCode") == null || localStorage.getItem("loginCode") == "") {
        window.location.href = "/";
    }
}