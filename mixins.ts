import { on } from "events"

namespace mixins {
    interface Name {
        name: string
    }

    interface Age {
        age: number
    }

    interface Sex {
        sex: number
    }

    let one: Name = { name: 'songbaicheng' }
    let two: Age = { age: 23 }
    let three: Sex = { sex: 1 }

    const obj = Object.assign(one, two, three)
    console.log(obj) // { name: 'songbaicheng', age: 23, sex: 1 }
}