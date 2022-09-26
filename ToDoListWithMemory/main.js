const input = document.getElementById('input')
const list = document.getElementById('list')
let items = []


if (localStorage.getItem('list') !== null){
    items = JSON.parse(localStorage.getItem('list'))
    drawList()
}

function saveList(){
    localStorage.setItem('list', JSON.stringify(items))
}

function add(){
    items.push(input.value)
    clearInput()
    drawList()
    saveList()
}

function clearList(){
    list.innerHTML = ''
}

function drawList(){
    clearList()
    for(let i = 0; i < items.length; i++){
        let li = `<li>${items[i]}</li>`
        list.innerHTML += li;
    }
}

function clearInput() {
    input.value = ''
}