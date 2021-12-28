let tagInputText = document.querySelector('#texto-tarefa')
let tagOlList = document.querySelector('#lista-tarefas')
let tagButton = document.querySelector('#criar-tarefa')
let buttonDelete = document.querySelector('#apaga-tudo')


function mostrarNatela(){
    // console.log("entrei na function")
    tagButton.addEventListener("click", function() {
        if (tagInputText.value === '') {
            alert("Digite um texto!")
            return (false)
        } else {
    
            const createTagLi = document.createElement('li')
            createTagLi.innerText = tagInputText.value
    
            tagInputText.value = ""
            tagOlList.appendChild(createTagLi)
        }
        
    })

// Obs: Matheus Henrique me ajudou na parte da Lógica para o codigo 
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


// Obs: Ladylane me a ajudou a entender o do porque usar o "children" ao invés da propria "li"
tagOlList.addEventListener("dblclick", function (event) {
        console.log("entrei no evento");
    let newCompleted = event.target
    let classCompleted = document.querySelector('.completed')
    console.log(classCompleted);
    
    if (newCompleted === classCompleted) {
        classCompleted.style.textDecoration = "none" 
        classCompleted.classList.remove('completed')
        return;  
    }
    if (classCompleted !== null) {
        classCompleted.style.textDecoration = "none" 
        classCompleted.classList.remove('completed')        
    }
        newCompleted.style.textDecoration = "line-through"
        newCompleted.classList.add('completed')
})

buttonDelete.addEventListener("click", function () {

    tagOlList.innerText = ''

})


}
mostrarNatela()