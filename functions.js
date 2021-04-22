function numGen(num) {
    var num = Math.floor(Math.random() * 100) + 1;

    return num
}

function checkInserimentoNum(numero) {
    num = parseInt(numero)
    if (isNaN(num)) {
        return check = false
    } else {
        check = true
        return num
    }
}

function checkInserimentoString(text) {
    num = parseInt(text)
    space = text
    console.log(num)
    if (isNaN(num)) {
        if (space == '') {
            check = false
        } else {
            check = true   
        }
    } else {
        check = false
    }
}