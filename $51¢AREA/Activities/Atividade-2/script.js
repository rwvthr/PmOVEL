alert("Olá, mundo!");

console.log("Hello World!")

var mensagem = "IFAL"
console.log(mensagem);

function soma() {   // primeira função
    console.log(4 + 6)
}
soma()

function soma2() {   // segunda função
    alert(4 + 6)
}

function soma3(x, y) {   // terceira função (exemplo com parâmetros)
    console.log(x + y)
}
soma3(2, 5)

// Arrow functions
soma4 = (x, y) => console.log(x + y) // quarta função

function soma5(a, b) { // quinta função (utilizando o return)
    return a + b
}
console.log(soma5(1, 5))


// A
confirm('Está gostando do JS?')
let texto = prompt('Digite um nome: ')
alert(texto)

function digitar() {
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    s = n1 + n2 
    alert(s)
}