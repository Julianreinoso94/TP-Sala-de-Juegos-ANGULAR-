import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    eleccionMaquina : string;
    eleccionHumano : string;
    ContadorDeEmpates : number =0;
    ContadorDeGanadas : number =0;
    ContadorDePerdidas : number =0;
    numeroSecreto : number = null;
    mensaje : string;
    msjEleccionMaquina : string;
    mensajeResultado : string;

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super("Piedra Papel o Tijera",gano,jugador);
        this.comenzar();
    }

    public comenzar()
    {
        this.numeroSecreto =Math.floor( Math.random()*3)+1;//RANDOM entre 1 y 3
        // alert(this.numeroSecreto+ ' secreto');

        switch(this.numeroSecreto)
        {
            case 1:
                // alert(this.numeroSecreto);
                this.eleccionMaquina = 'piedra';
                break;
            case 2:
                this.eleccionMaquina= 'papel';
                break;
            case 3:
                this.eleccionMaquina= 'tijera';
                break;
        }
    }//end funcion comenzar

    public piedra():string
    {
        this.msjEleccionMaquina =  "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "piedra ";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            this.mensaje = " Empate. ";
            this.ContadorDeEmpates++;
        }
        else if(this.eleccionMaquina == "tijera")
        {
            this.mensaje = " Ganaste! ";
            this.ContadorDeGanadas++;
        }
        else
        {
            this.mensaje = " Oops... Ganó la Máquina! ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }//end funcion piedra

    public papel():string
    {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "papel";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if(this.eleccionMaquina == "piedra")
        {
            this.mensaje = " Ganaste.";
            this.ContadorDeGanadas++;
        }
        else
        {
            this.mensaje = " Oops... Ganó la Máquina.";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }//end funcion  papel

    tijera():string
    {
        this.msjEleccionMaquina = "La máquina eligió: " +this.eleccionMaquina;
        this.eleccionHumano = "tijera";
        if(this.eleccionHumano == this.eleccionMaquina)
        {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if(this.eleccionMaquina == "papel")
        {
            this.mensaje = " Ganaste. ";
            this.ContadorDeGanadas++;
        }
        else
        {
            this.mensaje = " Oops... Ganó la Máquina. ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina ;
    }//end funcion tijera

    public mostarResultado():string
    {
        return  this.mensajeResultado =  'Ganados: ' + this.ContadorDeGanadas + ' \nPerdidos:' + this.ContadorDePerdidas +
                ' Empatados: ' + this.ContadorDeEmpates ;
    }

    public verificar(){
        if(this.gano){
            alert("gano");
            return true;
        }
        else{
            alert("perdió");
            return false;
        }

    }

    public resetear(){
        this.eleccionMaquina = "";
        this.eleccionHumano = "";
        this.ContadorDeEmpates  =0;
        this.ContadorDeGanadas  =0;
        this.ContadorDePerdidas  =0;
        this.numeroSecreto  = null;
        this.mensaje = "";
        this.msjEleccionMaquina = "";
        this.mensajeResultado = "";
    }

}
