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


tagOlList.addEventListener("click", function(envet) {
    console.log(tagOlList);
    let listItems = document.querySelectorAll('li')

    let colorWhite = "white"
    let backgroundColorGray = "rgb(128, 128, 128)"

    for (let positionNow = 0; positionNow < listItems.length; positionNow += 1) {

        if (listItems[positionNow].style.backgroundColor === backgroundColorGray) {

            envet.target.style.backgroundColor = colorWhite

        } else {

            envet.target.style.backgroundColor =  backgroundColorGray
        }
    }
})
   

















}
mostrarNatela()




