export interface Person {
    name: string;
    role: string;
    phone: string;
    mail: string;
  }
  
export const people: Person[] = [
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
  