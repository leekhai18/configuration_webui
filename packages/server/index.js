const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const app = express()
const shell = require('shelljs')
const port = 3000

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.contentType('application/json');
    next();
});

app.get('/getConfigure', (req, res) => {
    shell.exec('bash bashexec.sh getConfigure', function (code, stdout, stderr) {
        if (code !== 0) {
            return res.status(500).send({
                bashCode: code,
                baseError: stderr
            })
        }
        return res.status(200).send(stdout)
    });
})

app.post('/setConfigure', (req, res) => {
    shell.exec('bash bashexec.sh setConfigure ' + `'${JSON.stringify(req.body)}'`, function (code, stdout, stderr) {
        if (code !== 0) {
            return res.status(500).send({
                bashCode: code,
                baseError: stderr
            })
        }
        return res.status(200).send(stdout)
    });
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
