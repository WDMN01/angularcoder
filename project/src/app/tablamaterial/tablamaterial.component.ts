import { Component } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  position: number;
  apellido: string;
  correo: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Carlos', apellido: 'Marin', correo: 'carlosm@universidad.com'},
  {position: 2, nombre: 'Isabella', apellido: 'Rivera', correo: 'isabellar@universidad.com'},
  {position: 3, nombre: 'Juan', apellido: 'Ordoñez', correo: 'juano@universidad.com'},
  {position: 4, nombre: 'Maria', apellido: 'Sosa', correo: 'marias@universidad.com'},
  {position: 5, nombre: 'Julian', apellido: 'Martinez', correo: 'julianm@universidad.com'},
  {position: 6, nombre: 'Hernesto', apellido: 'Ramirez', correo: 'hernestor@universidad.com'},
  {position: 7, nombre: 'Lucia', apellido: 'Pelaes', correo: 'liciap@universidad.com'},
  {position: 8, nombre: 'Sofia', apellido: 'Rodriguez', correo: 'sofiar@universidad.com'},
  {position: 9, nombre: 'Natalia', apellido: 'Quiñonez', correo: 'nataliaq@universidad.com'},
  {position: 10, nombre: 'Lorenzo', apellido: 'Zambrano', correo: 'lorenzoz@universidad.com'},
];


@Component({
  selector: 'app-tablamaterial',
  templateUrl: './tablamaterial.component.html',
  styleUrls: ['./tablamaterial.component.css']
})
export class TablamaterialComponent {
  displayedColumns: string[] = ['position', 'nombre', 'apellido', 'correo', 'editar', 'borrar'];
  dataSource = ELEMENT_DATA;
}

