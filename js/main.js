var DOCUMENT_TEMPCODE = 1
var DOCUMENT_FAQ = 8


function afterLoad() {
    document.getElementById("mainTopWelcome1").innerText = "Welcome back, " + localStorage.getItem("loginNickname") + "!";
    document.getElementById("mainTopWelcome2").innerText = "Your login code: " + localStorage.getItem("loginCode") + "";
}

function switchTool(toolID) {
    var iframeLocate = ""
    switch (toolID) {
        case DOCUMENT_TEMPCODE:
            iframeLocate = "./subMenu/tempCode.html"
            break;
        case DOCUMENT_FAQ:
            iframeLocate = "./submenu/faq.html"
            break
            
    }

    for (let i = 0; i < 8; i++) {
        if (i == toolID - 1) {
            //console.log(document.getElementsByClassName("mainLeftBox")[i])
            document.getElementsByClassName("mainLeftBox")[i].style.background = "white"
            document.getElementsByClassName("mainLeftBox")[i].style.color = "black"
            document.getElementsByClassName("mainLeftBox")[i].style.marginLeft = "7.5%"
        } else {
            document.getElementsByClassName("mainLeftBox")[i].style.background = ""
            document.getElementsByClassName("mainLeftBox")[i].style.color = ""
            document.getElementsByClassName("mainLeftBox")[i].style.marginLeft = "3%"
        }
    }

    document.getElementById("iframeBox").src = iframeLocate

    if (toolID == DOCUMENT_FAQ) {
        
    }
}

// FAQ Scroll Mechanic

