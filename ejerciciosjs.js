// Crear una función constructora la cual vamos a llamar cComputadora, deberá tener las siguientes propiedades:

// ram:string
// cpu:string
// disco:string
// monitor:string
// disco:string
// gpu:boole

// gpu:boolean


function Computadora (ram, cpu, disco, monitor, gpu) {

this.ram=ram;
this.cpu=cpu;
this.disco=disco;
this.monitor=monitor;
this.gpu=gpu;
this.getDetail= () =>{
    return `
    CPU: ${this.cpu}
    RAM: ${this.ram}
    DISCO: ${this.disco}
    MONITOR: ${this.monitor}
    GPU: ${this.gpu ===true ? 'Tenes GPU' : 'no tenes'}
    `
} }


const computadora1 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);
const computadora2 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);
const computadora3 = new Computadora("16GB","Ryzen3 3200g","ssd","Philips de 24p",false);
const computadora4 = new Computadora("16GB","Ryzen3 3400g","ssd","Philips de 24p",false);
const computadora5 = new Computadora("16GB","Ryzen5 3600","ssd","Philips de 24p",true);

const array = [computadora1,computadora2,computadora3,computadora4,computadora5]

array.forEach( arr => {console.log(arr.getDetail())})
const array2 = []


array.forEach( arr2 => {
    if(arr2.gpu === true) 
    array2.push(arr2)
})
console.log( '--------')
array2.forEach( arr => {console.log(arr.getDetail())})
console.log('tenes ' + array.length)

