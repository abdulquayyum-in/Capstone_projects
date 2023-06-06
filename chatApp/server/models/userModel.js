import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true,
        default:"https://st.depositphotos.com/1898481/4049/i/600/depositphotos_40493227-stock-photo-unknown-person.jpg"

    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User