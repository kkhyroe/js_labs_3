var arr = ['http://example.exampl/example/example.example?param1=value1&param2=value2', 'https://www.example.exampl/', 'name@domen.zone', 'asdadasd', 'roma'];


arr.forEach(function(item, i, arr){
    if (item.search(/^(https?:\/\/)([\w\.]+)\.([a-z]{2,6}\.?)(\/[\S]*)*\/?$/) !== -1) {
        console.log('url ' + item + ' найден');
    }

    if (item.search(/^([\w\._]+)@([\w\._]+)\.([a-z]{2,6}\.?)$/) !== -1) {
        console.log('email ' + item + ' найден');
    }
});