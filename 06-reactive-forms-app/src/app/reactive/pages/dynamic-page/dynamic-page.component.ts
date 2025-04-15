import { JsonPipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Mario Bros', Validators.required],
    ], Validators.minLength(3))

  });

  newFavourite = new FormControl('', Validators.required);
  //newFavourite = this.fb.control(['', Validators.required])

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddToFavourite() {
    if ( this.newFavourite.invalid) { return;}
    const newGame = this.newFavourite.value;

    this.favoriteGames.push(this.fb.control(newGame, Validators.required))
    this.newFavourite.reset();
  }

  onDeleteFavourite(index:number) {
    this.favoriteGames.removeAt(index);
  }

  onSubmit() {
    if ( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  }

}
