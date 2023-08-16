alert('voy al supermercado')

const plataQueTengoParaGastar = parseInt(prompt('cuanta plata tengo para gastar?'))

while (isNaN(plataQueTengoParaGastar)) {
    plataGastada = parseInt(prompt('eso no es un numero, por favor, ingrese numeros'))
}

let plataGastada = 0

while (plataGastada < plataQueTengoParaGastar) {
    alert('a gastar')
    plataGastada = plataGastada + 500
    alert('ya gaste ' + plataGastada + 'pesos')
}
    alert('me quede en 0, tengo que irme')