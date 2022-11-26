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
    getSpecificEspacio,
    updateEspacio,
    deleteEspacio
}