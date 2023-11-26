import { Task } from "./Task"
import { useState } from "react"

export function Board() {
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState(0)
  const [taskArray, setTaskArray] = useState([])
  const [buttonAddTask, setButtonAddTask] = useState(true)

  function showInput() {
    setButtonAddTask(false)
  }

  function submit(e) {
    e.preventDefault()
    let newTask = taskInput
    setTaskArray(prevTaskArray => [newTask, ...prevTaskArray])
    setTasks(prevSetTask => prevSetTask + 1)
    setTaskInput("")
    setButtonAddTask(true)
  }

  return (
    <div className='p-4 w-2/3 bg-slate-100 mx-auto rounded-xl border-2 border-slate-400'>
      <h1 className='font-bold text-4xl text-center'>Lista zadań</h1>

      {buttonAddTask ? (
        <div className='flex justify-center mt-4'>
          <button
            className='text-base bg-lime-900 rounded-3xl text-white px-4 py-1'
            onClick={showInput}>
            Dodaj zadanie{" "}
          </button>
        </div>
      ) : (
        <div className='flex justify-center mt-4'>
          <form onSubmit={submit}>
            <input
              className='p-1 border-2 border-slate-300'
              value={taskInput}
              placeholder='Treść zadania'
              type='text'
              onChange={e => setTaskInput(e.target.value)}
            />
            <button className='text-base bg-lime-900 rounded-3xl text-white px-4 py-1 ms-2'>Dodaj </button>
          </form>
        </div>
      )}

      <p className='text-center p-2.5 text-xl pb-8'>Zostało {tasks} zadań</p>

      {taskArray.map((task, key) => (
        <Task
          key={key}
          newTask={task}
        />
      ))}
    </div>
  )
}
