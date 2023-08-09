
let numero1 = 10;
let numero2 = 8;

function subtracao(num1, num2) {
    if(num1 < num2) {
        return console.log('Não foi possivel subtrair')
    } else {
        return console.log(num1 - num2)
    }
}

subtracao(numero1, numero2)

function divisao(num1, num2) {
    if (num2 < 0) {
        return console.log('Não foi possivel dividir')
    } else {
        return console.log(num1 / num2)
    }
}

divisao(numero1, numero2)
