function clock(){
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();
    document.getElementById('times').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);