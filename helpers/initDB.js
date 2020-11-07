import mongoose, { Mongoose } from 'mongoose';

function initDB() {
    if(mongoose.connections[0].readyState){
        console.log('alredyconnected')
        return
    }
    mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    mongoose.connection.on('connected',()=>{
        console.log('connected')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('error',err)
    })

}
export default initDB