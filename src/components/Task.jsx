export function Task({ newTask, isActive, onDeleteButtonClick, onDoneButtonClick }) {
  return (
    <div className='border-t-2 '>
      <div className='flex justify-between py-3 '>
        <p className={`${isActive && "line-through text-slate-500	"} `}>{newTask}</p>
        <div>
          {!isActive && (
            <button
              className='me-2  text-base bg-lime-900 rounded-3xl text-white px-4 py-1 hover:bg-white hover:text-lime-900 hover:border-lime-900 hover:border-2 border-2'
              onClick={onDoneButtonClick}>
              Zrobione
            </button>
          )}

          <button
            className='bg-red-400 px-4 py-1 rounded-full hover:bg-white hover:text-red-400 hover:border-red-400 hover:border-2 border-2'
            onClick={onDeleteButtonClick}>
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}
