# What is CRUD SYSTEM?

1. Create
2. Read
3. Update
4. Delete

# Step-I to make CRUD?

1. Setup HTML template in ExpressJS.
2. Learn to read data from MongoDB.
3. Learn to Add, Update and Delete data with HTML forms.
4. learn to structure code in MVC pattern and Error Handling.

# step-II to make CRUD?

1. setup HTML template in ExpressJS.
2. Learn to read data from MongoDB.

# ExpressJS with MongoDB

1. npm install mongoose
2. const mongoose = require('mongoose')
3. mongoose.connect('mongodb://127.0.0.1:27017/database-name')
4. const test = mongoose.model('user' mongoose.Schema({name: {type: string}, age: {type: Number}}));

# mongoose commands

- create (insertOne(), insertMany(), create())
- read (find(), findOne(), findById())
- update (updateOne(), updateMany(), findByIDAndUpdate())
- delete (deleteOne(), deleteMany(), findByIdAndDelete())
