class Audios{
    constructor(){
        this.audios= {
            a2007: new Audio('../audios/adios.mp3'),
            a2015: new Audio('../audios/better-call-saul-intro.mp3'),
            a2008: new Audio('../audios/breaking-bad-intro.mp3'),
            a2006: new Audio('../audios/crimen.mp3'),
            a1995: new Audio('../audios/ella-uso-mi-cabeza-como-un-revolver.mp3'),
            a1998: new Audio('../audios/en-la-ciudad-de-la-furia.mp3'),
            a1999: new Audio('../audios/puente.mp3'),
            a1986: new Audio('../audios/signos.mp3')
        }
        this.botonAudios= document.querySelector('.boton-audios');
        this.audioActual= '';
        this.audioAnterior= '';
    }

    mostrarAudio(){
        this.botonAudios.style.visibility= 'visible';
    }

    reproducirAudio(numero){
        this.audioAnterior= this.audioActual || '';
        this.audioActual= numero;
        console.log(this.audioAnterior);
        
        if(this.audioAnterior !== ''){
            this.audios[`a${this.audioAnterior}`].pause();
        }
        this.audios[`a${this.audioActual}`].play();
    }
}