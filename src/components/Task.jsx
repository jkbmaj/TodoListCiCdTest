import { useState } from "react"

export function Task({ newTask, setTaskArray, setTasks }) {
  const [taskDone, setTaskDone] = useState(false)
  function deleteTask() {
    setTaskArray(prevTaskArray => prevTaskArray.filter(task => !newTask.includes(task)))
    taskDone === true ? null : setTasks(prevTasks => prevTasks - 1)
  }

  function handleTaskDone() {
    setTaskDone(true)
    setTasks(prevTasks => prevTasks - 1)
  }

  return (
    <div className='border-t-2 '>
      <div className='flex justify-between py-3 '>
        <p className={`${taskDone && "line-through text-slate-500	"} `}>{newTask}</p>
        <div>
          <button
            className={`me-2  text-base bg-lime-900 rounded-3xl text-white px-4 py-1 ${taskDone && "bg-slate-300"}`}
            onClick={handleTaskDone}
            disabled={taskDone === true}>
            Zrobione
          </button>
          <button
            className='bg-red-400 px-4 py-1 rounded-full'
            onClick={deleteTask}>
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}
