import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Entrenador} from "../entrenador";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-crear-cabecera',
  templateUrl: './crear-cabecera.component.html',
  styleUrls: ['./crear-cabecera.component.css']
})
export class CrearCabeceraComponent implements OnInit {

  @Output() entrenadorCreado: EventEmitter<Entrenador> = new EventEmitter<Entrenador>();
  entrenador: Entrenador;

  constructor() {
    this.entrenador =  new Entrenador();
    this.entrenador.Pokemon =  [];
  }

  ngOnInit() {
  }

  guardarEnArreglo() {
    //this.entrenador.Id =
    console.log(JSON.stringify(this.entrenador));
    this.entrenadorCreado.emit(this.entrenador);
    this.entrenador = new Entrenador();
    this.entrenador.Pokemon =  [];
  }

  limpiar() {
    this.entrenador = new Entrenador();
    this.entrenador.Pokemon =  [];
  }
}
