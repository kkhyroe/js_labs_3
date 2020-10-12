while (true) {
    var stroka = prompt('Введите строку с разделителем ";"', 'Abc;def');
    if (stroka.indexOf(';') !== -1) {
        var mas = stroka.split(';');
        var j = 0;
    
        for(let i of mas) {
            if (i !== '') {
                document.write(i + '<br />')
                j += 1
            }
        }
    
        if (j !== 0) {
            break;
        }
    }
}

