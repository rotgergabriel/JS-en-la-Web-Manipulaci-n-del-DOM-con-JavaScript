( () => {

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
        taskContent.appendChild(checkDelete())

        task.classList.add('card')
        input.value = ''
        
        const content =`
        <i class="fas fa-trash-alt trashIcon icon data-delete"></i>`
        
        list.appendChild(task)
        task.appendChild(taskContent) 
    }

    btn.addEventListener('click', createTask)

    const checkComplete = () => {
        const i = document.createElement('i')
        i.classList.add('far', 'fa-check-square', 'icon')
        i.addEventListener('click', completeTask)
        return i
    }

    const completeTask = (event) => {
        const element = event.target
        element.classList.toggle('far')
        element.classList.toggle('fas')
        element.classList.toggle('completeIcon')
    }


    const checkDelete = () => {
        const i = document.createElement('i')
        i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon', 'data-delete')
        return i
    }
    
})()