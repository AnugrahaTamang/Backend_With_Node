# ExpressJS: Image/ Other file upload

- Images
- PDF
- Excel File
- Word File
- Video File

# Multer : storage, limits, file filter

1. Storage

- Destination
- filename

2. Limits

- filesize (bytes)
- files
- fields
- fieldNameSize

3. File filter

- Image
- PDF
- Excel
- Word
- Video

# Multer installation

1. npm install multer
2. const multer = require("multer")
3. const path = require('path')
4. const storage = multer.diskStorage({
   destination: function(req, file, cb){
   cb(null, './uploads')
   },
   filename: function(req,file,cb){
   const newFileName = Date.now() + path.extname(file.originalname)
   cb(null, newFileName)
   }
   })
5. const limits = {
   fileSize: 1024 * 1024 *5 //Note: 1024 byte = 1kb
   }
6. const upload = multer({
   storage: storage,
   limits: limits
   })
7. app.post('/submitform', upload.single('imagefile'), (req,res) =>{
   res.send(req.file)
   }) //Note: multiple ko laghi upload.array('imagefile', 5)

- Or : upload.fields([{name: 'profilepic', maxCount: 1}, {name: 'documents', maxCount: 3}])
