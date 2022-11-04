const btnAdd = document.querySelector('.btnAdd')
const list = document.querySelector('.list')
const sideBar = document.querySelector('.sideBar')
const dateIn = document.querySelector('.date')
const textIn = document.querySelector('.text')
const save = document.querySelector('.save')


let arr = []
let currentCondition = false
let currentIndex
btnAdd.onclick=()=>{
    sideBar.classList.toggle('show')
}
save.onclick=()=>{
    if(currentCondition === true){
        currentCondition = false
        arr[currentIndex].date = dateIn.value
        arr[currentIndex].text = textIn.value
       list.children[currentIndex].children[0].textContent = dateIn.value
        list.children[currentIndex].children[1].textContent = textIn.value
        console.log('edit')
    }else{
        const dateInp = dateIn.value
        const textInp = textIn.value
        myNote(dateInp,textInp)
        arr.push({
            date: dateInp,
            text: textInp
        })
        console.log('add')
    }

    sideBar.classList.remove('show')
    myLocalStorage()
}

function myLocalStorage(){
    const data = JSON.stringify(arr)
    localStorage.setItem('list',data)
}



let data = localStorage.getItem('list')
if(data){
    arr = JSON.parse(data)
    for(let i=0; i<arr.length; i++){
        myNote(arr[i].date,arr[i].text,i)
    }
}

function myNote(date,text,index){
    const li = document.createElement('li')
    const spanDate = document.createElement('span')
    const spanText = document.createElement('span')
    const edit = document.createElement('button')
    spanDate.textContent = date
    spanText.textContent = text
    edit.innerHTML = '&#9998'
    list.appendChild(li)
    li.appendChild(spanDate)
    li.appendChild(spanText)
    li.appendChild(edit)
    edit.onclick=()=>{
        sideBar.classList.add('show')
        dateIn.value = date
        textIn.value = text
        currentCondition = true
        currentIndex = index
    }
}






























