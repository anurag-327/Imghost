const mongoose=require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("database connected successfully"))
.catch (err => console.log("error connecting database"))