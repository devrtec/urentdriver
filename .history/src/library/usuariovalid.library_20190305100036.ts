import { FormControl } from '@angular/forms';

export class UsuariovalidLibrary {

  public static isEmail(control: FormControl): any {
    return new Promise(resolve => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);

      if (!result) {
        console.log("ok");
        resolve({
          "email:validation": false
        });

      } else {
        console.log("fail");
        resolve(true);
      }
    });
  }
}