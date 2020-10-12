var obj = {name: "Roma"};
var arr = [1, 2, 3, obj];

function klon(arr) {
    return arr.slice();
}

console.log(klon(arr));
console.log(klon(arr)[3].name);