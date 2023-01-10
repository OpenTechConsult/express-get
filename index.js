// Express.js application
import express from 'express'

// configuration
const cfg = {
    port: process.env.PORT || 3000
}

// express initiation
const app = express()

// Use EJS templates
app.set('view engine', 'ejs')
app.set('views', 'views')

// render form
app.get('/', (req, res) => {
    res.render('form', {
        title: 'Parse HTTP Get data',
        data: req.query
    })
})

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${cfg.port}`)
})