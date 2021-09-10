// Ejercicio 5

// Crear un array que contenga números del 1 al 10. Retornar un nuevo array que contenga todos los números multiplicados por dos

let num= []

for (i =0; i < 100; i++){
    num.push(i+1)
}

let num2= num.map(arr => arr *2)


console.log(num)
console.log(num2)

//  Ejercicio 6

// Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5
let num3 = num2.filter( arr => arr > 5);
console.log(num3)

//  Ejercicio 7

// Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10

num10= num3.find(arr => arr > 10);

console.log(num10)

//  Ejercicio 8

//  Dado el siguiente array filtremos a los pokemones con poder menor a 1
let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 }, 
    ]
    const pokeFiltrados = pokemones.filter(poke => poke.poder < 10);

    console.log(pokeFiltrados)