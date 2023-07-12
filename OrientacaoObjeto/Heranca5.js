console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverce = function () {
    return this.split('').reverse().join('')
}
console.log('Guilherme hornig'. reverce())

Array.prototype.first = function () {
    return this [0]
}
console.log([1, 2, 3, 4, 5, 6, 7].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())


//Cuidado

String.prototype.toString = function () {
    return 'lascou tudo'
}
console.log('Guilherme Hornig')
