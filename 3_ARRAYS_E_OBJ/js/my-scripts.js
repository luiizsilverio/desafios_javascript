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

    const arrayEl = document.querySelector("input#lista1");
    const lista = arrayEl.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const newList = removerDuplicados(lista);
    const textResultado = `Lista sem números duplicados: [${newList.join(', ')}].`;
    
    mostraResultado(01, textResultado);
})

//------------ EXERCÍCIO 02 - CONCATENAÇÃO DE ARRAYS

const btn02 = elementoBotao(02);

const concatenarArrays = (array1, array2) => {    
    return [...array1, ...array2];
} 

btn02.addEventListener("click", (e) => {
    e.preventDefault();

    const array1El = document.querySelector("input#lista2a");
    const array2El = document.querySelector("input#lista2b");

    const lista1 = array1El.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const lista2 = array2El.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const newList = concatenarArrays(lista1, lista2);
    const textResultado = `[${newList.join(', ')}]`;
    
    mostraResultado(02, textResultado);
})

//------------ EXERCÍCIO 03 - INTERSEÇÃO DE ARRAYS

const btn03 = elementoBotao(03);

const intersecaoArrays = (array1, array2) => {   
    return array1.filter(elem => array2.includes(elem));
} 

btn03.addEventListener("click", (e) => {
    e.preventDefault();

    const array1El = document.querySelector("input#lista3a");
    const array2El = document.querySelector("input#lista3b");

    const lista1 = array1El.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const lista2 = array2El.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const newList = intersecaoArrays(lista1, lista2);
    const textResultado = `[${newList.join(', ')}]`;
    
    mostraResultado(03, textResultado);
})

//------------ EXERCÍCIO 04 - MÉDIA DOS ELEMENTOS

const btn04 = elementoBotao(04);

const calculaMedia = (array) => {   
    const soma = array.reduce((acc, valor) => acc + valor, 0);
    return soma / array.length;
} 

btn04.addEventListener("click", (e) => {
    e.preventDefault();

    const arrayEl = document.querySelector("input#lista4");

    const lista = arrayEl.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const media = calculaMedia(lista);
    const textResultado = `Média dos elementos = ${media.toFixed(2)}`;
    
    mostraResultado(04, textResultado);
})

//------------ EXERCÍCIO 05 - SOMA DE PROPRIEDADES

const btn05 = elementoBotao(05);

const somaPropriedades = (obj) => {   
    return Object.values(obj).reduce((acc, valor) => {
        return typeof valor === "number" ? acc + valor : acc
    }, 0);
} 

btn05.addEventListener("click", (e) => {
    e.preventDefault();

    const obj5aEl = document.querySelector("input#obj5a");
    const obj5bEl = document.querySelector("input#obj5b");
    const obj1 = eval('(' + obj5aEl.value + ')');
    const obj2 = eval('(' + obj5bEl.value + ')');

   
    const soma1 = somaPropriedades(obj1);
    const soma2 = somaPropriedades(obj2);
    
    mostraResultado(05, 
        `Soma do primeiro objeto: ${soma1}`,
        `Soma do segundo objeto: ${soma2}`,
    );
})

//------------ EXERCÍCIO 06 - FILTRO DE PROPRIEDADES

const btn06 = elementoBotao(06);

const filtraPropriedades = (obj, lista) => {
    const newObj = {};
    for (prop in obj) {
        if (lista.includes(prop)) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

btn06.addEventListener("click", (e) => {
    e.preventDefault();

    const obj6El = document.querySelector("input#obj6");
    const listaEl = document.querySelector("input#array6");
    
    const lista = listaEl.value.split(', ');
    const obj = eval('(' + obj6El.value + ')');
   
    const newObj = filtraPropriedades(obj, lista);

    mostraResultado(06, JSON.stringify(newObj));    
})

//------------ EXERCÍCIO 07 - CONCATENAÇÃO DE OBJETOS

const btn07 = elementoBotao(07);

const concatenaObjetos = (obj1, obj2) => {
    return {...obj1,...obj2};
}

btn07.addEventListener("click", (e) => {
    e.preventDefault();

    const obj7aEl = document.querySelector("input#obj7a");
    const obj7bEl = document.querySelector("input#obj7b");        
    const obj1 = eval('(' + obj7aEl.value + ')');
    const obj2 = eval('(' + obj7bEl.value + ')');
   
    const newObj = concatenaObjetos(obj1, obj2);

    mostraResultado(07, JSON.stringify(newObj));    
})
