const espacio = require('../models/espacio');
const Espacio= require('../models/espacio');

const createEspacio = (req, res) =>{
    const {nombre,aforo,description} = req.body;
    const newEspacio = new Espacio({
        nombre,
        aforo,
        description
    });
    newEspacio.save((error, espacio)=>{
        if(error){
            return res.status(400).send({ message:'Error al crear el espacio'})
        }
        return res.status(201).send(espacio)
    })
}

const getEspacio = (req, res) =>{
    Espacio.find({},(error, espacios)=>{
        if(error){
            return res.status(400).send({ message:'Error al obtener el espacio'})
        }
        return res.status(200).send(espacios)
    })
}

const getSpecificEspacio = (req, res) => {
    const { id } = req.params;
    Espacio.findById(id).populate({ path: 'category' }).exec((error, espacio) => {
        if (error) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "Espacio no encontrado" })
        }
        return res.status(200).send(espacio)
    })
}

const changeStatus = (req, res) => {
    const { id } = req.params
    const query = Espacio.findById(id)
    query.exec((error, Espacio) => {
        if(error){
            return res.status(400).send({ message: "No se pudo actualizar el espacio" })
        }
        if(Espacio.status === 'En mantenimiento'){
            query.updateOne({status: 'Disponible'}).exec((error) => {
                if(error){
                    return res.status(400).send({ message: "No se pudo actualizar el espacio" })
                }
                return res.status(200).send({ message: "Status actualizado a Disponible" })
            })
        }
        else{
            query.updateOne({status: 'En mantenimiento'}).exec((error) => {
                if(error){
                    return res.status(400).send({ message: "No se pudo actualizar el espacio" })
                }
                return res.status(200).send({ message: "Status actualizado a Disponible" })
            })

        }
    })
}

const updateEspacio = (req, res) => {
    const { id } = req.params;
    Espacio.findByIdAndUpdate(id, req.body, (error, espacio) => {
        if (error) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "Espacio no encontrado" })
        }
        return res.status(200).send(espacio)
    })
}

const deleteEspacio= (req, res) => {
    const { id } = req.params;
    Espacio.findByIdAndDelete(id, (error, espacio) => {
        if (error) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "Espacio no encontrado" })
        }
        return res.status(200).send(espacio)
    })
}
module.exports = {
    createEspacio,
    getEspacio,
    changeStatus,
    getSpecificEspacio,
    updateEspacio,
    deleteEspacio
}