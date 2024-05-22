const jwt = require("jsonwebtoken")

const generateTokenandCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_Secret,{
        expiresIn: '10d'
    })
    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 100,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

module.exports= generateTokenandCookie