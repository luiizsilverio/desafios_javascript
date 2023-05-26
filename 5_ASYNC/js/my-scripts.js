const botoes = document.querySelectorAll('button.btn');
const resultados = document.querySelectorAll('div.resultado');

const elementoBotao = (exercicio) => {
    return botoes[exercicio -1];
}

const elementoResultado = (exercicio) => {
    return resultados[exercicio -1];
}

const mostraResultado = (exercicio, texto, ...rest) => {
    const divResultado = elementoResultado(exercicio);
    if (!divResultado) return;

    divResultado.style.display = rest.length > 0 ? "block" : "flex";
    divResultado.removeAttribute("hidden");

    divResultado.innerHTML = `
        <span>Resultado:</span>
        <p>${texto}</p>
        ${
            rest.map(linha => `<p>${linha}</p>`)
            .join('')
        }
    `;
}

//------------ EXERCÍCIO 01 - TEMPORIZADOR COM CALLBACK

const btn01 = elementoBotao(01);

let  timer1;

function temporizador(segundos, acao) {
    setTimeout(() => acao(), segundos);
}

btn01.addEventListener("click", (e) => {
    e.preventDefault();

    clearTimeout(timer1);

    const tempoEl = document.querySelector("input#tempo1");
    const tempo = parseInt(tempoEl.value);

    temporizador(tempo, () => alert("Olá mundo"));

    // tituloEl.textContent = inputEl.value;
})

//------------ EXERCÍCIO 02 - MAPEAR ARRAY

const btn02 = elementoBotao(02);

function myMap(array, callback) {
    const lista = [];
    array.forEach((item, index) => {
        lista.push(callback(item));
    })
    return lista;
}

function transformacao(item) {
    return item * 2;
}

btn02.addEventListener("click", (e) => {
    e.preventDefault();

    const listaEl = document.querySelector("input#lista2");
    const lista = listaEl.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const newList = myMap(lista, transformacao);

    const textResultado = `[${newList.join(', ')}]`;

    mostraResultado(02, textResultado);
})

//------------ EXERCÍCIO 03 - EXECUÇÃO CONDICIONAL

const btn03 = elementoBotao(03);

function verificar(valor) {
    const verificarEl = document.querySelector('input#verificar');
    return eval(verificarEl.value);
}

function executar() {
    return "Verdadeiro";
}

function naoExecutar() {
    return "Falso";
}

function execucaoCondicional(cbVer, cbExe, cbNao) {
    return cbVer() ? cbExe() : cbNao();
}

btn03.addEventListener("click", (e) => {
    e.preventDefault();

    const textResultado = execucaoCondicional(verificar, executar, naoExecutar);

    mostraResultado(03, textResultado);
})

//------------ EXERCÍCIO 04 - SIMULANDO API

const btn04 = elementoBotao(04);

function simularAPI(valor, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(valor), tempo);
    })
}

btn04.addEventListener("click", async (e) => {
    e.preventDefault();

    const resultadoEl = document.querySelector('input#valor4');
    const tempoEl = document.querySelector('input#tempo4');
    const resultado = resultadoEl.value;
    const tempo = tempoEl.value;

    const textResultado = await simularAPI(resultado, tempo);

    mostraResultado(04, textResultado);
})

//------------ EXERCÍCIO 05 - CARREGANDO DADOS COM FETCH

const btn05 = elementoBotao(05);

function simularAPI(valor, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(valor), tempo);
    })
}

async function buscaAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) return '';

        const data = await response.json();

        return JSON.stringify(data, null, 2);
    } catch {
        return '';
    }
}

btn05.addEventListener("click", async (e) => {
    e.preventDefault();

    const textResultado = await buscaAPI();

    mostraResultado(05, textResultado);
})


//------------ EXERCÍCIO 06 - CADEIA DE PROMISES

const btn06 = elementoBotao(06);

function buscaURL(url) {
  return fetch(url)
    .then(response => response.json())
}

async function executarEmSequencia(urls) {
    const lista = [];

    for (const url of urls) {
      const dados = await buscaURL(url);
      lista.push(dados);
    }

    return lista;
}

btn06.addEventListener("click", async (e) => {
    e.preventDefault();

    const arrayUrls = [
        'https://jsonplaceholder.typicode.com/comments?id=1',
        'https://jsonplaceholder.typicode.com/comments?id=2',
        'https://jsonplaceholder.typicode.com/comments?id=3',
    ]

    let textResultado;
    await executarEmSequencia(arrayUrls)
      .then(data => textResultado = JSON.stringify(data));

    mostraResultado(06, textResultado);
})

//------------ EXERCÍCIO 07 - RETRY COM PROMISES

const btn07 = elementoBotao(07);

function tentarNovamente(callback, tentativas, intervalo) {
  return new Promise(async (resolve, reject) => {
    for(let retry = 1; retry <= tentativas; retry++) {
      try {
        const resultado = await callback();
        return resolve(resultado);
      } catch (error) {
        if (retry === tentativas) return reject(error);
        await new Promise((r) => setTimeout(r, intervalo));
      }
    }
  })
}

const fetchComRetry = (url) => fetch(url);

btn07.addEventListener("click", async (e) => {
    e.preventDefault();

    const urlEl = document.querySelector('input#url');
    const url = urlEl.value;

    tentarNovamente(() => fetchComRetry(url), 3, 1000)
      .then(response => response.json())
      .then(data => mostraResultado(07, JSON.stringify(data)))
      .catch(erro => mostraResultado(07, "Erro ao acessar URL"))
})
