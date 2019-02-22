import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ViaCEPService {
  constructor(private http: Http) {}

  public GetEndereco(cep: string): Promise<any> {
    return this.http
      .get(`http://viacep.com.br/ws/${cep}/json/`)
      .toPromise()
      .then((resp: Response) => resp.json());
  }
}
