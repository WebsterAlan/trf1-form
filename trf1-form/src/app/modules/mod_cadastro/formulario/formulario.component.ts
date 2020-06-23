import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario;

  constructor(private formBuilder : FormBuilder) {
   
     this.formulario = formBuilder.group({});

  }

  ngOnInit(): void {}

}
