const mongoose=require('mongoose')
const DB=process.env.DB_URL

const database=module.exports=()=>{
    const connectionParams={
        useNewurlparser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(DB)
        console.log('dstabase connected successfully')
    } catch (error) {
        console.log('some error'+error)
        
    } 
}
database()