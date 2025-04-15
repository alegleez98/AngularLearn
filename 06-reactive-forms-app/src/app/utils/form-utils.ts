import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";



export class FormUtils {

  //Expresiones regulares
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

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
        case 'pattern':
          if ( errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El valor ingresado no tiene el formato de un correo electrónico';
          }
          return 'Error de patrón contra expesión regular';
        default:
          return `Error de validación no controlado ${key}`
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

  static isFieldOneEqualsFieldTwo( field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;
      return field1Value === field2Value ? null : { passwordsNotEqual: true }
    }
  }

  static isValidFieldInArray( FormArray: FormArray, index: number) {
    return (
      FormArray.controls[index].errors && FormArray.controls[index].touched
    );
  }

}
