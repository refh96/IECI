const Arriendo = require('../models/arriendo');
const Regex = require('../utils/testRegex');
const Arrendatario = require('../models/arrendatario');

const createArriendo = (req, res) => {
    const { fecha, hora_inicio, hora_fin, arrendatario, espacio } = req.body;
    const newArriendo = new Arriendo({
        fecha,
        hora_inicio,
        hora_fin,
        arrendatario,
        espacio 
    })
    newArriendo.save((err, arriendo)=>{
        if(err){
            return res.status(400).send({ message:'Error al crear el arriendo'})
        }
        if(!Regex.fechaRegex(fecha)){
            return res.status(400).send({ message: 'El formato de la fecha no es el correcto'})
        }
        if(!Regex.horaRegex(hora_inicio)){
            return res.status(400).send({ message: 'El formato de la hora de inicio no es el correcto'})
        }
        if(!Regex.horaRegex(hora_fin)){
            return res.status(400).send({ message: 'El formato de la hora final no es el correcto'})
        }
        Arrendatario.findById(arrendatario).where('status', 'Permitido').exec((err, arrendatario)=>{
            if(err){
                return res.status(400).send({message: 'Error al buscar el arrendatario'})
            }
            if(!arrendatario){
                return res.status(400).send({message: 'El usuario está bloqueado'})
            }
            return res.status(200).send(arriendo)
        })
    })
}

const getArriendos = (req, res) => {
    Arriendo.find({}).populate({ path:'arrendatario espacio' }).exec((error, arriendos) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (arriendos.length === 0) {
            return res.status(404).send({ message: "No se encontraron arriendos" })
        }
        return res.status(200).send(arriendos)
    })
}

const updateArriendo = (req, res) => {
    const { id } = req.params
    Arriendo.findByIdAndUpdate(id, req.body, (error, arriendo) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el arriendo" })
        }
        if (!arriendo) {
            return res.status(404).send({ message: "No se encontro el arriendo" })
        }
        return res.status(200).send({ message: "Arriendo modificado" })
    })
}

const deleteArriendo = (req, res) => {
    const { id } = req.params
    Arriendo.findByIdAndDelete(id, (error, arriendo) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el arriendo" })
        }
        if (!arriendo) {
            return res.status(404).send({ message: "No se ha podido encontrar un arriendo" })
        }
        return res.status(200).send({ message: "Se ha eliminado el arriendo de forma correcta" })
    })
}

const getArriendo = (req, res) => {
    const { id } = req.params
    Arriendo.findById(id, (error, arriendo) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el arriendo" })
        }
        if (!arriendo) {
            return res.status(404).send({ message: "No se ha podido encontrar un arriendo" })
        }
        return res.status(200).send(arriendo)
    })
}

module.exports = {
    createArriendo,
    getArriendos,
    updateArriendo,
    deleteArriendo,
    getArriendo
}