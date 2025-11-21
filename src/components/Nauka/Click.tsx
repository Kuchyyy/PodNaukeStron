import { useState } from "react";

const people = [
  {
    id: 1,
    imie: "Adam",
  },
  {
    id: 2,
    imie: "Ewa",
  },
  {
    id: 3,
    imie: "Kasia",
  },
];

const Click = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? 3 : index);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-stone-200">
      <div className="w-[90%] flex gap-2 justify-center items-center ">
        {people.map((person, index) => (
          <div
            key={index}
            className={`flex flex-1 bg-neutral-400 rounded-sm justify-center items-center transition-all duration-300 h-40 select-none ${
              openIndex === index ? "bg-sky-400 flex-2" : ""
            }`}
            onClick={() => toggle(index)}
          >
            {person.imie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Click;
