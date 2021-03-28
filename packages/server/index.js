const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const app = express()
const shell = require('shelljs')
const port = process.env.PORT || 3000
const logger = require('./logger')

let bashExecPath = shell.exec('grep --only-matching --perl-regex "(?<=CONFIG_BASH_PATH\=).*" ./local.config').toString().replace(/\r?\n|\r/, '')
    || '/home/pi/user_data/local.sh'

//#region middle ware
app.use(cors())
app.use(bp.json())
app.use(bp.text())
app.use(bp.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.contentType('application/json')
    next()
})
//#endregion

const server = app.listen(port, () => {
    logger.info(`------- ${new Date().toString()} ------ Server is listening at port ${port}`)
})

//#region controller
app.get('/getBashFilePath', (req, res) => {
    try {
        shell.exec('grep --only-matching --perl-regex "(?<=CONFIG_BASH_PATH\=).*" ./local.config', function (code, stdout, stderr) {
            if (code !== 0) {
                logger.warn('GET /getBashFilePath', { code, stderr })
                return res.status(200).send('/home/pi/user_data/local.sh')
            }
            return res.status(200).send(stdout.toString().replace(/\r?\n|\r/, ''))
        })
    } catch (error) {
        logger.error('GET /getBashFilePath', error)
        return res.status(500).end()
    }
})

app.post('/setBashFilePath', (req, res) => {
    try {
        const convertPath = req.body.split('/').join('\\\\/')
        shell.exec('sed -i "s/\\(CONFIG_BASH_PATH *= *\\).*/\\1' + convertPath + '/" ./local.config', function (code, stdout, stderr) {
            if (code !== 0) {
                logger.error('POST /setBashFilePath', { code, stderr })
                return res.status(500).send({ code, stderr })
            }
            bashExecPath = req.body
            return res.status(200).send(req.body)
        })
    } catch (error) {
        logger.error('POST /setBashFilePath', error)
        return res.status(500).send(error)
    }
})

app.get('/getConfigure', (req, res) => {
    try {
        shell.exec(`bash ${bashExecPath} getConfigure`, function (code, stdout, stderr) {
            if (code !== 0) {
                logger.error('GET /getConfigure', { code, stderr })
                return res.status(500).send({ code, stderr })
            }
            return res.status(200).send(stdout)
        })
    } catch (error) {
        logger.error('GET /getConfigure', error)
        return res.status(500).send(error)
    }
})

app.post('/setConfigure', (req, res) => {
    try {
        shell.exec(`bash ${bashExecPath} setConfigure '${JSON.stringify(req.body)}'`, function (code, stdout, stderr) {
            if (code !== 0) {
                logger.error('POST /setConfigure', { code, stderr })
                return res.status(500)({ code, stderr })
            }
            return res.status(200).send(stdout)
        })
    } catch (error) {
        logger.error('POST /setConfigure', error)
        return res.status(500).send(error)
    }
})
//#endregion

//#region Handling Errors on Shutdown
process.on('SIGTERM', signal => {
    logger.info(`Process ${process.pid} received a SIGTERM signal`)
    process.exit(0)
})

process.on('SIGINT', signal => {
    logger.info(`Process ${process.pid} has been interrupted`)
    process.exit(0)
})

process.on('uncaughtException', err => {
    logger.info(`Uncaught Exception: ${err.message}`)
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    logger.info('Unhandled rejection at ', promise, `reason: ${err.message}`)
    process.exit(1)
})

process.on('beforeExit', code => {
    // Can make asynchronous calls
    setTimeout(() => {
        logger.info(`Process will exit with code: ${code}`)
        process.exit(code)
    }, 100)
})

process.on('exit', code => {
    // Only synchronous calls
    logger.info(`Process exited with code: ${code}`)
})
//#endregion
