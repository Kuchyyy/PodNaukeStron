

const Sticky = () => {
  return (
    <div className="relative h-[200vh] w-screen">
        <div className="flex justify-between mx-auto p-4 max-w-7xl h-screen relative">
            <div className="bg-red-500 p-4 flex-1 h-full">

            </div>
            <div className="bg-blue-500 p-4 h-20 flex-1 sticky self-start top-1/2 -translate-y-1/2">

            </div>
        </div>
    </div>
  )
}

export default Sticky;