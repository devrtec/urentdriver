import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Usuario } from '../models/usuario.model'
import { URL_API } from '../apis/api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class UsuarioService {   
    
    constructor(private http: Http){}
    
    public SelectUsuariosAll(): Promise<Usuario[]> {              
        return this.http.get(`${URL_API}/usuarios`)
            .toPromise()
            .then((resp: Response) => resp.json())             
    }  

    public SelectUsuarioByCel(cel: string): Promise<Usuario[]> {              
        return this.http.get(`${URL_API}/usuarios?cel=${cel}`)
            .toPromise()
            .then((resp: Response) => resp.json())             
    }  

    public CreateUsuario(usuario: Usuario): Observable<number> {
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.post(
            `${URL_API}/usuarios`,
            JSON.stringify(usuario),
            new RequestOptions({ headers: headers })
        )
        .map((resposta: Response) => resposta.json().id)
    }   
   
    public UpdateUsuario(usuario: Usuario): Observable<number> {       
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.put(
            `${URL_API}/usuarios/${usuario.id}`,
            JSON.stringify(usuario),
            new RequestOptions({ headers: headers })
        )
        .map((resposta: Response) => resposta.json().id)       
    }   
}