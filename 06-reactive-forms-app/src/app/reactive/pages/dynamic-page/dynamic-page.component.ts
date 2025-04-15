import { JsonPipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Mario Bros', Validators.required],
    ], Validators.minLength(3))

  });

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }




}
