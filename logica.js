// Função para converter o valor inserido 

function converter() {
    //Pegando o valor digitado pelo usuário 
    //getElementById é onde vai ser pego o valor de id do input
    const valor = document.getElementById("valor").value

    //Pegando a moeda escolhida pelo usuário para gastar
    const moeda = document.getElementById("moeda").value
    //Taxas de conversão
    const taxas = {
        "USD" : 0.17 , // Taxa BRL para USD
        "EUR" : 0.16 , //Taxa BRL para EUR
        "GBP" : 0.14 //Taxa BRL para GBP
        // pra puxar o valor fornecido vai no input e pega o id
    }
    //Verificando se o valor é um número válido
    if (valor && !isNaN(valor)) {
        //valor digitado se é um número e isNan é not as number
        //calcula o valor convertido
        const convertido = valor * taxas[moeda]
        document.getElementById("resultado").innerHTML =
        `o valor convertido é: ${convertido.toFixed(2)} ${moeda}`
        //to.Fixed é para pedir as casas decimais de um número
} else {
    //Seo valor for inválido, exiba ua mensagem de texto
    document.getElementById("resultado").innerHTML = 
    "Por favor insira um valor válido."
}
}