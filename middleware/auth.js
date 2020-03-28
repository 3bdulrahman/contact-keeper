const jwt = require('jsonwebtoken')
const configSecret = require('config')
module.exports = (req,res,next)=>{
        const token = req.header('x-auth-token')
        if(!token) res.status(401).json({msg:'unauthorzied !'})
        try {
            const decode = jwt.verify(token,configSecret.get('secretKey'))
            req.user = decode.user 
            next()
        } catch (error) {
            res.status(401).json({msg:'ops unauthrized '})
        }
}