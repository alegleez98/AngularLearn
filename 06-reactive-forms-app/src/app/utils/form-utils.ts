import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";



export class FormUtils {

  static getTextErrors(errors: ValidationErrors) {
    for ( const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
        case 'email':
          return `El valor ingresado no es un correo electronico`
      }
    }

    return null;
  }

  static isValidField( form: FormGroup, fieldName: string): boolean | null {
    return (!!form.controls[fieldName].errors && form.controls[fieldName].touched)
  }

  static  getFieldError( form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};
    return this.getTextErrors(errors);
  }

  static  getFieldErrorArray( form: FormArray, indexArray: number): string | null {
    if (form.controls.length === 0) return null;
    const errors = form.controls[indexArray].errors ?? {};
    return this.getTextErrors(errors);
  }

  static isValidFieldInArray( FormArray: FormArray, index: number) {
    return (
      FormArray.controls[index].errors && FormArray.controls[index].touched
    );
  }

}
