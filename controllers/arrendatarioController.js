const Arrendatario = require('../models/arrendatario');
const Regex = require('../utils/testRegex');

const createArrendatario = (req, res) => {
    const { nombre, apellido, número, correo } = req.body
    const newArrendatario = new Arrendatario({
        nombre,
        apellido,
        número,
        correo
    })
    newArrendatario.save((error, arrendatario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el arrendatario" })
        }
        if(!Regex.nombreRegex(nombre)){
            return res.status(400).send({ message: "Mal formato de nombre" })
        }
        if(!Regex.nombreRegex(apellido)){
            return res.status(400).send({ message: "Mal formato de apellido" })
        }
        if(!Regex.correoRegex(correo)){
            return res.status(400).send({ message: "Mal formato de correo" })
        }
        if(!Regex.numeroRegex(número)){
            return res.status(400).send({ message: "Mal formato de número" })
        }
        return res.status(201).send(arrendatario)
    })
}

const getArrendatarios = (req, res) => {
    Arrendatario.find({}).populate({ path: 'status' }).exec((error, arrendatarios) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo realizar la busqueda" })
        }
        if (arrendatarios.length === 0) {
            return res.status(404).send({ message: "No se encontraron arrendatarios" })
        }
        return res.status(200).send(arrendatarios)
    })
}

const updateArrendatario = (req, res) => {
    const { id } = req.params
    Arrendatario.findByIdAndUpdate(id, req.body, (error, arrendatario) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el arrendatario" })
        }
        if (!arrendatario) {
            return res.status(404).send({ message: "No se encontro el arrendatario" })
        }
        return res.status(200).send({ message: "Arrendatario modificado" })
    })
}

const deleteArrendatario = (req, res) => {
    const { id } = req.params
    Arrendatario.findByIdAndDelete(id, (error, arrendatario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el arrendatario" })
        }
        if (!arrendatario) {
            return res.status(404).send({ message: "No se ha podido encontrar un arrendatario" })
        }
        return res.status(200).send({ message: "Se ha eliminado el arrendatario de forma correcta" })
    })
}

const getArrendatario = (req, res) => {
    const { id } = req.params
    Arrendatario.findById(id, (error, arrendatario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido modificar el arrendatario" })
        }
        if (!arrendatario) {
            return res.status(404).send({ message: "No se ha podido encontrar un arrendatario" })
        }
        return res.status(200).send(arrendatario)
    })
}

module.exports = {
    createArrendatario,
    getArrendatarios,
    updateArrendatario,
    deleteArrendatario,
    getArrendatario
}