interface father {
    a: string
}

interface people extends father {
    name: string
    age: number
    occupation?: string
    [props: string]: any // 其他参数不做硬性需要
}

interface people {
    tel: number
}

let p1: people = {
    name: 'songbaicheng',
    age: 23,
    tel: 123456789,
    occupation: '',
    local: 'beijing',
    a: 'fater'
}

console.log(p1)

interface Fn {
    (name: string): number[]
}

const fn: Fn = function(p: string) {
    console.log(p)
    return [1]
}

fn('songbaicheng')