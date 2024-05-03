let resp = window.document.getElementById('resultado')
// Lembre-se que toda variável declarada aqui fora possui escopo global. 

function evento1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'
}

function evento2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>'
}

function evento3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'
}

function evento4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'
}