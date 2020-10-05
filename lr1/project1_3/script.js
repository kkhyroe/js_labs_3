var name = '';
do {
    name = prompt('Введите имя', 'Имя');
    if (name !== '') {
        repeat = prompt('Подтвердите имя', 'Имя');
        (repeat == name) ? console.log('Привет ' + name) : (name = '');
    }
}
while (name === '');
