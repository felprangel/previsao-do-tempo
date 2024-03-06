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

    return previsao
}

buscaDados('São Paulo')