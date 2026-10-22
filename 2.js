function verificarOrcamento(n1, n2){
    if (n1 > n2){
        return n1 == n1
    } else {
        return n1 !== n1
    }
}

let valorProduto = Number(prompt("Digite o valor do produto: "))
let saldoDisponivel = Number(prompt("Digite o saldo da sua conta: "))

alert(verificarOrcamento(saldoDisponivel, valorProduto))

//bugou minha cabeça