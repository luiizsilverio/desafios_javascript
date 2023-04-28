const botoes = document.querySelectorAll('button.btn');
const resultados = document.querySelectorAll('div.resultado');

const elementoBotao = (exercicio) => {
    return botoes[exercicio -1];
}

const elementoResultado = (exercicio) => {
    return resultados[exercicio -1];
}

const mostraResultado = (exercicio, texto) => {
    const divResultado = elementoResultado(exercicio); 
    if (!divResultado) return;

    divResultado.removeAttribute("hidden");
    divResultado.style.display = "flex";
    divResultado.innerHTML = `
        <span>Resultado:</span>
        <p>${texto}</p>
    `;
}

//------------ EXERCÍCIO 01 - CONVERSÃO DE TEMPERATURA

const CELSIUS = 0;
const FARENHEIT = 1;
const btn01 = elementoBotao(01);

const converteCelsiusParaFarenheit = (valor, medida1, medida2) => (valor * 9/5) + 32;

const converteFarenheitParaCelsius = (valor, medida1, medida2) => (valor - 32) * 5/9;

btn01.addEventListener("click", (e) => {
    e.preventDefault();
    
    const medida1 = document.querySelector("select#medida-1");
    const medida2 = document.querySelector("select#medida-2");
    const temperatura = document.querySelector("input#temperatura");
    let resultado = 0;
    let textResultado = '';

    if (medida1.value === medida2.value) {
        resultado = parseFloat(temperatura.value);
    } else
    if (medida1.value == CELSIUS && medida2.value == FARENHEIT)  {
        resultado = converteCelsiusParaFarenheit(temperatura.value, medida1.value, medida2.value);
    } else 
    if (medida1.value == FARENHEIT && medida2.value == CELSIUS) {
        resultado = converteFarenheitParaCelsius(temperatura.value, medida1.value, medida2.value);
    }    
    
    if (medida2.value == CELSIUS) {
        textResultado = `${resultado.toFixed(2)} Celsius`;        
    } else {
        textResultado = `${resultado.toFixed(2)} Farenheit`;
    }

    mostraResultado(01, textResultado);
});

//------------ EXERCÍCIO 02 - CÁLCULO DE IMC

const btn02 = elementoBotao(02);

const calculaIMC = (peso, altura) => peso / (altura * altura);

btn02.addEventListener("click", (e) => {
    e.preventDefault();

    const peso = document.querySelector("input#peso");
    const altura = document.querySelector("input#altura");    
    const imc = calculaIMC(peso.value, altura.value);

    let textResultado = `${imc.toFixed(2)}`;

    if (imc < 18.5) {
        textResultado += ' (Magro)';
    }
    else if (imc < 25) {
        textResultado = `${textResultado} (Normal)`;
    }
    else if (imc < 30) {
        textResultado = `${textResultado} (Sobrepeso)`;
    }
    else if (imc < 35) {
        textResultado = `${textResultado} (Obesidade grau 1)`;
    }
    else if (imc < 35) {
        textResultado = `${textResultado} (Obesidade grau 2)`;
    }
    else {
        textResultado = `${textResultado} (Obesidade grau 3)`;
    }        

    mostraResultado(02, textResultado);
})

//------------ EXERCÍCIO 03 - CONCATENAÇÃO

const btn03 = elementoBotao(03);

btn03.addEventListener("click", (e) => {
    e.preventDefault();

    const idade = document.querySelector("input#idade");
    const nome = document.querySelector("input#nome");
    const cidade = document.querySelector("input#cidade");
    
    const textResultado = `Olá, ${nome.value}. Você tem ${idade.value} anos e mora em ${cidade.value}.`;

    mostraResultado(03, textResultado);
})

//------------ EXERCÍCIO 04 - CÁLCULO DE ÁREA E PERÍMETRO

const btn04 = elementoBotao(04);

const calculaArea = (comprimento, largura) => comprimento * largura;

const calculaPerimetro = (comprimento, largura) => 2 * (comprimento + largura);

btn04.addEventListener("click", (e) => {
    e.preventDefault();

    const comprimentoEl = document.querySelector("input#comprimento");
    const larguraEl = document.querySelector("input#largura");   
    const comprimento = parseFloat(comprimentoEl.value);
    const largura = parseFloat(larguraEl.value);
    const area = calculaArea(comprimento, largura);
    const perimetro = calculaPerimetro(comprimento, largura);
    
    const textResultado = `Área = ${area.toFixed(2)} metros, Perímetro = ${perimetro.toFixed(2)} metros.`;

    mostraResultado(04, textResultado);
})

//------------ EXERCÍCIO 05 - VERIFICA DIVISIBILIDADE

const btn05 = elementoBotao(05);

const verificaDivisivel = (n1, n2) => n1 % n2 === 0;

btn05.addEventListener("click", (e) => {
    e.preventDefault();

    const numero1El = document.querySelector("input#numero1");
    const numero2El = document.querySelector("input#numero2");   
    const numero1 = parseInt(numero1El.value);
    const numero2 = parseInt(numero2El.value);
    const divisivel = verificaDivisivel(numero1, numero2);

    const textResultado = divisivel 
        ? `${numero1} é divisível por ${numero2}` 
        : `${numero1} não é divisível por ${numero2}`;

    mostraResultado(05, textResultado);
})

//------------ EXERCÍCIO 06 - CLASSIFICAÇÃO DE FAIXA ETÁRIA

const btn06 = elementoBotao(06);

const classificaFaixaEtaria = (idade) => {
    if (idade < 0) {
        return '(idade inválida!)';
    }
    else if (idade <= 12) {
        return 'criança';
    } 
    else if (idade < 18) {
        return 'adolescente';
    } 
    else if (idade < 60) {
        return 'adulto';
    }
    else {
        return 'idoso';
    }
}

btn06.addEventListener("click", (e) => {
    e.preventDefault();

    const idadeEl = document.querySelector("input#idade6");
    const idade = parseInt(idadeEl.value);
    const faixa = classificaFaixaEtaria(idade);    
    const textResultado = `Você é ${faixa}`;
  
    mostraResultado(06, textResultado);
})

//------------ EXERCÍCIO 07 - COMPARAÇÃO DE NÚMEROS

const btn07 = elementoBotao(07);

btn07.addEventListener("click", (e) => {
    e.preventDefault();

    const numero1El = document.querySelector("input#numero11");
    const numero2El = document.querySelector("input#numero22");   
    const numero1 = parseInt(numero1El.value);
    const numero2 = parseInt(numero2El.value);
    let textResultado;

    if (numero1 < numero2) {
        textResultado = `${numero1} é menor que ${numero2}`;
    } 
    else if (numero1 == numero2) {
        textResultado = `${numero1} é igual a ${numero2}`;
    }
    else {
        textResultado = `${numero1} é maior que ${numero2}`;
    }

    mostraResultado(07, textResultado);
})

//------------ EXERCÍCIO 08 - CALCULADORA COM SWITCH

const btn08 = elementoBotao(08);

const calcula = (a, b, operador) => {
    switch (operador) {
        case '+':
            return a + b;
        case '-': 
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b == 0) {
                return 0;
            } else {
                return a / b;
            }
        default:
            return 'Operador Inválido';
    }
}

btn08.addEventListener("click", (e) => {
    e.preventDefault();

    const numero1El = document.querySelector("input#numeroA");
    const numero2El = document.querySelector("input#numeroB");   
    const operacaoEl = document.querySelector("select#operacao");   
    const numero1 = parseInt(numero1El.value);
    const numero2 = parseInt(numero2El.value);
    const resultado = calcula(numero1, numero2, operacaoEl.value);
    
    const textResultado = resultado;
    
    mostraResultado(08, textResultado);
})

//------------ EXERCÍCIO 09 - CÁLCULO DE TARIFA

const btn09 = elementoBotao(09);

const calculaTarifa = (idade, estudante) => {
    const tarifaNormal = 2.5;
    let desconto = 0;

    if (idade < 6) {
        desconto = 100;
    }
    else if (estudante) {
        desconto = 50;
    }
    else if (idade >= 60) {
        desconto = 30;
    }
    return tarifaNormal - (tarifaNormal * desconto / 100);
}

btn09.addEventListener("click", (e) => {
    e.preventDefault();

    const idadeEl = document.querySelector("input#idade9");
    const estudanteEl = document.querySelector("input#estudante");
    const idade = parseInt(idadeEl.value);
    const tarifa = calculaTarifa(idade, estudanteEl.checked);
    const textResultado = `Valor da tarifa = R$ ${tarifa.toFixed(2)}`;
    
    mostraResultado(09, textResultado);
})
