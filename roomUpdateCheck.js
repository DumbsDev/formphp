fs = require('fs');

fs.readFile('roomdata.json', 'utf8', function (err, data) {
    if (err) throw err;

    var roomdat = JSON.parse(data);

    console.log("Current rooms: " + roomdat);
});

