const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    
    console.log(currencySelect.value)
    const dolarToday = 5.94
    const euroToday = 6.5
    const libraToday = 7.61
    const bitcoinToday = 597263.68


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

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
   
    console.log("Trocou de moeda")


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
        currencyImage.src = "/assets/bitcoin 1.png"

    } 

    convertValues()
    
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)

