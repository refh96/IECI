function correoRegex(input) {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(input);
}

function numeroRegex(input){
    let regex = /^((9\d{8})|(412\d{6}))$/
    return regex.test(input);
}

function fechaRegex(input){
    let regex = /^(3[01]|[12]\d|0?[1-9])([\-\/.])(0?[1-9]|1[1-2])\2\d{4}$/
    return regex.test(input);
}

function horaRegex(input){
    let regex = /^(2[0-4]|1\d|0?[1-9])[:.][0-5]\d$/
    return regex.test(input);
}

function nombreRegex(input){
    let regex = /^[a-záéíóú ,.'-]+$/i
    return regex.test(input);
}

module.exports = {
    correoRegex,
    numeroRegex,
    fechaRegex,
    horaRegex,
    nombreRegex
}