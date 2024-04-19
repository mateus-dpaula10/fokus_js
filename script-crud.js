const btnAddTarefa = document.querySelector('.app__button--add-task')
const formTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAddTarefa.addEventListener('click', () => {
    formTarefa.classList.toggle('hidden')
})  

formTarefa.addEventListener('submit', (e) => {
    e.preventDefault()
    const tarefa = {
        descricao: textArea.value
    } 
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})