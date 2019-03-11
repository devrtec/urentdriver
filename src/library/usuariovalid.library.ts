import { AbstractControl } from '@angular/forms';

export class UsuariovalidLibrary {  
  
  public static isEmail(control: AbstractControl) {
    let rex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = rex.test(control.value);
  
        if (!result) {
      return { isvalid: true };
    }
    return null;
  }   
}