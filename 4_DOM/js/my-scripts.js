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

//------------ EXERCÍCIO 07 - MOVER ITENS

const btn7upEl = document.querySelector(".box7 .btn-up");
const btn7downEl = document.querySelector(".box7 .btn-down");
const livrosEl = document.querySelectorAll("ul.lista7 li");

let idSel = -1;

const seleciona_livro = (e) => { 
    Array.from(livrosEl).forEach((li, index) => {
        li.classList.remove("selected");
        if (li === e.target) {
            idSel = index;
        }
    })
    e.target.classList.add("selected");
}

for (li of Array.from(livrosEl)) {
    li.addEventListener("click", seleciona_livro);
}

const moverItem = (direcao) => {
    const itemSelecionado = livrosEl[idSel]; //document.querySelector("ul.lista7 li.selected");

    if (!itemSelecionado) {
        alert("Selecione um item da lista");
        return;
    }

    if (direcao === "up" && idSel === 0) return;
    if (direcao === "down" && idSel === livrosEl.length -1) return;
    const lista = itemSelecionado.parentNode;
    let proxItem;
    
    if (direcao === "up") {
        proxItem = lista.children[--idSel];
    } else {
        proxItem = lista.children[++idSel];
    }

    const temp = proxItem.textContent;

    proxItem.textContent = itemSelecionado.textContent;
    proxItem.classList.add("selected");
    itemSelecionado.textContent = temp;
    itemSelecionado.classList.remove("selected");
}

btn7upEl.addEventListener("click", () => moverItem("up"));
btn7downEl.addEventListener("click", () => moverItem("down"));

//------------ EXERCÍCIO 08 - EXIBIR MODAL

// const btnFechar = document.querySelector("button.fechar");
const modalEl = document.querySelector("div.modal-overlay");
const btn08 = elementoBotao(08);

function abrir_modal() {
    modalEl.style.visibility = "visible";
    modalEl.classList.add("visible");  
}

function fechar_modal(e) {
    // e.stopPropagation();
    if (!e.target.classList.contains('modal')) {
        modalEl.classList.remove("visible");  
        modalEl.style.visibility = "hidden";
    }
}

btn08.addEventListener("click", abrir_modal);
// btnFechar.addEventListener("click", (e) => fechar_modal(e));
modalEl.addEventListener("click", (e) => fechar_modal(e));

//------------ EXERCÍCIO 09 - ACCORDION

const accordionEl = document.querySelector("div.accordion");
const detailEl = document.querySelectorAll("div.accordion-detail");
const h3El = document.querySelectorAll("div.accordion h3");

function showDetail(e, index) {
    closeAllDetails();
    if (detailEl[index].style.display === "none") {
        detailEl[index].style.display = "block";
    } else {
        detailEl[index].style.display = "none";
    }
}

function closeAllDetails() {
    for (div of detailEl) {
        div.style.display = "none";
    }
}

closeAllDetails();

h3El.forEach((h3, index) => {
    h3.addEventListener("click", (e) => showDetail(e, index));
})



