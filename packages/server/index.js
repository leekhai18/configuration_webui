const express = require('express')
const cors = require('cors')
const app = express()
const shell = require('shelljs')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    shell.chmod('+x', 'test.sh')
    shell.exec('bath test.sh', function (code, stdout, stderr) {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
    });

    // res.send(shell.exec('test.sh'));
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})