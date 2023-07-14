const pilotos = ['Vetttel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona por primeiro um elemento
console.log(pilotos)

// splice pode adicionar e removeer 

// Adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) // remover \
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array pegar uma parte do array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)