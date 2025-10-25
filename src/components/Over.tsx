const Over = () => {
    return (
      <div className="relative overscroll-y-none">
        <div 
          className="w-screen h-screen bg-fixed bg-center bg-cover bg-[url('/firma.png')]" 
          
        >
        </div>
  
        <div className="relative w-screen h-screen bg-white flex justify-center items-center">
          <h1 className="text-6xl font-bold">TO JEST OVERLAY</h1>
        </div>
      </div>
    )
  }
  
  export default Over
  

  /* druga wersja bez bg-fixed
    const Over = () => {
  return (
    <div className="relative">
      <div className="w-screen h-screen">
        <img 
          src="firma.png" 
          alt="firma" 
          className="w-screen h-screen object-cover fixed top-0 left-0"
        />
      </div>
      <div className="relative w-screen h-screen bg-stone-100 flex justify-center items-center">
        <h1 className="text-6xl font-bold">TO JEST OVERLAY</h1>
      </div>
    </div>
  )
}

export default Over*/
