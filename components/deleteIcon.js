import { displayTasks } from "./displayTasks.js"

const deleteIcon = (id) => {
    const i = document.createElement('i')
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon', 'data-delete')
    i.addEventListener('click', () => deleteTask(id))
    return i
}

const deleteTask = (id) => {
    const list = document.querySelector('[data-list]')
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(tasks)
    const index = tasks.findIndex( (item) => item.id == id)
    console.log(index)
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    list.innerHTML = ''

    displayTasks()
}

export default deleteIcon