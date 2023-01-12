
import * as yup from 'yup'

const arrendatarioValidation = yup.object({
    nombre: yup.string().min(3, "Debe contener mínimo 3 caracteres")
    .max(50, "Debe contener máximo 50 caracteres")
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z0-9 ]$/,"El nombre no puede contener caracteres especiales"),
    apellido: yup.string().min(3, "Debe contener mínimo 3 caracteres")
    .max(50, "Debe contener máximo 50 caracteres")
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-Z0-9 ]$/,"El nombre no puede contener caracteres especiales"),
    número: yup.number().min(8)
    .max(8, "Debe contener 8 caracteres")
    .required("El número es obligatorio")
    .matches(),
    correo: yup.string().min(7, "Debe contener mínimo 7 caracteres")
    .max(50, "Debe contener máximo 50 caracteres")
    .required("El correo es obligatorio")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"El correo debe seguir el formato de correo")
})

export default arrendatarioValidation