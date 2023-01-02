import * as yup from 'yup'

const productValidation = yup.object({
    name: yup.string().min(3, "Debe contener")
})