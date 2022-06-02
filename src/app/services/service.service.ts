import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public listaExample = [];

  private url = 'https://reqres.in/api/unknown';

  constructor(private http: HttpClient) { }

  buscarTodosExample(){
    return this.http.get(this.url);
  }
}
