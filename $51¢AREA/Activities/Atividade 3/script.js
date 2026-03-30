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

function digitar2() {
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    alert(`O somatório é: ${soma5(n1, n2)}`)
}

function comparardeclaracoes() {
    //usando var
    var linguagem = "JavaScript";
    var linguagem = "Python"; //ok, pode declarar
    console.log('var:', linguagem); //Python

    //usando let
    let ano = 2024;
    //let ano = 2025; // Erro! Não pode redeclarar com let no mesmo escopo
    ano = 2025; // ok, pode reatribuir
    console.log('let:', ano); //2025

    //usando const
    const planeta = 'Terra'
    //planeta = 'Marte'; //Erro! Não pode reatribuir
    console.log('const:', planeta); //terra

    if (true) {
        var linguagem = "C++"; //mesmo escopo da função
        let ano = 2030; // novo escopo (dentro do bloco)
        const planeta = 'Marte'; // novo escopo (dentro do bloco)
        console.log('Dentro do bloco:');
        console.log('var:', linguagem)  //C++
        console.log('let:', ano) // 2030
        console.log('const:', planeta) //Marte
    }

    console.log('Fora do bloco: ');
    console.log('var:', linguagem); // C++ (alterado dentro do bloco)
    console.log('let:', ano); // 2025 (a versão dentro do bloco não afeta essa)
    console.log('const:', planeta); // terra (item)
    
}