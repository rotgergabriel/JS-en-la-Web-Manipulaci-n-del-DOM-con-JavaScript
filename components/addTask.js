import checkComplete from "./checkComplete.js"
import deleteIcon from "./deleteIcon.js"
import { displayTasks } from "./displayTasks.js"
import { uniqueDates } from "./services/date.js"

export const addTask = (event) => {
    event.preventDefault()
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const calendar = document.querySelector('[data-form-date]')

    const value = input.value
    const date = calendar.value
    const dateFormat = moment(date).format('DD/MM/YYYY')

    if(value == '' || date == ''){
        return alert('Completa los campos')
    }

    
    input.value = ''
    calendar.value = ''

    const complete = false
    
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = ''
    
    //Se mantiene siempre que no se cierre la ventana del navegador
    // sessionStorage.setItem('Tasks', JSON.stringify(taskObj))
    
    //Se mantiene inluso al cerrar la ventana del navegador / refrescar
    const taskList = JSON.parse(localStorage.getItem('tasks')) || []
    taskList.push(taskObj)
    localStorage.setItem('tasks', JSON.stringify(taskList))

    displayTasks()
}

export const createTask = ({value, dateFormat, complete, id}) => {
    const task = document.createElement('li')
    const taskContent = document.createElement('div')
    const check = checkComplete(id)
    
    if(complete) {
        check.classList.toggle('far')
        check.classList.toggle('fas')
        check.classList.toggle('completeIcon')
    }

    const titleTask = document.createElement('span')
            titleTask.classList.add('task')
            titleTask.innerHTML = value
            taskContent.appendChild(check)
            taskContent.appendChild(titleTask)
            task.classList.add('card')
    const dateElement = document.createElement('span')
            dateElement.innerHTML = dateFormat
            task.appendChild(taskContent)
            // task.appendChild(dateElement)
            task.appendChild(deleteIcon(id))
    return task
}