import mongoose from "mongoose";
mongoose.connect(process.env.CONECCION_DB)
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));

export default mongoose;