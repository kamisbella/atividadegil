function calcularIMC (kg, m) {
    imc = kg * (m * m)

    if (IMC < 18.5){
        alert("abaixo do peso")
    } else if (imc >= 18.5 && imc < 24.9){
        alert("normal")
    }
    else{
        alert("sobrepeso")
    }
}

//achei um pouco complicada