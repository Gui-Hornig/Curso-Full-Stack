let comparaComThis = function (param) { 
    console.log (this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComArrow = param => console.log(this === param)
comparaComArrow (global)
comparaComArrow(module.exports)
comparaComArrow(this)

comparaComArrow = comparaComArrow.bind(obj)
comparaComArrow(obj)
comparaComArrow(module.exports)