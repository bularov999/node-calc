const Router = require('express')
const router = Router()
const fs = require('fs')
const path = require('path')
router.post('/api/post', (req, res) => {
    const json = JSON.stringify(req.body)
    fs.writeFile( path.join(__dirname, '../', 'data.json'), json , function(err,data) {
        if (err) throw err
        console.log(data)
    } )
    res.json(req.body)
})

module.exports = router