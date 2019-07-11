import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from "../../servicios/auth.service";

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  
  email: string;
  password: string;

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigateByUrl('Principal');
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }
  

  clase="progress-bar progress-bar-info progress-bar-striped ";
/**implements OnInit {

  constructor( public loadingCtrl: LoadingController,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
   //private formBuilder: FormBuilder)
  )
    { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigateByUrl('home');
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }implements OnInit {

  email: string;
  password: string;

  constructor( public loadingCtrl: LoadingController,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
   //private formBuilder: FormBuilder)
  )
    { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigateByUrl('home');
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }implements OnInit {

  email: string;
  password: string;

  constructor( public loadingCtrl: LoadingController,
    public actionSheetController: ActionSheetController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
   //private formBuilder: FormBuilder)
  )
    { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
    this.authService.login(this.email, this.password).then( res =>{
      this.router.navigateByUrl('home');
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  } */
  constructor(
    private route: ActivatedRoute,private authService: AuthService,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
  }

  admin(){
    this.email="admin";
    this.password="admin";

  }

  usuarios(){
    this.email="usuario";
    this.password="usuario";

  }


  

  Entrar() {
    if (this.email === 'admin' && this.password === 'admin' || this.email === 'usuario' && this.password === 'usuario' ) {
      this.router.navigate(['/Principal']);
    }
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
