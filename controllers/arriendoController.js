const Arriendo = require('../models/arriendo');
const Arrendatario = require('../models/arrendatario');

const createArriendo = (req, res) => {
    const { fecha_inicio, fecha_fin, arrendatario, espacio } = req.body;
    const newArriendo = new Arriendo({
        fecha_inicio,
        fecha_fin,
        arrendatario,
        espacio 
    })

    const now = new Date
    const nextWeek = new Date
    nextWeek.setDate(nextWeek.getDate() + 7)
    const hourOnMilS = 3600000
    const inicio = new Date(fecha_inicio)
    const fin = new Date(fecha_fin)
    const jsonNow = now.toJSON()

    if(inicio > fin){
        return res.status(400).send({ message: 'Error, fecha de inicio es después de la fecha de fin'})
    }
    else if((fin - inicio)/hourOnMilS > 6){
        return res.status(400).send({ message: 'Error, reserva está fuera del rango de 6 horas'}) 
    }
    else if(inicio < now || inicio > nextWeek || fecha_fin < now || fecha_fin > nextWeek){
        return res.status(400).send({ message: 'Error, fechas están fuera del rango de una semana'})
    }
    else addArriendo(arrendatario, newArriendo, jsonNow, res)
}

const addArriendo = (arrendatario, newArriendo, jsonNow, res) => {
    Arrendatario.findById(arrendatario).where('status', 'Permitido').exec((error, arrendatario)=>{
        if(error){
            return res.status(400).send({message: 'Error al buscar el arrendatario'})
        }
        if(!arrendatario){
            return res.status(400).send({message: 'El usuario está bloqueado'})
        }
        else{    
            Arriendo.find({fecha_fin:{$gt:jsonNow}, arrendatario}, (error, arriendo)=>{
                if(error){
                    return res.status(400).send({ message:'Error al buscar los arriendos'})
                }
                if(arriendo.length > 3){
                    return res.status(400).send({ message:'Error, ya ha reservado más de 3 espacios comunes'})
                }
                else{
                    newArriendo.save((error, arriendo) =>{
                        if(error){
                            return res.status(400).send({ message: 'Error al crear el arriendo'})
                        }
                        return res.status(200).send(arriendo)
                    })
                }
            })
        }  
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