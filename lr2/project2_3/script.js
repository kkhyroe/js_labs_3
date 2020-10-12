var cyr = ['А', "а", "Б", "б", "В", "в", "Г", "г", "Д", "д", "Е", "е", "Ё", "ё", "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "М", "м", "Н", "н", "О", "о", "П", "п", "Р", "р", "С", "с", "Т", "т", "У", "у", "Ф", "ф", "Х", "х", "Ц", "ц", "Ч", "ч", "Ш", "ш", "Щ", "щ", "Ъ", "ъ", "Ы", "ы", "Ь", "ь", "Э", "э", "Ю", "ю", "Я", "я"]
var lat = ['A', "a", "B", "b", "V", "v", "G", "g", "D", "d", "E", "e", "Yo", "yo", "Zh", "zh", "Z", "z", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "R", "r", "S", "s", "T", "t", "U", "u", "F", "f", "X", "x", "Cz", "cz", "Ch", "ch", "Sh", "sh", "Shh", "shh", "``", "``", "Y`", "y`", "`", "`", "E`", "e`", "Yu", "yu", "Ya", "ya"]
var stroka = '';
var strochka = '';

while (stroka === '') {
    stroka = prompt('Введите строку')
}

for (let i = 0; i < stroka.length; i++) {
    if (cyr.indexOf(stroka[i]) != -1) {
        strochka += lat[cyr.indexOf(stroka[i])];
    } else  {
        strochka += stroka[i];
    }
}

console.log(strochka);