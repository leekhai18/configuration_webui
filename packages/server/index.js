const express = require('express')
const cors = require('cors')
const app = express()
const shell = require('shelljs');
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(shell.ls());

    // Run external tool synchronously
    if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
        shell.echo('Error: Git commit failed');
        shell.exit(1);
    }
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})