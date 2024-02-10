// LEFT BUTTONS PAGES FUNCTIONS
function FaqFunc() {
    var acc = document.getElementsByClassName("faqQuestionBox");
    var j;
    //console.log(acc[0])
    for (j = 0; j < acc.length; j++) {
        //console.log(acc)
        acc[j].addEventListener("click", function() {
            //alert("a")
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
    }
}
function currCodeCopy(){
    navigator.clipboard.writeText(document.getElementById("currCode").innerText);
    document.getElementsByClassName("currcodeCopied")[0].style.opacity = 0.5;

    setTimeout(() => {
        document.getElementsByClassName("currcodeCopied")[0].style.opacity = 0;
    }, 3000);
}


function afterLoad() {
    document.getElementById("mainTopWelcome1").innerText = "Welcome back, " + localStorage.getItem("loginNickname") + "!";
    document.getElementById("mainTopWelcome2").innerText = "Your login code: " + localStorage.getItem("loginCode") + "";
}

function generateLeftBtn(data){
    var tableConatiner = document.querySelector('.mainLeft')
    
    for(let i = 0; i < data.length; i++){
    var Content = `<div class="mainLeftBox cur-point">${data[i].name}</div>`
    tableConatiner.innerHTML += Content
}}
generateLeftBtn(APIdata.homepages)

function switchTool(toolID) {
    for (let i = 0; i < APIdata.homepages.length; i++) {
        if (i == toolID) {
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
}

for (let i = 0; i < APIdata.homepages.length; i++) {
    document.querySelectorAll('.mainLeftBox')[i].addEventListener("click", function() {
        switchTool(i)
        document.querySelector('.loadpage').innerHTML = APIdata.homepages[i].page[0].html
        document.getElementById('pagecss').innerHTML = APIdata.homepages[i].page[0].css
        simpleSFX('./assets/terminal_sfx.mp3', './assets/terminal_sfx.ogg', 0, 1900)

        //get page function. Here you put your page function
        if (APIdata.homepages[i].codename == 'faq'){ FaqFunc() }
        
        else if (APIdata.homepages[i].codename == 'Tac'){ 
            document.getElementById('currCode').addEventListener("click", function() {
                currCodeCopy()
            })
        }

    })
}

// FAQ Scroll Mechanic

