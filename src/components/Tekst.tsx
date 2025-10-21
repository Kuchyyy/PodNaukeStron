const Tekst = () => {
    return (
        <div className="bg-stone-100 w-full">
            <div className="bg-stone-100 flex flex-col gap-2 w-[96%] mx-auto">
                
                <div className="bg-stone-100 h-screen">

                </div>
                <div className="bg-zinc-700 h-screen flex items-end justify-start relative rounded-t-2xl">
                <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0 -translate-y-1 p-2">
                    tekst po lewej
                </p>
                </div>
        
                {/* Sekcja prawa */}
                <div className="bg-zinc-700 h-screen flex items-end justify-start relative">
                <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0">
                    tekst po prawej
                </p>
                </div>
        
                {/* Sekcja lewa */}
                <div className="bg-zinc-700 h-screen flex items-end justify-start relative rounded-b-2xl">
                <p className="text-white text-8xl uppercase font-bold font-mono sticky bottom-0">
                    tekst po lewej
                </p>
                </div>
                <div className="bg-stone-100 h-screen"></div>
            </div>

        </div>
    );
  };
  
  export default Tekst;
  