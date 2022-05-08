const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload')
const USER = require('../model/user')

const URL = 'http://localhost:5000'

router.post('/create-user', upload.single('file'), async (req, res) => {

   let imagePath = req.file.path.replace("puplic", URL)
    
    imagePath = imagePath.split('server')[1].substring(1, imagePath.length)

    try {
        const data = {
            name:req.body.name,
            img:imagePath
        }
        const newUser = new USER({...data})
        await newUser.save()
        res.status(201).json({
            message:"user Created",
            data:newUser
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
     
    try {
        const {id:_id} = req.params
        
        const user = await USER.findById(_id);

        res.status(200).json({
            message:"You Got A user",
            data:user
        });
    } catch (error) {
        res.status(404).json({message: error.message})
    }
 })

module.exports = router