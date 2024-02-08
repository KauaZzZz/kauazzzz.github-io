const botao = document.getElementById ("butao")
const resposta = document.getElementById ("resposta")

var historico = []

var numberCount = {};

function countNumberDraws(drawNumber) {
    if (numberCount.hasOwnProperty(drawNumber)) {
        numberCount[drawNumber]++;
    } else {
        numberCount[drawNumber] = 1;
    }
}
function objectToString(obj) {
    let result = '<ul>';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += `<li>Number ${key} was drawn ${obj[key]} times.</li>`;
        }
    }
    result += '</ul>';
    return result;
}
botao.addEventListener ("click", () => {
    const sortear  = Math.floor(Math.random() * 6) +1
    historico.push(sortear)
    countNumberDraws (sortear)
    resposta.innerHTML = ""
    for (item in historico) {
        const element = document.createElement ("p")
        element.innerHTML = historico[item] 
        resposta.appendChild (element)
    }
    const elemento = document.createElement ("p")
    elemento.innerHTML = objectToString (numberCount) 
    resposta.appendChild (elemento)
})
