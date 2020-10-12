// let person = {
//     name: 'имя',
//     func: function () {
//         let _this = this;
//         setTimeout(function () {
//             console.log(_this.name);
//         }, 500);

//     },
//     arrFunc: function () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 500);
//     }
// }

// person.func();
// person.arrFunc();

function palindrom(fraza) {
    let arrFraza = fraza.split("");
    let revArrFraza = arrFraza.reverse();
    let strFraza = revArrFraza.join("");
    if (fraza == strFraza) {
        return 'Это палиндром';
    } else {
        return 'Это не палиндром';
    }
}

var fraza = prompt("Введите фразу(слово)");
alert(palindrom(fraza));