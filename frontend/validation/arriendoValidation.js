
import * as yup from 'yup'

const hoy = new Date
const semana = new Date
semana.setDate(hoy.getDate() + 7)

const arriendoValidation = yup.object()({
    fecha_inicio: yup.date().min(hoy, "La fecha mínima es hoy")
    .max(semana, "No se puede reservar una semana después")
    .required("La fecha de inicio es requerida"),
    fecha_fin: yup.date().min(hoy, "La fecha mínima es hoy")
    .max(semana, "No se puede reservar una semana después")
    .required("La fecha de fin es requerida")
})



export default arriendoValidation