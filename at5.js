function  calcularSubtotalItem(item){
    let total = item.preco*item.quantidade
    return total
}

function calcularTotalCarrinho(carrinho){
    let valortotal = 0 
    carrinho.forEach(item => {
        valortotal += calcularSubtotalItem(item)
        
    });
    return valortotal
}

//nao entendi