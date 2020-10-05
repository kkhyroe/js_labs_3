var n = Number(9) // до скольки будет таблица

for (let i = 1; i <= n; i++) {
    let stok = '';
    for (let j = 1; j <= n; j++) {
        stok = stok + (i*j) + ' ';
    }
    console.log(stok);
}