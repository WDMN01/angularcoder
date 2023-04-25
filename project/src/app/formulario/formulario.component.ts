import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formularioprincipal: FormGroup ;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.formularioprincipal = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: [],
      genero: [],
      correo: ['', [Validators.required, Validators.email]],
    });
  }
  submit():void{
    console.log(this.formularioprincipal.value);
    console.log(this.formularioprincipal.valid);
  }
}
