import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  entradas: { titulo: string }[];


  constructor(){
    this.entradas = [
      
      {titulo:"Python cada día más presente"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Angular para tener muchas oportunidades"},
      {titulo:"HTML y CSS, la base de todo"},
      {titulo:"Java presente desde hace más de 20 años"},

    ]

  }


  registrarUsuario(){

    this.registrado = true

    this.mensaje = "Usuario resgistrado con éxito"

  }
}
