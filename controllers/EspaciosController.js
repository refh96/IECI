const Espacios= require('../models/espacios');

const createEspacios = (req, res) =>{
    const {nombre,aforo,description} = req.body;
    const newEspacio = new Espacios({
        nombre,
        aforo,
        description
    });
    newEspacio.save((err, espacios)=>{
        if(err){
            return res.status(400).send({ message:'error al crear el espacio'})
        }
        return res.status(201).send(espacios)
    })
}

const getEspacios = (req, res) =>{
    Espacios.find({},(err, espacios)=>{
        if(err){
            return res.status(400).send({ message:'error al obtener el espacio'})
        }
        return res.status(200).send(espacios)
    })
}

const getSpecificEspacios = (req, res) => {
    const { id } = req.params;
    Espacios.findById(id).populate({ path: 'category' }).exec((err, espacios) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacios) {
            return res.status(404).send({ message: "espacio no encontrado" })
        }
        return res.status(200).send(espacios)
    })
}

const updateEspacios = (req, res) => {
    const { id } = req.params;
    Espacios.findByIdAndUpdate(id, req.body, (err, espacios) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacios) {
            return res.status(404).send({ message: "espacio no encontrado" })
        }
        return res.status(200).send(espacios)
    })
}

const deleteEspacios= (req, res) => {
    const { id } = req.params;
    Espacios.findByIdAndDelete(id, (err, espacios) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el espacio" })
        }
        if (!espacios) {
            return res.status(404).send({ message: "espacio no encontrado" })
        }
        return res.status(200).send(espacios)
    })
}
module.exports = {
    createEspacios,
    getEspacios,
    getSpecificEspacios,
    updateEspacios,
    deleteEspacios
}