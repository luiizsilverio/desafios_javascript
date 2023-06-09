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

//------------ EXERCÍCIO 01 - PAR OU ÍMPAR

const btn01 = elementoBotao(01);

const numeroParOuImpar = (numero) => numero % 2 === 0 ? "par" : "ímpar";

btn01.addEventListener("click", (e) => {
    e.preventDefault();

    const numero = document.querySelector("input#numero1");
    const resultado = numeroParOuImpar(numero.value);
    const textResultado = `O número ${numero.value} é ${resultado}`;
    
    mostraResultado(01, textResultado);
})

//------------ EXERCÍCIO 02 - FATORIAL

const btn02 = elementoBotao(02);

const fatorial = (numero) => {
    let result = 1;
    if (numero > 1) {
        for (let n=1; n <= numero; n++) {
            result *= n;
        }
    }
    return result;
}

btn02.addEventListener("click", (e) => {
    e.preventDefault();

    const numero = document.querySelector("input#numero2");
    const resultado = fatorial(numero.value);
    const textResultado = `O fatorial de ${numero.value} é ${resultado}`;
    
    mostraResultado(02, textResultado);
})

//------------ EXERCÍCIO 03 - MÁXIMO E MÍNIMO

const btn03 = elementoBotao(03);

const maiorNumero = (a, b) => (a > b) ? a : b;

const menorNumero = (a, b) => (a < b) ? a : b;

btn03.addEventListener("click", (e) => {
    e.preventDefault();

    const numero1El = document.querySelector("input#numero3a");
    const numero2El = document.querySelector("input#numero3b");
    const numero1 = parseInt(numero1El.value);
    const numero2 = parseInt(numero2El.value);
    const menor = menorNumero(numero1, numero2);
    const maior = maiorNumero(numero1, numero2);
    const textResultado = [];

    textResultado.push(`O maior número é ${maior}`);
    textResultado.push(`O menor número é ${menor}`);
    
    mostraResultado(03, ...textResultado);
})

//------------ EXERCÍCIO 04 - INVERSÃO DE STRING

const btn04 = elementoBotao(04);

const inverteString = (texto) => {
    // return texto.split("").reverse().join("");
    let resultado = '';

    for (let i = texto.length -1; i >= 0; i--) {
        resultado += texto[i];
    }    
    return resultado;
}

btn04.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = document.querySelector("input#texto4");
    const textResultado = inverteString(texto.value);
    
    mostraResultado(04, textResultado);
})

//------------ EXERCÍCIO 05 - CONTAGEM DE VOGAIS

const btn05 = elementoBotao(05);

const contarVogais = (texto) => {
    const VOGAIS = 'aeiouAEIOU';
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        if (VOGAIS.includes(texto[i])) {
            total++;
        }
    }    
    return total;
}

btn05.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = document.querySelector("input#texto5");
    const resultado = contarVogais(texto.value);
    const textResultado = `O texto informado contém ${resultado} vogais.`;
    
    mostraResultado(05, textResultado);
})

//------------ EXERCÍCIO 06 - PALÍNDROMO

const btn06 = elementoBotao(06);

const ehPalindromo = (texto) => {
    const strInvertida = texto.split("").reverse().join("");
    return texto.toLowerCase() === strInvertida.toLowerCase();    
}

btn06.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = document.querySelector("input#texto6");
    const palindromo = ehPalindromo(texto.value);
    let textResultado;

    palindromo
        ? textResultado = `O texto informado é um palíndromo`
        : textResultado = `O texto informado NÃO é um palíndromo`;
    
    mostraResultado(06, textResultado);
})

//------------ EXERCÍCIO 07 - ARRAY DE NÚMEROS ALEATÓRIOS

const btn07 = elementoBotao(07);

const arrayAleatorio = (tamanho, vlmin, vlmax) => {
    const array = Array(tamanho);

    for (let i = 0; i < tamanho; i++) {
        array[i] = Math.floor(Math.random() * (vlmax - vlmin + 1) + vlmin);
    }

    return array;
}

btn07.addEventListener("click", (e) => {
    e.preventDefault();

    const tamanhoEl = document.querySelector("input#tamanho");
    const vlminEl = document.querySelector("input#vlmin");
    const vlmaxEl = document.querySelector("input#vlmax");
    const tamanho = parseInt(tamanhoEl.value);
    const vlmin = parseInt(vlminEl.value);
    const vlmax = parseInt(vlmaxEl.value);

    const array = arrayAleatorio(tamanho, vlmin, vlmax);
    const textResultado = `[${array.join(", ")}]`;
    
    mostraResultado(07, textResultado);
})

//------------ EXERCÍCIO 08 - ELEMENTO MAIS FREQUENTE

const btn08 = elementoBotao(08);

const elementoMaisFrequente = (lista) => {    
    const ranking = {};
    let vencedor = null;
    let qtdMax = 0;       

    for (const n of lista) {
        if (!ranking[n]) {
            ranking[n] = 1;
        } else {
            ranking[n] ++;
        }

        if (ranking[n] > qtdMax) {
            qtdMax = ranking[n];
            vencedor = n;
        }
    }

    return vencedor;
} 

btn08.addEventListener("click", (e) => {
    e.preventDefault();

    const arrayEl = document.querySelector("input#lista8");
    const lista = arrayEl.value
        .split(',')
        .map(item => parseInt(item.trim()));

    const elem = elementoMaisFrequente(lista);
    const textResultado = `O elemento mais frequente é o número ${elem}.`;
    
    mostraResultado(08, textResultado);
})
