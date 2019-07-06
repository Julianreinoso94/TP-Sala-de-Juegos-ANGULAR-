import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
declare const myTest: any;
import * as Timeline from '../../../assets/js/example.js';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
//   @Output()

//    enviarJuego :EventEmitter<any>= new EventEmitter<any>();

//    nuevoJuego : JuegoAgilidad;
//    ocultarVerificar: boolean;
//    Tiempo: number;
//    repetidor:any;
//    Mensajes:string;
//    private subscription: Subscription;

   ngOnInit() {

   }
    onClick() {
   myTest();
 }

//  constructor() {
//    this.ocultarVerificar=true;
//    this.Tiempo=5;
//    this.nuevoJuego = new JuegoAgilidad();

//   //this.nuevoJuego.jugador = this.miServicio.TraerUsuario();

//   console.info("Inicio agilidad");
//  }
//   NuevoJuego() {
//   this.nuevoJuego = new JuegoAgilidad();

// //  this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
//   this.ocultarVerificar=false;
//   this.nuevoJuego.generarNuevo();
//   this.repetidor = setInterval(()=>{

//     this.Tiempo--;

//     if(this.Tiempo==0 ) {
//       clearInterval(this.repetidor);
//       this.verificar()
//       this.ocultarVerificar=true;
//       this.Tiempo=5;

//     }
//     }, 900);

// }
// verificar()
// {
//   this.ocultarVerificar=false;
//   if (this.nuevoJuego.verificar()){

//     this.enviarJuego.emit(this.nuevoJuego);
//     this.MostarMensaje("Sos un Genio!!!",true);

//     this.ocultarVerificar=true;
//     clearInterval(this.repetidor);


//   }else{
//     this.MostarMensaje("Puede fallar!!!");
//     clearInterval(this.repetidor);
//     this.ocultarVerificar=true;
//     this.enviarJuego.emit(this.nuevoJuego);

//     this.Tiempo=5;
//   }


// }
// //==MOSTramos el mensaje
// MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
//   this.Mensajes=mensaje;
//   var x = document.getElementById("snackbar");
//   if(ganador)
//     {
//       x.className = "show Ganador";
//     }else{
//       x.className = "show Perdedor";
//     }
//   var modelo=this;

//   setTimeout(function(){
//     x.className = x.className.replace("show", "");
//    }, 3000);

//  }



}
