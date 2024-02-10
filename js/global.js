const commonIntervalTime = 10

function simpleSFX(mp3, ogg, ctime, duration) {
    var terminal = new Audio([mp3], [ogg])
    terminal.currentTime = ctime
    terminal.play()
    setTimeout(function(){
        terminal.pause()
    }, duration);
}

function terminaltypeSFX() {
    var terminal_type = new Audio(['./assets/terminal-typing_sfx.mp3'], ['./assets/terminal-typing_sfx.ogg'])
    let timesets = [{"v":0}, {"v":2}, {"v":4}, {"v":6}, {"v":8}, {"v":9.7}, {"v":11.8}]
    var randomtime = Math.floor(Math.random() * timesets.length);
    terminal_type.currentTime = timesets[randomtime].v
    terminal_type.play()
    setTimeout(function(){
        terminal_type.pause()
    }, 1000);
}

// API
let APIdata = 
{
    "homepages": [
        {
            "name":"Temporary Authentication Code",
            "codename":"Tac",
            "page":[{
                "html":"<div class=welcomeText>Temporary Authentication Codes</div><div class=currCodeTitle>CURRENT CODE:</div><div class='currcode cur-point' id=currCode>a</div><div class=currcodeCopied style=opacity:0>(Copied!)</div>",
                "css":".loadpage div{text-align:center}.welcomeText{margin-top:100px;font-size:48px}.currCodeTitle,.currcode{margin-top:70px;font-size:36px}"
            }]
        },
        {
            "name":"Byte store",
            "codename":"BYstore",
            "page":[{
                "html":"<h1>Placeholder - store</h1>",
                "css":""
            }]
        },
        {
            "name":"Translator",
            "codename":"translator",
            "page":[{
                "html":"<h1>Placeholder - translator</h1>",
                "css":""
            }]
        },
        {
            "name":"Music-brary",
            "codename":"music",
            "page":[{
                "html":"<h1>Placeholder - music</h1>",
                "css":""
            }]
        },
        {
            "name":"Placeholder",
            "codename":"placeholder",
            "page":[{
                "html":"<h1>Placeholder</h1>",
                "css":""
            }]
        },
        {
            "name":"Placeholder",
            "codename":"placeholder",
            "page":[{
                "html":"<h1>Placeholder</h1>",
                "css":""
            }]
        },
        {
            "name":"Placeholder",
            "codename":"placeholder",
            "page":[{
                "html":"<h1>Placeholder</h1>",
                "css":""
            }]
        },
        {
            "name":"F.A.Q. (Frequently Asked Questions)",
            "codename":"faq",
            "page":[{
                "html":"<div class=faqDivider><span>GENERAL QUESTIONS WHO WOULD HAVE GUESSED WHY WE CAN'T LIVE IN A SOCIETY</span></div><div class='faqQuestionBox cur-point'><span>This is literally unplayable! How am I supposed to know the login code! What am I - a magician?</span></div><div class=faqAnswerBox><span>Now there - there's no need to panic.<br>In order to unlock the phone, you can use your <u>personalized second password</u>, that you can use to access the phone! Here are the steps, how to do it.<br><br><ol><li>Find your <b>Login Code</b>. It's located in the top-right corner of the site.<li>Enter the password backwards.<li>In case of any letters, convert them using a T9-keyboard method.</ol></span></div><div class=faqDivider><span>GENERAL QUESTIONS WHO WOULD HAVE GUESSED WHY WE CAN'T LIVE IN A SOCIETY</span></div><div class='faqQuestionBox cur-point'><span>This is literally unplayable! How am I supposed to know the login code! What am I - a magician?</span></div><div class=faqAnswerBox><span>Idk, kill yourself or something lmao</span></div><div class='faqQuestionBox cur-point'><span>This is literally unplayable! How am I supposed to know the login code! What am I - a magician?</span></div><div class=faqAnswerBox><span>Idk, kill yourself or something lmao</span></div>",
                "css":".faqAnswerBox,.faqQuestionBox{user-select:none;padding:50px;border:2px dotted #fff}.faqQuestionBox{background-color:#131313;text-align:center;font-size:36px;margin:40px;font-style:italic}.faqQuestionBox:hover{background-color:#434343}.faqAnswerBox{display:none;background-color:#4a4a4a;text-align:left;font-size:24px;margin:-40px 40px 40px}.faqAnswerBox span{color:#fff}.faqDivider{margin:80px 40px -10px;text-align:center}.faqDivider span{background-color:#000}"
            }]
        }
    ]
}