const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err){
        return console.log(err)
    }

    console.log(data)
})