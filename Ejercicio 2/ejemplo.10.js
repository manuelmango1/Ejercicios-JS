const empleados = [
    {
        nombre: 'Manuel',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Sara',
        trabajo: 'Psicologa'
    },
    {
        nombre: 'Marcelo',
        trabajo: 'Ingeniero'
    },
    {
        nombre: 'Agustin',
        trabajo: 'Disenador'
    },
    {
        nombre: 'Vanina',
        trabajo: 'Profesora'
    },
    {
        nombre: 'Matias',
        trabajo: 'Nutricionista'
    }

]

//metodo array ?> que solo muestre los desarrolladores.
const desarrolladores = empleados.filter(function(e){
    return e.trabajo == 'desarrollador';
})

for(let i = 0; i < desarrolladores.length; i++){
    
    document.write(`<h4>Desarrollador: </h4><li> ${desarrolladores[i].nombre}</li>`)
}

console.log(desarrolladores);


const otrosEmpleos = empleados.filter(function(n){
    return n.trabajo !== 'desarrollador';
})
document.write(`<h4>No desarrolladores: </h4>`)
for(i = 0; i < otrosEmpleos.length; i++){
    document.write(`<ul><li>${otrosEmpleos[i].nombre}</li></ul>`)
}
console.log(otrosEmpleos);