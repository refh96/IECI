<<<<<<< HEAD
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

=======
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

>>>>>>> 1046fdaa2324401147a7f39448425ab6a9c6e78a
export default arriendoValidation