import { Component } from '@angular/core';
import {Entrenador} from "./entrenador";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arregloEntrenador: Entrenador[] = [];
  entrenadorSeleccionado: Entrenador;
  arregloPokemon: Pokemon[] = [];
  dimensionArreglo: number;

  constructor() {
    this.entrenadorSeleccionado = new Entrenador();
    this.entrenadorSeleccionado.Pokemon =  [];
    this.dimensionArreglo = this.arregloEntrenador.length;
  }
  agregarEntrenador(entrenador) {
    entrenador.Id = this.arregloEntrenador.length + 1;
    this.arregloEntrenador.push(entrenador);
    console.log(JSON.stringify(this.arregloEntrenador));
  }
  agregarPokemon(pokemon) {
    this.entrenadorSeleccionado.Pokemon.push(pokemon);
    console.log(JSON.stringify(this.arregloPokemon));
  }

  seleccionarCabecera(paciente) {
    this.entrenadorSeleccionado = new Entrenador();
    console.log("Selecion: " + JSON.stringify(paciente));
    this.entrenadorSeleccionado =  paciente;
  }
}
