import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entrenador} from "../entrenador";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-crear-detalle',
  templateUrl: './crear-detalle.component.html',
  styleUrls: ['./crear-detalle.component.css']
})
export class CrearDetalleComponent implements OnInit {

  @Output() pokemonCreado: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  pokemon: Pokemon;

  constructor() {
    this.pokemon = new Pokemon();
  }

  ngOnInit() {
  }

  guardarEnArreglo() {
    this.pokemonCreado.emit(this.pokemon);
    this.pokemon = new Pokemon();
  }

  limpiar() {
    this.pokemon = new Pokemon();
  }

}
