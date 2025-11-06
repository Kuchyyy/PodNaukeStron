
const People1 = () => {

    const person = [
        {
          name: "Adam Kowalski",
          role: "Front-End Developer",
          phone: "+48 600 123 987",
          mail: "adam.kowalski@example.com"
        },
        {
          name: "Monika Nowak",
          role: "HR Manager",
          phone: "+48 502 444 231",
          mail: "monika.nowak@example.com"
        },
        {
          name: "Krzysztof Zieliński",
          role: "UX Designer",
          phone: "+48 736 882 119",
          mail: "krzysztof.zielinski@example.com"
        },
        {
          name: "Natalia Wróbel",
          role: "Product Owner",
          phone: "+48 511 229 454",
          mail: "natalia.wrobel@example.com"
        },
        {
          name: "Piotr Mazur",
          role: "Backend Developer",
          phone: "+48 690 321 876",
          mail: "piotr.mazur@example.com"
        }
      ];
      


  return (
    <div className="w-screen h-dvh flex  justify-center items-center bg-zinc-100">
        <div className="grid grid-cols-3 w-3/4 gap-2">
            {person.map((p, index) => (
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

export default People1