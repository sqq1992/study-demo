

//1  推断users数组里的类型
const users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
]

//1-1 根据number里也可以推断类型
type user = typeof users[number]
const users2: user = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
};


//2 联合类型
interface User {
    name: string
    age: number
    occupation: string
}

interface Admin {
    name: string
    age: number
    role: string
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
]

//3类型保护
function isAdmin(user: Person):user is Admin {
    return user.hasOwnProperty("role")
}

function logPerson(person: Person) {
    let additionalInformation: string
    if (isAdmin(person)) {
        additionalInformation = person.role
    } else {
        additionalInformation = person.occupation
    }

}

//4