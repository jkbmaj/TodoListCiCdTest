export function Task({ newTask }) {
  return (
    <div className='border-t-2 '>
      <div className='flex justify-between py-3 '>
        <p>{newTask}</p>
        <div>
          <button className='me-2  text-base bg-lime-900 rounded-3xl text-white px-4 py-1 '>Zrobione</button>
          <button className='bg-red-400 px-4 py-1 rounded-full'>Usuń</button>
        </div>
      </div>
    </div>
  )
}
