import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    //name: ['', [] /** Validadores síncronos */, [] /** Validadores Asíncronos */] ,
    name: ['', [Validators.required, Validators.minLength(3)] ] ,
    price: [0, [Validators.required, Validators.min(10)]] ,
    inStorage: [0, [Validators.required, Validators.min(0)]] ,
  })

  // myForm = new FormGroup({
  //   name: new FormControl('', [] /** Validadores síncronos */, [] /** Validadores Asíncronos */),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  onSave() {
    if ( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }

}
