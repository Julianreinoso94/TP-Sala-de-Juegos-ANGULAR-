export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  public user = JSON.parse(localStorage.getItem("usuario"));

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;
    if(this.user == null){
      this.jugador = "Invitado@admin.com";
    }
    else{
      this.jugador=this.user.email;
    }
    if (gano)
      this.gano = gano;
    // if(jugador)
     // this.jugador=this.user.email;
    // else
    //   this.jugador= "natalia natalia";
  }




  public abstract verificar():boolean;

  public retornarAyuda() {

    return "NO hay Ayuda definida";
  }
}
