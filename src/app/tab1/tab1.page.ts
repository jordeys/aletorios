import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Variable para almacenar el número aleatorio y controlar la visibilidad de las cajas
  n: number = 0;

  // Función para generar un número aleatorio y asignarlo a "n"
  generateNumber() {
    this.n = Math.floor(Math.random() * 6) + 1;
  }
}
