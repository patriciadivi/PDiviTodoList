let tagInputText = document.querySelector('#texto-tarefa')
let tagOlList = document.querySelector('#lista-tarefas')
let tagButton = document.querySelector('#criar-tarefa')




function mostrarNatela(){
    // console.log("entrei na function")
    tagButton.addEventListener("click", function() {
        if (tagInputText.value === '') {
            alert("Olá, Seja Bem-Vindo! Digite um texto")
            return (false)
        } else {
    
            const createTagLi = document.createElement('li')
            createTagLi.classList.add('completed')
            createTagLi.innerText = tagInputText.value
    
            tagInputText.value = ""
            tagOlList.appendChild(createTagLi)
        }
    })


tagOlList.addEventListener("click", function(event) {
    
    let colorWhite = "white"
    let backgroundColorGray = "rgb(128, 128, 128)"

    let newSelect = event.target
    let select = document.querySelector('.select')
    console.log(select);

    if (select === newSelect) {
        select.style.backgroundColor = colorWhite
        select.classList.remove('select')
        return;
    }
    if (select !== null) {
        select.style.backgroundColor = colorWhite
        select.classList.remove('select')
    } 
    newSelect.style.backgroundColor = backgroundColorGray
    newSelect.classList.add('select')
})


















}
mostrarNatela()




