import * as yup from 'yup'

const espacioValidation = yup.object({
    nombre: yup.string().min(3, "Debe contener mínimo 3 caracteres")
    .max(50, "Debe contener máximo 50 caracteres")
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z0-9 ]+$/,"El nombre no puede contener caracteres especiales"),
    aforo: yup.number().min(1,"El aforo debe ser positivo")
    .required("El aforo es obligatorio"),
    descripcion: yup.string().min(3, "Debe contener mínimo 3 caracteres")
    .max(200, "Debe contener máximo 50 caracteres")
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z0-9 ]+$/,"El nombre no puede contener caracteres especiales"),
    tiempoMáximoDeArriendo: yup.number().min(1,"El tiempo máximo de arriendo debe ser positivo")
    .max(48, "El tiempo máximo de arriendo no puede ser mayor a 48")
    .required("El tiempo máximo de arriendo es obligatorio"),

})

export default espacioValidation