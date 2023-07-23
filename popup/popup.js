fetch("https://2k2agenv28.execute-api.eu-north-1.amazonaws.com/items").then(function (response) {
    console.log(response.json().then(function (data) {
        console.log(data);
    }));
})
