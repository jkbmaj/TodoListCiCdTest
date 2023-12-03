import { useState } from "react"
export function Form({ onFormSubmit }) {
  const [taskInput, setTaskInput] = useState("")
  const [error, setError] = useState("")

  function submit(e) {
    e.preventDefault()
    if (taskInput === "") {
      setError("Wpisz treść zadania!")
    } else {
      setError("")
      onFormSubmit(taskInput)
      setTaskInput("")
    }
  }

  return (
    <form onSubmit={submit}>
      <input
        className='p-1 border-2 border-slate-300'
        value={taskInput}
        placeholder='Treść zadania'
        type='text'
        onChange={e => setTaskInput(e.target.value)}
      />
      <button className='text-base bg-lime-900 rounded-3xl text-white px-4 py-1 ms-2 hover:bg-white hover:text-lime-900 hover:border-lime-900 hover:border-2 border-2'>
        Dodaj
      </button>
      {error && <p className='text-red-700 p-1'>{error}</p>}
    </form>
  )
}
