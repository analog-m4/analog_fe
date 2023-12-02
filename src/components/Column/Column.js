function Column({ columnName }) {
  return (
    <>
      <div className="flex flex-col w-4/12 min-w-1/4 bg-gray-200">
        <div className="column-title font-bold">{columnName}</div>
      </div>
    </>
  )
}

export default Column;