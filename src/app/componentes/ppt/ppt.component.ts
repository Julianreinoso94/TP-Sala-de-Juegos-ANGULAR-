import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  eleccionUser : string;
    empezar : JuegoPiedraPapelTijera;
    nuevoJuego : JuegoPiedraPapelTijera;
    eleccionMaquina : any = "piedra-papel-tijera!";
    resultado : any;
    estadisticas : any;
    mostrarBoton : boolean = false;
    constructor() {
      this.empezar = new JuegoPiedraPapelTijera();
      this.nuevoJuego = new JuegoPiedraPapelTijera();
    }


    elijePiedra(){
      this.empezar.comenzar();
      this.mostrarBoton = true;
      this.eleccionMaquina = this.nuevoJuego.piedra();
      this.resultado = this.nuevoJuego.mensaje;
      this.estadisticas = this.nuevoJuego.mostarResultado();
    }

    elijePapel(){
      this.empezar.comenzar();
      this.mostrarBoton = true;
      this.eleccionMaquina = this.nuevoJuego.papel();
      this.resultado = this.nuevoJuego.mensaje;
      this.estadisticas = this.nuevoJuego.mostarResultado();
    }

    elijeTijera(){
      this.empezar.comenzar();
      this.mostrarBoton = true;
      this.eleccionMaquina = this.nuevoJuego.tijera();
      this.resultado = this.nuevoJuego.mensaje;
      this.estadisticas = this.nuevoJuego.mostarResultado();
    }

    limpiar(){
      this.mostrarBoton = false;
      this.eleccionMaquina = "piedra-papel-tijera!";
      this.resultado = "";
      this.estadisticas = "";
      this.nuevoJuego.resetear();
    }
    ngOnInit() {
    }

  }
