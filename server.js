const mongoose = require('mongoose')
// const mongodb = require('mongodb')

const connection = mongoose.connect('mongodb://127.0.0.1:27017/Blogs-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(()=>{console.log('Data base successfully connected')}).catch((error)=>{console.log(error)})


module.exports = connection;
