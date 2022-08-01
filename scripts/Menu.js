class Menu{
    constructor(cambioDeColor, cambioRotacionX, cambioRotacionY, cambioAnimacion, reestablecer){
        this.opcionesMenu=[
            cambioDeColor,
            cambioRotacionX,
            cambioRotacionY,
            cambioAnimacion,
            reestablecer
        ]
        this.opcionesColores= document.querySelectorAll('.contenedor-color-opciones > ul > li');
        this.opcionesRotacionX= document.querySelectorAll('.contenedor-rotacion-x > ul > li');
        this.opcionesRotacionY= document.querySelectorAll('.contenedor-rotacion-y > ul > li');
        this.rotarBoton= document.querySelectorAll('.contenedor-boton');
        this.opcionesAnimaciones= document.querySelectorAll('.contenedor-animacion > ul > li');
        this.rootStyles= document.documentElement.style;
        this.rotacionX= '20deg';
        this.rotacionY= '30deg';
        this.desplegado= true;
        this.desplegadoColores= true;
        this.desplegadoRotacionX= true;
        this.desplegadoRotacionY= true;
        this.desplegadoCambioAnimacion= true;
    }

    click(){
        this.desplegado= !this.desplegado;
        if(!this.desplegado){
            this.desplegar();
        }
        if(this.desplegado){
            this.guardarColores();
            !this.desplegadoColores? this.desplegadoColores = !this.desplegadoColores : '';
            this.guardarRotacionX();
            !this.desplegadoRotacionX? this.desplegadoRotacionX = !this.desplegadoRotacionX : '';
            this.guardarRotacionY();
            !this.desplegadoRotacionY? this.desplegadoRotacionY = !this.desplegadoRotacionY : '';
            this.guardarAnimaciones();
            !this.desplegadoCambioAnimacion? this.desplegadoCambioAnimacion = !this.desplegadoCambioAnimacion : '';
            this.guardar();
        }
    }

    desplegar(){
        let contador= 0;
        for (const opcion of this.opcionesMenu) {
            if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight < 580){
                opcion.style.left= `${70 + (45 * contador)}px`;
            } else if(window.innerHeight >= 580 && window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.left= `${90 + (60 * contador)}px`;
            } else if(window.innerWidth >= 580 && window.innerWidth <= 900 && window.innerHeight >= 320 && window.innerHeight <= 425){
                opcion.style.left= `${90 + (60 * contador)}px`;                
            } else{
                opcion.style.left= `${180 + (70 * contador)}px`
            }
            opcion.style.boxShadow= '0px 0px 15px var(--color-base)';
            opcion.style.visibility= 'visible';
            contador+= 1;
        }
    }

    guardar(){
        for (const opcion of this.opcionesMenu) {
            if(window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.left= '15px';
            } else{
                opcion.style.left= '80px';
            }
            opcion.style.boxShadow= '';
            opcion.style.visibility= 'hidden';
        }
    }

    guardarAlDesplegar(objetoDesplegado){
        if(objetoDesplegado === 'colores'){
            if(!this.desplegadoRotacionX){
                this.desplegadoRotacionX = !this.desplegadoRotacionX;
                this.guardarRotacionX();
            }
            if(!this.desplegadoRotacionY){
                this.desplegadoRotacionX = !this.desplegadoRotacionX;
                this.guardarRotacionY();
            }
            if(!this.desplegadoCambioAnimacion){
                this.desplegadoCambioAnimacion = !this.desplegadoCambioAnimacion;
                this.guardarAnimaciones();
            }
        } else if(objetoDesplegado === 'rotaciones-x'){
            if(!this.desplegadoColores){
                this.desplegadoColores = !this.desplegadoColores;
                this.guardarColores();
            }
            if(!this.desplegadoRotacionY){
                this.desplegadoRotacionY = !this.desplegadoRotacionY;
                this.guardarRotacionY();
            }
            if(!this.desplegadoCambioAnimacion){
                this.desplegadoCambioAnimacion = !this.desplegadoCambioAnimacion;
                this.guardarAnimaciones();
            }
        } else if(objetoDesplegado === 'rotaciones-y'){
            if(!this.desplegadoColores){
                this.desplegadoColores = !this.desplegadoColores;
                this.guardarColores();
            }
            if(!this.desplegadoRotacionX){
                this.desplegadoRotacionX = !this.desplegadoRotacionX;
                this.guardarRotacionX();
            }
            if(!this.desplegadoCambioAnimacion){
                this.desplegadoCambioAnimacion = !this.desplegadoCambioAnimacion;
                this.guardarAnimaciones();
            }
        } else if(objetoDesplegado === 'animaciones'){
            if(!this.desplegadoColores){
                this.desplegadoColores = !this.desplegadoColores;
                this.guardarColores();
            }
            if(!this.desplegadoRotacionX){
                this.desplegadoRotacionX = !this.desplegadoRotacionX;
                this.guardarRotacionX();
            }
            if(!this.desplegadoRotacionY){
                this.desplegadoRotacionY = !this.desplegadoRotacionY;
                this.guardarRotacionY();
            }
        }
    }

    clickColores(){
        this.desplegadoColores= !this.desplegadoColores;
        if(!this.desplegadoColores){
            this.desplegarColores();
        }
        if(this.desplegadoColores){
            this.guardarColores();
        }
    }

    desplegarColores(){
        let contador= 0;
        for (const opcion of this.opcionesColores) {
            opcion.style.visibility= 'visible';
            if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight < 580){
                opcion.style.bottom= '60px';
            } else if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight >= 580){
                opcion.style.bottom= '80px';
            } else{
                opcion.style.bottom= '120px';
            }
            contador+= 1;
        }
        this.guardarAlDesplegar('colores');
    }

    guardarColores(){
        for (const opcion of this.opcionesColores) {
            opcion.style.visibility= 'hidden';
            if(window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.bottom= '15px';
            } else {
                opcion.style.bottom= '50px';
            }
        }
    }

    cambiarColores(color){
        if(color === 'blanco'){
            this.rootStyles.setProperty('--color-base', '#fff');
            this.rootStyles.setProperty('--color-sombra-1', 'rgba(255, 255, 255, 0.2)');
            this.rootStyles.setProperty('--color-sombra-2', 'rgba(255, 255, 255, 0.4)');
            this.rootStyles.setProperty('--color-sombra-3', 'rgba(255, 255, 255, 0.6)');
            this.rootStyles.setProperty('--color-sombra-4', 'rgba(255, 255, 255, 0.8)');
            this.rootStyles.setProperty('--color-sombra-5', 'rgba(255, 255, 255, 1)');
        } else if(color === 'rojo'){
            this.rootStyles.setProperty('--color-base', '#EB0000');
            this.rootStyles.setProperty('--color-sombra-1', 'rgba(235, 0, 0, 0.2)');
            this.rootStyles.setProperty('--color-sombra-2', 'rgba(235, 0, 0, 0.4)');
            this.rootStyles.setProperty('--color-sombra-3', 'rgba(235, 0, 0, 0.6)');
            this.rootStyles.setProperty('--color-sombra-4', 'rgba(235, 0, 0, 0.8)');
            this.rootStyles.setProperty('--color-sombra-5', 'rgba(235, 0, 0, 1)');
        } else if(color === 'violeta'){
            this.rootStyles.setProperty('--color-base', '#EB00C0');
            this.rootStyles.setProperty('--color-sombra-1', 'rgba(235, 0, 192, 0.2)');
            this.rootStyles.setProperty('--color-sombra-2', 'rgba(235, 0, 192, 0.4)');
            this.rootStyles.setProperty('--color-sombra-3', 'rgba(235, 0, 192, 0.6)');
            this.rootStyles.setProperty('--color-sombra-4', 'rgba(235, 0, 192, 0.8)');
            this.rootStyles.setProperty('--color-sombra-5', 'rgba(235, 0, 192, 1)');
        } else if(color === 'verde'){
            this.rootStyles.setProperty('--color-base', '#00EB10');
            this.rootStyles.setProperty('--color-sombra-1', 'rgba(0, 235, 16, 0.2)');
            this.rootStyles.setProperty('--color-sombra-2', 'rgba(0, 235, 16, 0.4)');
            this.rootStyles.setProperty('--color-sombra-3', 'rgba(0, 235, 16, 0.6)');
            this.rootStyles.setProperty('--color-sombra-4', 'rgba(0, 235, 16, 0.8)');
            this.rootStyles.setProperty('--color-sombra-5', 'rgba(0, 235, 16, 1)');
        }
    }

    colorInput(color){
        this.rootStyles.setProperty('--color-base', color);
        this.rootStyles.setProperty('--color-sombra-1', `${color}33`);
        this.rootStyles.setProperty('--color-sombra-2', `${color}66`);
        this.rootStyles.setProperty('--color-sombra-3', `${color}99`);
        this.rootStyles.setProperty('--color-sombra-4', `${color}CC`);
        this.rootStyles.setProperty('--color-sombra-5', `${color}FF`);
    }

    clickRotacionX(){
        this.desplegadoRotacionX= !this.desplegadoRotacionX;
        if(!this.desplegadoRotacionX){
            this.desplegarRotacionX();
        }
        if(this.desplegadoRotacionX){
            this.guardarRotacionX();
        }
    }

    desplegarRotacionX(){
        for (const opcion of this.opcionesRotacionX) {
            opcion.style.visibility= 'visible';
            if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight < 580){
                opcion.style.bottom= '60px';
            } else if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight >= 580){
                opcion.style.bottom= '80px';
            } else{
                opcion.style.bottom= '120px';
            }
        }
        this.guardarAlDesplegar('rotaciones-x');
    }

    guardarRotacionX(){
        for (const opcion of this.opcionesRotacionX) {
            opcion.style.visibility= 'hidden';
            if(window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.bottom= '15px';
            } else{
                opcion.style.bottom= '50px';
            }
        }
    }

    rotarX(rotacion){
        this.rotacionX= `${rotacion.slice(0, -1)}deg`;
        this.rotarBoton.forEach(boton => {
            boton.style.transform= `rotateX(-${this.rotacionY}) rotateY(${this.rotacionX})`;
        });
    }

    clickRotacionY(){
        this.desplegadoRotacionY= !this.desplegadoRotacionY;
        if(!this.desplegadoRotacionY){
            this.desplegarRotacionY();
        }
        if(this.desplegadoRotacionY){
            this.guardarRotacionY();
        }
    }

    desplegarRotacionY(){
        for (const opcion of this.opcionesRotacionY) {
            opcion.style.visibility= 'visible';
            if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight < 580){
                opcion.style.bottom= '60px';
            } else if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight >= 580){
                opcion.style.bottom= '80px';
            } else{
                opcion.style.bottom= '120px';
            }
        }
        this.guardarAlDesplegar('rotaciones-y');
    }

    guardarRotacionY(){
        for (const opcion of this.opcionesRotacionY) {
            opcion.style.visibility= 'hidden';
            if(window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.bottom= '15px';
            } else{
                opcion.style.bottom= '50px';
            }
        }
    }

    rotarY(rotacion){
        this.rotacionY= `${rotacion.slice(0, -1)}deg`;
        if(this.rotacionY === '30deg' || this.rotacionY === '40deg'){
            this.rotarBoton.forEach(boton => {
                boton.style.transform= `rotateX(-${this.rotacionY}) rotateY(${this.rotacionX})`;
                this.rootStyles.setProperty('--sombra-spray-1', '120px');
                this.rootStyles.setProperty('--sombra-spray-2', '200px');
                this.rootStyles.setProperty('--sombra-spray-3', '200px');
            });
        } else if(this.rotacionY === '50deg' || this.rotacionY === '60deg'){
            this.rotarBoton.forEach(boton => {
                boton.style.transform= `rotateX(-${this.rotacionY}) rotateY(${this.rotacionX})`;
                this.rootStyles.setProperty('--sombra-spray-1', '120px');
                this.rootStyles.setProperty('--sombra-spray-2', '200px');
                this.rootStyles.setProperty('--sombra-spray-3', ' ');
            });
        } else if(this.rotacionY === '90deg'){
            this.rotarBoton.forEach(boton => {
                boton.style.transform= `rotateX(-${this.rotacionY}) rotateY(${this.rotacionX})`;
                this.rootStyles.setProperty('--sombra-spray-1', '120px');
                this.rootStyles.setProperty('--sombra-spray-2', ' ');
                this.rootStyles.setProperty('--sombra-spray-3', ' ');
            });
        }
        this.rotarBoton.forEach(boton => {
            boton.style.transform= `rotateX(-${this.rotacionY}) rotateY(${this.rotacionX})`;
        });
    }

    clickCambioAnimacion(){
        this.desplegadoCambioAnimacion= !this.desplegadoCambioAnimacion;
        if(!this.desplegadoCambioAnimacion){
            this.desplegarAnimaciones();
        }
        if(this.desplegadoCambioAnimacion){
            this.guardarAnimaciones();
        }
    }

    desplegarAnimaciones(){
        for (const opcion of this.opcionesAnimaciones) {
            opcion.style.visibility= 'visible';
            if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight < 580){
                opcion.style.bottom= '60px';
            } else if(window.innerWidth >= 320 && window.innerWidth <= 425 && window.innerHeight >= 580){
                opcion.style.bottom= '80px';
            } else{
                opcion.style.bottom= '120px';
            }
        }
        this.guardarAlDesplegar('animaciones');
    }

    guardarAnimaciones(){
        for (const opcion of this.opcionesAnimaciones) {
            opcion.style.visibility= 'hidden';
            if(window.innerWidth >= 320 && window.innerWidth <= 425){
                opcion.style.bottom= '15px';
            } else{
                opcion.style.bottom= '50px';
            }
        }
    }

    cambiarAnimacion(animacion){
        this.rootStyles.setProperty('--animacion-boton', `animacion-boton-opcion-${animacion.slice(0, -1)} 3s linear infinite`);
        this.rootStyles.setProperty('--animacion-before', `animacion-boton-before-opcion-${animacion.slice(0, -1)} 3s linear infinite`);
        this.rootStyles.setProperty('--animacion-lados', `animacion-lados-opcion-${animacion.slice(0, -1)} 3s linear infinite`);
        this.rootStyles.setProperty('--animacion-contenedor-lados', `animacion-contenedor-lados-opcion-${animacion.slice(0, -1)} 3s linear infinite`);
    }

    reestablecer(){
        this.colorInput('#00ECD7');
        this.rotarX('20°');
        this.rotarY('30°');
        this.cambiarAnimacion('1°')
    }
}