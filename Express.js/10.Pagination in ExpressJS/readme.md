# pagination

- pagination is used to show data into many page/part. It's mean it is use for reduce the server load.

# Implement the pagination in ExpressJS

1. npm install mongoose-paginate-v2
2. import mongoosePaginate from "mongoose-paginate-v2"
3. const userSchema = new mongoose.Schema({ name: string, email: string});
   const user = mongoose.model('User', userSchema);
   export default user
4. userSchema.plugin(mongoosePaginate)
5. User.paginate({}, {page:1, limit: 3})
