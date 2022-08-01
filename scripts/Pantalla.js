class Pantalla{
    constructor(pantallaValorAnterior, pantallaValorActual){
        this.pantallaValorActual= pantallaValorActual;
        this.pantallaValorAnterior= pantallaValorAnterior;
        this.calculadora= new Calculadora();
        this.audios= new Audios();
        this.tipoOperacion= undefined;
        this.valorActual= '';
        this.valorAnterior= '';
        this.signos= {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-',
            potenciar: '^',
        }
    }

    borrar(){
        this.valorActual= this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual= '';
        this.valorAnterior= '';
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion= tipo;
        this.valorAnterior= this.valorActual || this.valorAnterior;
        this.valorActual= '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual= this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.pantallaValorActual.textContent= this.valorActual;
        this.pantallaValorAnterior.textContent= `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        this.manejarBotonAudio();
    }

    manejarBotonAudio(){
        if (this.pantallaValorAnterior.textContent == 1986 || this.pantallaValorAnterior.textContent == 1988 || this.pantallaValorAnterior.textContent == 1995 || this.pantallaValorAnterior.textContent == 2008 || this.pantallaValorAnterior.textContent == 2015 || this.pantallaValorAnterior.textContent == 1999 || this.pantallaValorAnterior.textContent == 2006 || this.pantallaValorAnterior.textContent == 2007){
            this.audios.mostrarAudio();
        }
    }

    calcular(){
        const valorAnterior= parseFloat(this.valorAnterior);
        const valorActual= parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior))return
        this.valorActual= this.calculadora[this.tipoOperacion](valorAnterior, valorActual)
    }

}