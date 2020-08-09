import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Estabelecimento } from "../models/estabelecimento";

@Injectable({
  providedIn: 'root'
})
export class ListaEstabelecimentosService {

  private estabelecimentosUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/db';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  getEstabelecimentos(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.estabelecimentosUrl)
      .pipe(
        catchError(error => {
          console.log(error);

          return [];
        })
      );
  }

}
