const Arrendatario = require('../models/arrendatario')

const checkRUT = (req, res, next) => {
    Arrendatario.findOne({ _id: req.body.rut}, (err, arrendatario) => {
        if(err){
            return res.status(400).send({message:"El usuario no existe"})
        }
        if(!arrendatario){
            return res.status(404).send({message: "Usuario no existe"})
        }
        return res.status(200).send({message:"Usuario logeado correctamente"})
    })
}

module.exports = checkRUT;