window.onload = function () {
    let startbut = document.getElementById('startbut');
    let crot1 = document.getElementById('crot1');
    let crot2 = document.getElementById('crot2');
    let crot3 = document.getElementById('crot3');
    let crot4 = document.getElementById('crot4');
    let crot5 = document.getElementById('crot5');
    let crot6 = document.getElementById('crot6');
    let crot7 = document.getElementById('crot7');
    let crot8 = document.getElementById('crot8');
    let crot9 = document.getElementById('crot9');
    let point = 0;

    startbut.onclick = function () {
        console.log('Игра началась');
        let point = 0;
        let s = 20;
        let timerId = setInterval(() => { markcrot(); s--; document.getElementById('timer').innerHTML = 'TIMER: ' + s;}, 1000);
        setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 20000);
    }

    function markcrot () {
        let x = Math.floor(Math.random() * Math.floor(9)) + 1;

        if (x == 1) crotup(crot1);
        if (x == 2) crotup(crot2);
        if (x == 3) crotup(crot3);
        if (x == 4) crotup(crot4);
        if (x == 5) crotup(crot5);
        if (x == 6) crotup(crot6);
        if (x == 7) crotup(crot7);
        if (x == 8) crotup(crot8);
        if (x == 9) crotup(crot9);
    }

    function crotup (x) {
        x.style.backgroundColor = 'lightgray'
        console.log(x);
        setTimeout(() => x.style.backgroundColor = '', 1000);

        x.onclick = function pointup() {
            if (x.style.backgroundColor == 'lightgray') point++;
            document.getElementById('points').innerHTML = 'POINTS: ' + point;
            x.style.backgroundColor = ''
        }
    }
}



