function simpleSFX(mp3, ogg, ctime, duration) {
    var terminal = new Audio([mp3], [ogg])
    terminal.currentTime = ctime
    terminal.play()
    setTimeout(function(){
        terminal.pause()
    }, duration);
}

// it's bugges (beta)
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

const commonIntervalTime = 10