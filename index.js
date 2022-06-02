const request = require('request');

function getSpreadsheet(json, callback) {
    const options = {
        method: 'POST',
        followAllRedirects: true,
        url: '', // Api key
        formData: json
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        return callback(response.body);
    });
}

const parameter = 
{       
    'Comp_Name': 'Company',
    'Data': 'Today'
    // Сюда передается JSON в формате {имя диапазона в таблице: значение}
}
getSpreadsheet(parameter, (fileLink) => {
    console.log(fileLink)
})