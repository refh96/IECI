// Creamos array con los meses del año
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Construimos el formato de salida
const getFecha = (fecha) => {
    const regex = /T|(.\d{3}Z)/g
    return fecha.replace(regex,' ')
}

module.exports = getFecha
