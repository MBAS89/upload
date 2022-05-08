const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../puplic/uploads`)
    },
    filename:(req, file, cb) =>{
        let lastIndex = file.originalname.lastIndexOf(".")
        //get the orginal extension of the file 
        let extension = file.originalname.substring(lastIndex)
        //create the file on the server
        cb(null, `img-${Date.now()}${extension}`)
    }
})

const upload = multer({ storage })

module.exports = upload
