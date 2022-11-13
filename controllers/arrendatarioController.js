const Arrendatario = require('../models/arrendatario');

const createArrendatario = (req, res) => {
    const { nombre, apellido, número, correo} = req.body;
    const newArrendatario = new Arrendatario({
        nombre,
        apellido,
        número,
        correo
    });

    newArrendatario.save((err, arrendatario) => {
        if (err){
            return res.status(400).send({ message: "Error al crear el arrendatario"})
        }
        return res.status(201).send(arrendatario)
    })

    
}

const getArrendatarios = (req, res) => {
    Arrendatario.find({}, (err, arrendatarios) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los arrendatarios" })
        }
        if (arrendatarios.length === 0) {
            return res.status(404).send({ message: "No se encontraron arrendatarioos" })
        }
        return res.status(200).send(arrendatarios)
    })
}

const getSpecificArrendatario = (req, res) => {
    const { id } = req.params;
    Arrendatario.findById(id).populate({ path: 'category' }).exec((err, arrendatario) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el arrendatario" })
        }
        if (!arrendatario) {
            return res.status(404).send({ message: "Arrendatario no encontrado" })
        }
        return res.status(200).send(arrendatario)
    })
}

const updateArrendatario = (req, res) => {
    const { id } = req.params;
    Arrendatario.findByIdAndUpdate(id, req.body, (err, arrendatario) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el arrendatario" })
        }
        if (!arrendatario) {
            return res.status(404).send({ message: "Arrendatario no encontrado" })
        }
        return res.status(200).send(arrendatario)
    })
}

const deleteArrendatario = (req, res) => {
    const { id } = req.params;
    Arrendatario.findByIdAndDelete(id, (err, arrendatarios) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el arrendatario" })
        }
        if (!arrendatarios) {
            return res.status(404).send({ message: "Arrendatario no encontrado" })
        }
        return res.status(200).send(arrendatarios)
    })
}


module.exports = {
    createArrendatario,
    getArrendatarios,
    getSpecificArrendatario,
    updateArrendatario,
    deleteArrendatario
}
