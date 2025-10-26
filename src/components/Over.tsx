const Over = () => {
    return (
      <div className="overscroll-none">
        <section className="relative w-screen h-[400vh]">
          <div className="sticky top-0 h-screen w-screen flex items-center justify-center z-0 ">
            <img
              src="firma.png"
              alt="firma"
              className="absolute inset-0 w-full h-full object-cover "
            />
          </div>
  
          <div className="sticky top-0 h-screen w-screen flex items-center justify-center z-10 bg-green-800">
            <h1 className="text-6xl font-bold text-white">TO JEST OVERLAY 1</h1>
          </div>
  
          <div className="sticky top-0 h-screen w-screen flex items-center justify-center z-20 bg-blue-800">
            <h1 className="text-6xl font-bold text-white">TO JEST OVERLAY 2</h1>
          </div>
        </section>
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
