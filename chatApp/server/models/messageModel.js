import mongoose from 'mongoose';

const messagemodel = mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.objectId,
        ref:'User'
    },
    content:{
        type:'String',
        trim:true
    },
    chat:{
        type:mongoose.Schema.Types.objectId,
        ref:'Chat'
    }
})

const Message = mongoose.model("Message",messagemodel)
export default Message