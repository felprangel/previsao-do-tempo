async function buscaDados(cidade = 'Nova Serrana') {
    const resposta = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b546359c6934f8c921231553240503&q=${cidade}&aqi=no`)
    const dados = await resposta.json()

    const previsao = {
        cidade: dados.location.name,
        temperatura: dados.current.temp_c,
        sensacao: dados.current.feelslike_c,
        umidade: dados.current.humidity,
        clima: dados.current.condition.text,
        ehDia: dados.current.is_day
    }

    manipulaDom(previsao)
}

function buscaCidade() {
    const cidade = document.querySelector('#cidade')
    buscaDados(cidade.value)
    cidade.value = ''
}

async function manipulaDom(dados) {
    const previsao = document.querySelector('#previsao')
    const cidade = document.querySelector('#nome_cidade')
    const temperatura = document.querySelector('#temperatura')
    const sensacao = document.querySelector('#sensacao')
    const umidade = document.querySelector('#umidade')

    previsao.innerText = dados.clima
    cidade.innerText = dados.cidade
    temperatura.innerText = `${dados.temperatura} °C`
    sensacao.innerText = `Sensação Térmica: ${dados.sensacao} °C`
    umidade.innerText = `Umidade: ${dados.umidade}%`

}

buscaDados()