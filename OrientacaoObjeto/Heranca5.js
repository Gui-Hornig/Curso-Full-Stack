console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverce = function () {
    return this.split('').reverse().join('')
}
console.log('Guilherme hornig'. reverce())

Array.prototype