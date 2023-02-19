'use strict';

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.onclick = function(event){
event.preventDefault();
paintRecibo();
}

const paintRecibo =()=>{
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const colour = document.getElementById('colour')
    const opcion = document.getElementById('opcion').value;
    const precio = 400000;
    const recibo = cantidad*precio;

    document.getElementById('totalm').innerHTML = `$ ${recibo}`;
    document.getElementById('cantidadm').innerHTML = `${cantidad}`;

    switch(opcion){
        case "negro":
            colour.classList.remove('colour');
            colour.classList.add('negro');
        break;
        case "gris":
            colour.classList.remove('colour');
            colour.classList.add('gris');
        break;
        case "blanco":
            colour.classList.remove('colour');
            colour.classList.add('blanco');
        break;
    }
}