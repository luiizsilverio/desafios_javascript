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
