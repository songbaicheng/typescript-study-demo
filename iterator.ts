let set: Set<number> = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])

let map: Map<string, number> = new Map()
map.set('one', 1)
map.set('two', 2)
map.set('three', 3)

let arrs = [1, 2, 3, 4, 5, 6, 7]

// 手动实现通用迭代器
const each = (col: any) => {
    let iterator: any = col[Symbol.iterator]()
    let next: any = { done: false }

    while (!next.done) {
        next = iterator.next()

        if (!next.done) {
            console.log(next.value)
        }
    }
}

// each(set)
// each(map)
// each(arrs)

for (let key of arrs) {
    console.log(key)
}

for (let key in arrs) {
    console.log(key)
}
