const fs = require("fs").promises;

function readFileData() {
    fs.readFile("data.txt", "utf-8")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error("Error:", err);
        });
}

readFileData();