import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { URL_API } from "../apis/api";

import "rxjs/add/operator/toPromise";

@Injectable()
export class IBGEService {
  constructor(private http: Http) {}

  public GetEstados(): Promise<any[]> {
    return this.http
      .get(`${URL_API}/estados`)
      .toPromise()
      .then((resp: Response) => resp.json());
  }

  public GetMunicipios(id: string): Promise<any[]> {
    return this.http
      .get(`${URL_API}/estados/${id}/municipios`)
      .toPromise()
      .then((resp: Response) => resp.json());
  }
}
