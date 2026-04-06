const fs = require("fs").promises;

async function readFileData() {
    try {
        const data = await fs.readFile("data.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}

readFileData();