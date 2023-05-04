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

//------------ EXERCÍCIO 01 - ELEMENTOS DUPLICADOS

const btn01 = elementoBotao(01);

const removerDuplicados = (lista) => {    
    let qtdMax = 0;       
    const newList = [];

    for (const n of lista) {
        if (!newList.find(item => item === n)) {
            newList.push(n);
        } 
    }

    // return newList; // minha solução
    return Array.from(new Set(lista)); // solução do instrutor
} 

btn01.addEventListener("click", (e) => {
    e.preventDefault();

    const arrayEl = document.querySelector("input#lista9");
    const lista = arrayEl.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const newList = removerDuplicados(lista);
    const textResultado = `Lista sem números duplicados: [${newList.join(', ')}].`;
    
    mostraResultado(01, textResultado);
})
