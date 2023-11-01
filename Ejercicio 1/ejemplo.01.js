function getDiasForMes(mes){

    if(Number.isNaN(mes)) return false; //si o si sea numero
    if(mes < 1 || mes > 12) return false // numeros entre 1 y 12(meses del ano)

        mes --

    const data = [
            {
                nombre: 'Enero',
                dias:31
            },
            {
                nombre: 'Febrero',
                dias: 28
            },
            {
                nombre: 'Marzo',
                dias: 31
            },
            {
                nombre: 'Abril',
                dias: 30
            },
            {
                nombre: 'Mayo',
                dias: 31
            },
            {
                nombre: 'Junio',
                dias: 30
            },
            {
                nombre: 'Julio',
                dias: 31
            },
            {
                nombre: 'Agosto',
                dias: 31
            },
            {
                nombre: 'Septiembre',
                dias: 30
            },
            {
                nombre: 'Octubre',
                dias: 31
            },
            {
                nombre: 'Noviembre',
                dias: 30
            },
            {
                nombre: 'Diciembre',
                dias: 31
            }
        ]
    return data[mes];
}

const numMes = parseInt(prompt('INGRESE EL MES DEL ANO EN NUMERO: ', ''));//VENTANA

const resultado = getDiasForMes(numMes);//????

if(resultado){
    alert(`${resultado.nombre} tiene ${resultado.dias}`)
}else{
    alert('Mes invalido')
}