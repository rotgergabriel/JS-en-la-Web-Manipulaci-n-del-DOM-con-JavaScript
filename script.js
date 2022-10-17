import checkComplete from "./components/checkComplete.js"
import deleteIcon from "./components/deleteIcon.js"

const btn = document.querySelector('[data-form-btn]')

const createTask = (event) => {
    event.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const value = input.value
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li')
    const taskContent = document.createElement('div')
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerHTML = value

    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask)
    
    task.classList.add('card')
    input.value = ''
    
    const content =`
    <i class="fas fa-trash-alt trashIcon icon data-delete"></i>`
    
    task.appendChild(taskContent) 
    list.appendChild(task)
    task.appendChild(deleteIcon())
}

btn.addEventListener('click', createTask)
