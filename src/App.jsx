import { useState } from "react"
import { Board } from "./components/Board"

function App() {
  return (
    <>
      <div className='bg-lime-200 h-screen p-4'>
        <div className='container mx-auto '>
          <Board />
        </div>
      </div>
    </>
  )
}

export default App
