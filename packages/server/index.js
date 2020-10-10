const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const {
    exec
} = require('child_process');

app.use(cors())

app.get('/', (req, res) => {
    exec('dir', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send(stdout)
    });
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})