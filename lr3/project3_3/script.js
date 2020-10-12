var arr = [1, 2, 3, {name: "Roma"}];

function klon(arr) {
    return JSON.parse(JSON.stringify(arr));
}

newArr = klon(arr);

console.log('Клонированный массив ' + newArr);

console.log('Старый обьект в клонированном массиве ' + newArr[3].name);
arr[3].name = "Dima"; // Меняем обьект в старом массиве
console.log('Обьект в клонированном массиве не меняется ' + newArr[3].name);

