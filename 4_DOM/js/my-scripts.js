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

//------------ EXERCÍCIO 01 - ALTERANDO H1

const btn01 = elementoBotao(01);

btn01.addEventListener("click", (e) => {
    e.preventDefault();

    const inputEl = document.querySelector("input#titulo1");
    const tituloEl = document.querySelector("h1.titulo1");

    tituloEl.textContent = inputEl.value;
})

//------------ EXERCÍCIO 02 - ALTERAR CSS DOS PARÁGRAFOS

const btn02 = elementoBotao(02);

btn02.addEventListener("click", (e) => {
    e.preventDefault();

    const paragrafos = document.querySelectorAll("p.paragrafo");
    
    for (p of paragrafos) {        
        if (p.style.color === 'blue') {
            p.style.color = '#000';
        } else {
            p.style.color = 'blue';
        }
    }
})

//------------ EXERCÍCIO 03 - ALTERNAR COR DE FUNDO

const btn03 = elementoBotao(03);

btn03.addEventListener("click", (e) => {
    e.preventDefault();

    const box = document.querySelector("section.box:nth-of-type(3)");
    box.classList.toggle("ativo");        
})

//------------ EXERCÍCIO 04 - ADICIONAR ELEMENTOS NA LISTA

const btn04 = elementoBotao(04);

btn04.addEventListener("click", (e) => {
    e.preventDefault();

    const lista = document.querySelector("ul.lista4");
    const li = document.createElement('li');
    let n = lista.childElementCount;

    li.textContent = `Linha ${++n}`;
    lista.appendChild(li);
})

//------------ EXERCÍCIO 05 - REMOVER ELEMENTOS DA LISTA

const inicLista5 = () => {
    const itens5 = document.querySelectorAll("ul.lista5 li");
    
    itens5.forEach(li => {
        li.addEventListener("click", removerItem);
    })
}

const removerItem = (e) => {
    e.target.removeEventListener("click", removerItem);
    e.target.remove();
}

inicLista5();

const btn05 = elementoBotao(05);

btn05.addEventListener("click", (e) => {
    const lista = document.querySelector('ul.lista5');
    lista.innerHTML = `
        <li class="clicavel">Linha 1</li>
        <li class="clicavel">Linha 2</li>
        <li class="clicavel">Linha 3</li>
        <li class="clicavel">Linha 4</li>
        `;    

    inicLista5();
})

//------------ EXERCÍCIO 06 - FILTRAR ITENS

const busca6El = document.querySelector("input#busca6");
const seriesEl = document.querySelectorAll("ul.lista6 li");

busca6El.addEventListener("keyup", (e) => {
    e.preventDefault();    
    const busca = e.target.value.toLowerCase();

    for (li of Array.from(seriesEl)) {
        li.style.display = li.textContent.toLowerCase().includes(busca) ? "" : "none";
    }   
})

