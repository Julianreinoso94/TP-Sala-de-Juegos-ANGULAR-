import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

  import { MyserviceService } from 'src/app/servicios/myservice.service';
@Component({
  selector: 'app-ajuegosimon',
  templateUrl: './ajuegosimon.component.html',
  styleUrls: ['./ajuegosimon.component.css']
})
@Injectable()

export class AjuegosimonComponent implements OnInit {
  public count=0;
  respuestas:any;
  preguntas:string[] =["Quien fue el conquistador de america?",
  "Resultado de 3+3",
  "Cual es la Capital de Buenos Aires?",
  "Nombre del creador del lenguaje Java ?",
  "Creador del Lenguaje c++?",
  "Creador del Lenguje C?",
  "Creador del sistena",
  "Creador del sistema operativo UNIX?",
  "Creador de Apple?",
  "Fundador de google?"];
  respuestas1:string[] =["San Martin","Todo2","Todo3"];//0
  respuestas2:string[] =["San rafael","La plata","Todo3"];//1
  respuestas3:string[] =["4","6","Todo3"];//1
  respuestas4:string[] =["James bring","Todo2","James Gosling"];//2
  respuestas5:string[] =["Todo1","Bjarne Stroustrup","Todo3"];//1
  respuestas6:string[] =["Dennis Ritchie","Todo2","Todo3"];//0
  respuestas7:string[] =["Todo1","Ken Thompson  ","Todo3"];//1
  respuestas8:string[] =["Todo1","Todo2","Todo3"];
  respuestas9:string[] =["Todo1","Steve Jobs","Todo3"];//1
  respuestas10:string[] =["Serguéi Brin  ","Bill gates","Steve Jobs"];//0
  constructor(public gs:MyserviceService ) { }

  ngOnInit() {
    //this.preguntas=[d,d];
    this.respuestas=this.respuestas1;
  }

  siguiente()
  {
    this.respuestas=this.respuestas1;
    this.count++;
    if (this.count==1)
    {
      alert("primera");
      this.respuestas=this.respuestas2;

    }
    if (this.count==2)
    {
      alert("primera");
      this.respuestas=this.respuestas3;

    }
    if (this.count==3)
    {
      alert("primera");
      this.respuestas=this.respuestas4;

    }
    if (this.count==4)
    {
      alert("primera");
      this.respuestas=this.respuestas5;

    }
    if (this.count==5)
    {
      alert("primera");
      this.respuestas=this.respuestas6;

    }
    if (this.count==6)
    {
      alert("primera");
      this.respuestas=this.respuestas7;

    }
    if (this.count==7)
    {
      alert("primera");
      this.respuestas=this.respuestas8;

    }
    if (this.count==8)
    {
      alert("primera");
      this.respuestas=this.respuestas9;

    }
    if (this.count==9)
    {
      alert("primera");
      this.respuestas=this.respuestas10;

    }
    if (this.count==10)
    {
      alert("primera");
    }


  }
  respuesta2()
  {
    alert("dsa");
  }

  respuesta()
  {
    alert("entro")
    // if (this.count==1)
    // {
    //   alert("primera");
    //   if(valor==1)
    //   {
    //     alert("correcto");
    //   }
    //   if (valor==2)
    //   {
    //     alert("incorrecto");
    //   }
    //   else{
    //     alert("incorrecto");
    //   }
    
    // }
    // if (this.count==2)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas3;

    // }
    // if (this.count==3)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas4;

    // }
    // if (this.count==4)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas5;

    // }
    // if (this.count==5)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas6;

    // }
    // if (this.count==6)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas7;

    // }
    // if (this.count==7)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas8;

    // }
    // if (this.count==8)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas9;

    // }
    // if (this.count==9)
    // {
    //   alert("primera");
    //   this.respuestas=this.respuestas10;

    // }
    // if (this.count==10)
    // {
    //   alert("primera");
    // }

  }



  

}
