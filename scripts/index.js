const pantallaValorAnterior= document.querySelector(".pantallaValorAnterior");
const pantallaValorActual= document.querySelector(".pantallaValorActual");
const botonesNumeros= document.querySelectorAll(".numero");
const botonesOperadores= document.querySelectorAll(".operador");
const borrarTodo= document.querySelector('.borrarTodo');
const borrar= document.querySelector('.borrar');

const menuDisplayer= document.querySelector('.display-menu');
const cambioDeColor= document.querySelector('.cambio-color');
const cambioRotacionX= document.querySelector('.cambio-rotacion-x');
const cambioRotacionY= document.querySelector('.cambio-rotacion-y');
const cambioAnimacion= document.querySelector('.cambio-animacion');
const reestablecer= document.querySelector('.reestablecer');
const colorPicker= document.getElementById('seleccionar-color');
const clickAudio= document.querySelector('.boton-audios');

const colores= document.querySelectorAll('.contenedor-color-opciones > ul > li > span');
const rotacionesX= document.querySelectorAll('.contenedor-rotacion-x > ul > li');
const rotacionesY= document.querySelectorAll('.contenedor-rotacion-y > ul > li');
const animaciones= document.querySelectorAll('.contenedor-animacion > ul > li');

const pantalla= new Pantalla(pantallaValorActual, pantallaValorAnterior);
const audios= new Audios();
const menu= new Menu(cambioDeColor, cambioRotacionX, cambioRotacionY, cambioAnimacion, reestablecer);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        pantalla.agregarNumero(boton.innerHTML);
    });
});

document.addEventListener('keydown', tecla => {
    !isNaN(tecla.key) || tecla.key === '.'? pantalla.agregarNumero(tecla.key) : '';
    if(tecla.key === '+'){
        pantalla.computar('sumar');
    } else if(tecla.key === '-'){
        pantalla.computar('restar')
    } else if(tecla.key === '*'){
        pantalla.computar('multiplicar');
    } else if(tecla.key === '/'){
        pantalla.computar('dividir');
    } else if(tecla.key === 'Enter' || tecla.key === '='){
        pantalla.computar('igual');
    } else if(tecla.key === 'Backspace'){
        pantalla.borrar();
    } else if(tecla.key === 'c' || tecla.key === 'C'){
        pantalla.borrarTodo();
    }
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});

borrarTodo.addEventListener('click', () => {
    pantalla.borrarTodo();
});

borrar.addEventListener('click', () => {
    pantalla.borrar();
});

menuDisplayer.addEventListener('click', () => {
    menu.click();
});

cambioDeColor.addEventListener('click', () => {
    menu.clickColores();
});

colores.forEach(color => {
    color.addEventListener('click', () => {
        menu.cambiarColores(color.className);
    });
});

colorPicker.addEventListener('input', () => {
    menu.colorInput(colorPicker.value);
});

cambioRotacionX.addEventListener('click', () => {
    menu.clickRotacionX();
});

rotacionesX.forEach(rotacionX => {
    rotacionX.addEventListener('click', () => {
        menu.rotarX(rotacionX.innerHTML);
    });
});

cambioRotacionY.addEventListener('click', () => {
    menu.clickRotacionY();
});

rotacionesY.forEach(rotacionY => {
    rotacionY.addEventListener('click', () => {
        menu.rotarY(rotacionY.innerHTML);
    });
});

reestablecer.addEventListener('click', () =>{
   menu.reestablecer(); 
});

cambioAnimacion.addEventListener('click', () => {
    menu.clickCambioAnimacion();
});

animaciones.forEach(animacion => {
    animacion.addEventListener('click', () => {
        menu.cambiarAnimacion(animacion.innerHTML);
    });
});

clickAudio.addEventListener('click', () => {
    audios.reproducirAudio(parseFloat(pantalla.pantallaValorAnterior.textContent));
});