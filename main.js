function ConverterDol(){
  var valorElemento = document.getElementById("valor")
  var valorReal = parseFloat(valorElemento.value)
  var valorDolar = (valorReal / 5).toFixed(2)
  
  var valorConvertido = document.getElementById("valorConvertido")
  var resultado = "Você tem U$ " + valorDolar
  valorConvertido.innerHTML = resultado
}

function ConverterEur(){
  var valorElemento = document.getElementById("valor")
  var valorReal = parseFloat(valorElemento.value)
  var valorEur = (valorReal / 6).toFixed(2)
  
  var valorConvertido = document.getElementById("valorConvertido")
  var resultado = "Você tem € " + valorEur
  valorConvertido.innerHTML = resultado
}
