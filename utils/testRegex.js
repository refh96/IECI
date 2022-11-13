function correoRegex(input) {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(input);
}

function numeroRegex(input){
    let regex = /^((9\d{8})|(412\d{6}))$/
    return regex.test(input);
}
module.exports = {
    correoRegex,
    numeroRegex
}