import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Locador } from '../models/locador.model'
import { URI } from '../apis/api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class LocadorService {   
    
    constructor(private http: Http){}
    
    public SelectLocadoresAll(): Promise<Locador[]> {              
        return this.http.get(`${URI.app}/locadores`)
            .toPromise()
            .then((resp: Response) => resp.json())             
    }  

    public CreateLocador(locador: Locador): Observable<any> {
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.post(
            `${URI.app}/locadores`,
            JSON.stringify(locador),
            new RequestOptions({ headers: headers })
        )
        .map((resp: Response) => resp.json())       
    }   
   
    public UpdateLocador(locador: Locador): Observable<number> {       
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.put(
            `${URI.app}/usuarios/${locador._id}`,
            JSON.stringify(locador),
            new RequestOptions({ headers: headers })
        )
        .map((resp: Response) => resp.json().id)       
    }   
}