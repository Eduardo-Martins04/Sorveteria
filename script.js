/*Faça um programa que processe diversas vendas. O programa deverá apresentar um menu indicando os preços dos
produtos. Cada Venda efetuada pode ser composta por diversas unidades de diversos produtos. Os produtos são
identificados através de seus códigos. A cada venda efetuada informe o preço a pagar. No final do dia,
o programa deverá emitir um relatório com as seguintes informações:
*Numero total de itens vendidos de cada produto/
*total pago para cada produto
* total arrecadado(somando todos os produtos)
* media de valor pago por pedidio*/
let QtdTotalProdutoA = 0
let QtdTotalProdutoB = 0
let QtdTotalProdutoC = 0
let QtdTotalProdutoD = 0
let QtdTotalProdutoE = 0
let ValorTotalProdutoA = 0
let ValorTotalProdutoB = 0
let ValorTotalProdutoC = 0
let ValorTotalProdutoD = 0
let ValorTotalProdutoE = 0
let TotalArrecadado = 0
let MediaPorPedidio = 0
function comprar(e){
    alert("A) Refrigerante 3,50 \nB) Casquinha Simples 4,00 \nC) Casquinha Dupla 5,00 \nD) Sundae 6,00 \nE) Banana Split 8,50")
    while (true) {
        let produto = prompt("Código do produto que deseja comprar:")
        let quantidade = Number(prompt("Quantidade:"))
        if (produto.toLowerCase() == 'a') {
            QtdTotalProdutoA = QtdTotalProdutoA + quantidade
            ValorTotalProdutoA = 3.50 * QtdTotalProdutoA
        }
        else if (produto.toLowerCase() == 'b') {
            QtdTotalProdutoB = QtdTotalProdutoB + quantidade
            ValorTotalProdutoB = 4.00 * QtdTotalProdutoB
        }
        else if (produto.toLowerCase() == 'c') {
            QtdTotalProdutoC = QtdTotalProdutoC + quantidade
            ValorTotalProdutoC = 5.00 * QtdTotalProdutoC
        }
        else if (produto.toLowerCase() == 'd') {
            QtdTotalProdutoD = QtdTotalProdutoD + quantidade
            ValorTotalProdutoD = 6.00 * QtdTotalProdutoD
        }
        else if (produto.toLowerCase() == 'e') {
            QtdTotalProdutoE = QtdTotalProdutoE + quantidade
            ValorTotalProdutoE = 8.50 * QtdTotalProdutoE
        }
        let resposta = ''
        while (resposta != 'n' && resposta != 's') {
            resposta = prompt("Deseja comprar mais algum item?").toLowerCase()[0]
        } if (resposta == 'n') {
            alert("Obrigado, Volte Sempre!")
            break
        }

    }
    TotalArrecadado = ValorTotalProdutoA + ValorTotalProdutoB + ValorTotalProdutoC + ValorTotalProdutoD + ValorTotalProdutoE
    let TotalDeProtutos = QtdTotalProdutoA + QtdTotalProdutoB + QtdTotalProdutoC + QtdTotalProdutoD + QtdTotalProdutoE
    MediaPorPedidio = TotalArrecadado / TotalDeProtutos
    if (QtdTotalProdutoA > 0) {
        alert(`Foram vendidos ${QtdTotalProdutoA} refrigerantes e isso deu um total de R$${ValorTotalProdutoA}`)
    }
    if (QtdTotalProdutoB > 0) {
        alert(`Foram vendidas ${QtdTotalProdutoB} casquinhas simples e isso deu um total de R$${ValorTotalProdutoB}`)
    }
    if (QtdTotalProdutoC > 0) {
        alert(`Foram vendidas ${QtdTotalProdutoC} casquinhas duplas e isso deu um total de R$${ValorTotalProdutoC}`)
    }
    if (QtdTotalProdutoD > 0) {
        alert(`Foram vendidos ${QtdTotalProdutoD} sundaes e isso deu um total de R$${ValorTotalProdutoD}`)
    }
    if (QtdTotalProdutoE > 0) {
        alert(`Foram vendidos ${QtdTotalProdutoE} bananas split e isso deu um total de R$${ValorTotalProdutoE}`)
    }
    alert(`Ao total foi arrecadado R$${TotalArrecadado}`)
    alert(`A media do valor do pedido foi de R$${MediaPorPedidio.toFixed(2)}`)}
