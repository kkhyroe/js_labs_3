var x = [,];
for (let i = 0; i < 9; i++) {
    let y = [,];
    for (let j = 0; j < 9; j++) {
        y.push((j+1)*(i+1));
    }
    x.push(y);
}

console.log(x);

index1 = prompt('Введите первое число', '5');
index1 = Number(index1);

if (index1 in x) {
    index2 = prompt('Введите второе число', '5');
    index2 = Number(index2);

    if (index2 in x) {
        console.log(x[index1][index2]);
    }
    else {
        console.log('Введите целое число от 1 до 9');
    }
}
else {
    console.log('Введите целое число от 1 до 9');
}


