let tagInputText = document.querySelector('#texto-tarefa')
let tagOlList = document.querySelector('#lista-tarefas')
let tagButton = document.querySelector('#criar-tarefa')


tagButton.addEventListener("click", mostrarNatela)

function mostrarNatela(){
    // console.log("entrei na function")
    if (tagInputText.value === '') {
        alert("Olá, Seja Bem-Vindo! Digite um texto")
        return (false)
    } else {

        const createTagLi = document.createElement('li')
        createTagLi.innerText = tagInputText.value

        tagInputText.value = ""
        tagOlList.appendChild(createTagLi)
    }

}
mostrarNatela()