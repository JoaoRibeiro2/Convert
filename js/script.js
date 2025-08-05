// COTAÇÃO DE MOEDAS DO DIA

      const USD = 4.87
      const EUR = 5.32
      const GBP = 6.08

const form = document.querySelector("form")

const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
// Manipulando o input amount para receber somente números

amount.addEventListener("input", () =>{
      const hasCharactersRegex =  /\D+/g
      amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit do formulário

form.onsubmit = function(event){
      event.preventDefault()
      switch(currency.value){
            case "USD":
            convertCurrency(amount.value, USD, "US$ ")
            break
            case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
            case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
      }
}

// Função para converter a moeda

function convertCurrency(amount, price, symbol){
      console.log(amount, price, symbol)
}
