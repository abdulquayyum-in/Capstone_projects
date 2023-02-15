import jwt from "jsonwebtoken"
import config from "config"


function authvalidator(req,res,next){
    try{
        let privatekey = config.get("PRIVATE_KEY")
        let token = req.headers["auth-token"]
        let payload = jwt.verify(token,privatekey)
        // console.log(payload)
        req.payload = payload
        return next()
    }catch(error){
        console.error(error)
        res.status(401).json({error:"Invalid token"})
    }
}
export default authvalidator;