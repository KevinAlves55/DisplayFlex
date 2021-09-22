/* 

    Existem 3 formas de se declarar uma variável em JavaScript:

    var (Escopa global).
    let (Escopo de bloco).
    const (Escopo imutável).

    Obs: Sempre crie uma variável com o const, só em última emergência criar-lá como var.

    Para criar variáveis precisamos saber quais regras devemos seguir.

    Regras:

    - Podem iniciar com $ , _ ou letras

    - Não utilizar palavras reservadas

    - Não utilize notação húngara

    - Case sensitive

    - Use nomes significativos

    - Camel case

    Exemplos:

    const NomeDoAluno = Kevin
    const NotaDoAluno = 10
    const RgDoAluno = 335687140

    Para mandar uma mensagem no (console), utilizamos o comando:

    console.log("Aqui vem a mensagem")

*/

// console.log("OIII")

const formulario = document.getElementById("formulario")
/*  

    O comando document.getElementById("NomeDoId") serve para pegar um id do documento HTML para podemos manipula-ló.

*/
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")

function soma () {
/* 
    O comando function serve para criamos uma função e dentro dela colocamos o que for preciso para construir parte do sistema.
        
    E por fim adicionamos uma cor ao clicar no botão.
*/
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    // O comando parseInt() serve para convertemos uma string para valor inteiro.
    
    formulario.classList.add("red")
    // O comando .classList.add("") serve para adicionamos uma classe com uma ou mais estilizações especificas.
}
function sub () {
    resultado.value = parseInt( numero1.value) - parseInt(numero2.value)
    formulario.classList.add("yellow")
}
function mult () {
    resultado.value = parseInt( numero1.value) * parseInt(numero2.value)
    formulario.classList.add("silver")
}
function div () {
    resultado.value = parseInt( numero1.value) / parseInt(numero2.value)
    formulario.classList.add("black")
}

// Nesse bloco de código adicionamos todos os evento que criamos acima, utilizando o .addEventListener("click", ).
somar.addEventListener("click", soma)
subtrair.addEventListener("click", sub)
multiplicar.addEventListener("click", mult)
dividir.addEventListener("click", div)