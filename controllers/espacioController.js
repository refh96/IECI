const Espacio= require('../models/espacio');

const createEspacio = (req, res) =>{
    const {nombre,aforo,description} = req.body;
    const newEspacio = new Espacio({
        nombre,
        aforo,
        description
    });
    newEspacio.save((err, espacio)=>{
        if(err){
            return res.status(400).send({ message:'error al crear el espacio'})
        }
        return res.status(201).send(espacio)
    })
}

const getEspacio = (req, res) =>{
    Espacio.find({},(err, espacios)=>{
        if(err){
            return res.status(400).send({ message:'error al obtener el espacio'})
        }
        return res.status(200).send(espacios)
    })
}

const getSpecificEspacio = (req, res) => {
    const { id } = req.params;
    Espacio.findById(id).populate({ path: 'category' }).exec((err, espacio) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "espacio no encontrado" })
        }
        return res.status(200).send(espacio)
    })
}

const updateEspacio = (req, res) => {
    const { id } = req.params;
    Espacio.findByIdAndUpdate(id, req.body, (err, espacio) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "espacio no encontrado" })
        }
        return res.status(200).send(espacio)
    })
}

const deleteEspacio= (req, res) => {
    const { id } = req.params;
    Espacio.findByIdAndDelete(id, (err, espacio) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacio) {
            return res.status(404).send({ message: "espacio no encontrado" })
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