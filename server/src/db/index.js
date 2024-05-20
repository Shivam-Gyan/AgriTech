import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://localhost:27017/dataauth')
        // const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected Successfully !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Failed ", error)
        process.exit(1)
    }
}

export default connectDB