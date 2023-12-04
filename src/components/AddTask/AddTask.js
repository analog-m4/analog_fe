function AddTask() {
  return (
    <div className="add-task-btn flex text-gray-400 text-sm items-center cursor-pointer mt-3 pl-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 text-green-400 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      Add Task
    </div>
  )
}

export default AddTask;