import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit{
  listStyles = { 'background-color': 'lightblue', 'border': '1px solid black' };
  public estudiantes =[ 'Isabela' , 'Juan', 'Carlos', 'Efrain', 'Jorge'];
  ngOnInit(): void {
    
  }

}