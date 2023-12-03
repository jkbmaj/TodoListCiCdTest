import { Form } from "./Form"
import { Task } from "./Task"
import { useState } from "react"

export function Board() {
  const [buttonAddTask, setButtonAddTask] = useState(true)
  const [taskArray, setTaskArray] = useState([
    { name: "Posprzątać", isActive: true, id: 1 },
    { name: "Poczytać", isActive: false, id: 2 },
  ])

  function onFormSubmit(newTask) {
    setTaskArray(prevTaskArray => [...prevTaskArray, { name: newTask, isActive: false, id: Math.random() }])
    setButtonAddTask(true)
  }

  function deleteTask(id) {
    setTaskArray(prevTaskArray => prevTaskArray.filter(task => task.id !== id))
  }

  function finishItem(id) {
    setTaskArray(prevTaskArray =>
      prevTaskArray.map(todo => {
        if (todo.id !== id) {
          return todo
        }

        return {
          ...todo,
          isActive: true,
        }
      })
    )
  }

  const numberOfTaks = taskArray.length

  return (
    <div className='p-4 w-2/3 bg-slate-100 mx-auto rounded-xl border-2 border-slate-400'>
      <h1 className='font-bold text-4xl text-center'>Lista zadań</h1>

      <div className='flex justify-center mt-4'>
        {buttonAddTask ? (
          <button
            className='text-base bg-lime-900 rounded-3xl text-white px-4 py-1 hover:bg-white hover:text-lime-900 hover:border-lime-900 hover:border-2 border-2'
            onClick={() => setButtonAddTask(false)}>
            Dodaj zadanie
          </button>
        ) : (
          <Form onFormSubmit={onFormSubmit} />
        )}
      </div>

      <p className='text-center p-2.5 text-xl pb-8'>Zostało zadań: {numberOfTaks}</p>

      {taskArray.map(({ id, name, isActive }) => (
        <Task
          key={id}
          newTask={name}
          isActive={isActive}
          onDeleteButtonClick={() => deleteTask(id)}
          onDoneButtonClick={() => finishItem(id)}
        />
      ))}
    </div>
  )
}
