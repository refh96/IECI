const getFecha = (fecha) => {
    const regex = /T|(.\d{3}Z)/g
    return fecha.replace(regex,' ')
}

module.exports = getFecha
