import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    //name: ['', [] /** Validadores síncronos */, [] /** Validadores Asíncronos */] ,
    name: [''] ,
    price: [0] ,
    inStorage: [0] ,
  })

  // myForm = new FormGroup({
  //   name: new FormControl('', [] /** Validadores síncronos */, [] /** Validadores Asíncronos */),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

}
