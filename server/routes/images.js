const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload')

const URL = 'http://localhost:5000'

router.post('/single-upload', upload.single('file'), async (req, res) => {
    let imagePath = req.file.path.replace("puplic", URL)
    
    imagePath = imagePath.split('server')[1].substring(1, imagePath.length)
    console.log(imagePath)
    return res.json({
        imagePath
    })
})

router.post('/multi-upload', upload.array('files'), async (req, res) => {
    let { files } = req
    let array = []
    files.map((file) => {
        let imagePath = file.path.replace("puplic", URL)
        imagePath = imagePath.split('server')[1].substring(1, imagePath.length)
        array.push(imagePath)
    })
    return res.json(array)
})



module.exports = router