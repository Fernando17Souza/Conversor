const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectPrime = document.querySelector(".currency-select-prime")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    
    console.log(currencySelect.value)
    const dolarToday = 5.94
    const euroToday = 6.5
    const libraToday = 7.61
    const bitcoinToday = 597263.68
    const realToday = 1


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "real"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
         }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    

}



function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
   


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
           
    
    }

    if( currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3.png"
        
    }
    
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"

    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"

    } 

    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }


    convertValues()
    
}


function replaceCurrency(){
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currency-image")

    
    if(currencySelectPrime.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }

    if(currencySelectPrime.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if(currencySelectPrime.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Design sem nome 3.png"
    }

    if(currencySelectPrime.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if(currencySelectPrime.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }
    
}


function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    if (isNaN(inputCurrencyValue)) {
        alert("Digite um valor válido")
        return
    }

const rates = {
    real: 1,
    dolar: 5.94,
    euro: 6.5,
    libra: 7.61,
    bitcoin: 597263.68
}

const locales = {
    real: "pt-br",
    dolar: "en-US",
    euro: "de-DE",
    libra: "en-GB",
    bitcoin: "ja-JP"
}

const symbols = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR",
    libra: "GBP",
    bitcoin: "BTC"
}

const moedaOrigem = currencySelectPrime.value
const moedaDestino = currencySelect.value

const valorConvertido = (inputCurrencyValue * rates[moedaOrigem]) / rates[moedaDestino]

currencyValueToConvert.innerHTML = new Intl.NumberFormat(locales[moedaOrigem], {
    style: "currency",
    currency: symbols[moedaOrigem]
}).format(inputCurrencyValue)

currencyValueConverted.innerHTML = new Intl.NumberFormat(locales[moedaDestino], {
    style: "currency",
    currency: symbols[moedaDestino]
}).format(valorConvertido)

}

currencySelectPrime.addEventListener("change",replaceCurrency)
currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)


