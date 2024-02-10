// mid(CODE_BANK, int(int(mid(str(Date.Hours), 0, 1)) + int(mid(str(Date.Hours), 1, 1)) * int(mid(str(Date.Minutes), 1, 1))), 1)



const codeBankLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const codeBank = codeBankLetters.split("");
var timeZone = 0

var codeVerify = false
var codeValid = false

var NICKNAME = "";
var NICKNAME_CODE = ""

setInterval(() => {

    //timeZone = parseInt(document.getElementById("timeZones").value)

    const date = new Date();
    const hour = (date.getHours() + timeZone).toString().padStart(2, '0');
    const min = (date.getMinutes()).toString().padStart(2, '0')
    const sec = date.getSeconds();
    const milisec = date.getMilliseconds();

    const hour1 = parseInt(hour.toString().slice(0, 1))
    const hour2 = parseInt(hour.toString().slice(1, 2))

    const min1 = parseInt(min.toString().slice(0, 1))
    const min2 = parseInt(min.toString().slice(1, 2))

    letter1 = codeBank[(hour1 + hour2) * min2]
    letter2 = codeBank[(min1 + min2) * hour1]
    letter3 = codeBank[hour1 + min2]
    letter4 = codeBank[hour2 + min1]

    //document.getElementById("timeCodeRefreshtimer").value = milisec + (sec * 1000)

    //document.getElementById("test").innerText = hour1.toString() + hour2.toString() + min1.toString() + min2.toString()

    //console.log(localStorage.getItem("currView"))
    
    if (document.getElementById("currCode")) {
        document.getElementById("currCode").innerText = letter1 + letter2 + letter3 + letter4
    }

    if (document.getElementById("loginInput")) {
        NICKNAME = document.getElementById("loginInput").value
    }

    oneColorChange = false

    if (document.getElementById("loginInput")) {
        if (document.getElementById("loginInput").value.length == 0 || !codeVerify) {
            document.getElementById("loginInput").style.border = "2px dotted red";
            document.getElementById("loginInput").style.color = "pink";
            document.getElementById("loginButton").classList.remove("loginButtonActive")
            document.getElementById("loginButton").style.opacity = 0.4
            codeValid = false
        } else {
            document.getElementById("loginInput").style.border = "2px dotted white";
            document.getElementById("loginInput").style.color = "white";
            document.getElementById("loginButton").classList.add("loginButtonActive")
            document.getElementById("loginButton").style.opacity = 1
            codeValid = true
        }
    }
    //console.log(codeValid)


    
}, commonIntervalTime);

function checkName(event) {
    
    let checkName = event.target.value
    var loopCheck = 0
    var checkLock = false
    while (loopCheck < checkName.length) {
        //console.log(event.target.value.charCodeAt(loopCheck))
        var letter = event.target.value.charCodeAt(loopCheck)
        
        if (!checkLock) {
            //console.log(letter.key)
            if (letter >= 48 && letter <= 57) {
                checkLock = false
                //alert('1')
            } else if (letter >= 65 && letter <= 90) {
                checkLock = false
                //alert('2')
            } else if (letter >= 97 && letter <= 122) {
                checkLock = false
                //alert('3')
            } else {
                checkLock = true
                //alert('4')
            }
        }
        loopCheck += 1
    }
    //alert(checkLock)
    if (checkLock) {
        codeVerify = false
        document.getElementById("loginInputDisc").style.color = "red";
    } else {
        codeVerify = true
        document.getElementById("loginInputDisc").style.color = "white";
    }
}

function codeInsert(text) {
    document.getElementById("nickCode").innerText = text
}

var groupCount = 4

setInterval(() => {
    if (codeValid) { // ABCD EFGH IJK

        var NICKNAMEcheck = NICKNAME.padEnd((Math.ceil(NICKNAME.length / groupCount)) * 4, "0")

        //console.log(NICKNAMEcheck)

        var groupInCount = Math.ceil(NICKNAMEcheck.length / groupCount)

        var loopGroup = 0
        var nickCodeTable = [0,0,0,0]
        //console.log(nickCodeTable)

        while (loopGroup < groupCount) {
            var loopInGroup = 0

            if (/*groupOddNumber == 0*/ true) {
                while (loopInGroup < groupInCount) {
                    //console.log(NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup))

                    //console.log((loopGroup * groupInCount) + loopInGroup)
                    //console.log(NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup))
    
                    nickCodeTable[loopGroup] += NICKNAMEcheck.charCodeAt((loopGroup * groupInCount) + loopInGroup)

                    //console.log(nickCodeTable)
                    
                    //console.log(NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1).charCodeAt)
                    //nickCodeTable[loopGroup] += NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1)
    
                    loopInGroup += 1
                }
            } /*else {
                if (loopGroup == groupCount - 1) {
                    while (loopInGroup < groupOddNumber) {
                        //console.log(NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup))
        
                        nickCodeTable[loopGroup] += NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup)
                        
                        //console.log(NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1).charCodeAt)
                        //nickCodeTable[loopGroup] += NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1)
        
                        loopInGroup += 1
                    }
                } else {
                    //console.log(NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup))
    
                    nickCodeTable[loopGroup] += NICKNAME.charCodeAt((loopGroup * groupInCount) + loopInGroup)
                    
                    //console.log(NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1).charCodeAt)
                    //nickCodeTable[loopGroup] += NICKNAME.slice((loopGroup * groupInCount) + loopInGroup, (loopGroup * groupInCount) + loopInGroup + 1)
    
                    loopInGroup += 1
                }
            }*/

            loopGroup += 1
        }
        //console.log(nickCodeTable)
        //console.log("START LOOP")
        for (let i = 0; i < 4; i++) {
            nickCodeTable[i] = nickCodeLong(nickCodeTable[i])
        }
        //console.log("END LOOP")
        NICKNAME_CODE = codeBankLetters.charAt(nickCodeTable[0]) + codeBankLetters.charAt(nickCodeTable[1]) + codeBankLetters.charAt(nickCodeTable[2]) + codeBankLetters.charAt(nickCodeTable[3])
    }

    //document.getElementById("nickCode").innerText = NICKNAME_CODE
}, commonIntervalTime);

function nickCodeLong (value) {
    //console.log(value)
    if (value > codeBankLetters.length) {
        value = Math.floor(value / 2)
        var value = nickCodeLong(value)
    }
    return value
}