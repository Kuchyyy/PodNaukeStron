import { people } from "./people";

const People2 = () => {
    return (
        <div className="w-screen h-dvh flex  justify-center items-center bg-zinc-100">
            <div className="grid grid-cols-3 w-3/4 gap-2">
                {people.map((p, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md aspect-square flex flex-col justify-evenly ">
                        <h2 className="text-xl font-bold mb-2 self-center">{p.name}</h2>
                        <p className="text-gray-700 mb-1">{p.role}</p>
                        <p className="text-gray-700 mb-1">Phone: {p.phone}</p>
                        <p className="text-gray-700">Email: {p.mail}</p>
                    </div> 
                ))}
            </div>
        </div>
      )
}

export default People2