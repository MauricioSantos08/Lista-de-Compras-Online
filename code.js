var arrayItens = []

function addItem() {
    var item = '<li>' + $item.value + '</li>';
    arrayItens.push($item.value)
    $lista.innerHTML += item;
    $item.value = '';
    $item.focus();
    console.log(arrayItens)
}

const localStorageLists = JSON.parse(localStorage.getItem('arrayListas'))
let listasSalvas = localStorage.getItem('arrayListas') !== null ? localStorageLists : []

let id = 1  
    if (listasSalvas.length > 0) {
        listasSalvas.forEach(lista => {
            id = lista.id + 1
    });
    }    
   

function atualizaLocalStorage() {
    localStorage.setItem('arrayListas', JSON.stringify(listasSalvas))
}

function salvarLista() {
    let novaLista = {}
    novaLista.titulo = document.getElementById("nomeLista").value
    novaLista.id = id
    id++
    novaLista.itens = arrayItens
    listasSalvas.push(novaLista)
    atualizaLocalStorage()
    document.getElementById("lista").innerHTML = ''
    arrayItens = []
    let lista = nomeLista + '<li>'
    listas = lista
    window.location.href = "VerListas.html"
}


function MostrarLista() {
    document.getElementById("conteudo").innerHTML = ''
    if (listasSalvas.length == 0) {
        let h1 = document.createElement("h1")
        h1.innerText = 'Nenhuma Lista Adicionada'
        document.getElementById("conteudo").appendChild(h1)
    }

    for (let i = 0; i<listasSalvas.length; i++) {
        let divLista = document.createElement("div")
        divLista.classList.add("listas-salvas")

        let h1 = document.createElement("h1")
        h1.innerText = listasSalvas[i].titulo

        let divItens = document.createElement("div")

        let textoItens = ''
        let btApagar = document.createElement('button')
        btApagar.addEventListener('click', () => {excluirLista(listasSalvas[i].id)})
        btApagar.innerText = 'Apagar Lista'
        btApagar.classList.add("botao-apagar") 
       
    
    listasSalvas[i].itens.forEach(item => {
        textoItens += '<span>' + item + '</span><br>'       
    });
        divItens.innerHTML = textoItens
        divLista.appendChild(h1)
        divLista.appendChild(divItens)
        divLista.appendChild(btApagar)
        document.getElementById("conteudo").appendChild(divLista)
    }
}

function excluirLista(id) {
    console.log(id)
    
    for (let i = 0; i < listasSalvas.length; i++) {
        if (listasSalvas[i].id == id) {
            if (confirm('Tem certeza que quer excluir essa lista?')) {
                listasSalvas.splice(i, 1)
            }
        }
    }
    atualizaLocalStorage()
    MostrarLista()
}




































