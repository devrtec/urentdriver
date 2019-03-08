import { FormControl, ValidationErrors } from '@angular/forms';

export class UsuariovalidLibrary {

  public static isEmail(control: FormControl): any {
    return new Promise(resolve => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);

      if (!result) {
        console.log("fail");
        resolve({isEmail: false});       
      } else {
        console.log("ok");
        resolve({isEmail: true});        
       
      }
      console.log(control);
    });
  }
  public static isEmail2(control: FormControl): Promise<ValidationErrors> {
    const message = {
      'isEmail': {
        'message': 'E-mail inválido'
      }
    };
 
    return new Promise(resolve => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);

      if (!result) {
        console.log("fail");
        resolve(message);
      } else {
        console.log("ok");
        resolve(null);
       
      }
      console.log(control);      
     
    });
  }
}