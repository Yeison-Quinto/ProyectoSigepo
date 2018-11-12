import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lmodelos } from '../modelos/lmodelos';
import { Pmodelos } from '../modelos/pmodelos';


@Injectable({
  providedIn: 'root'
})

export class ServicioService {
selectedLmodelos: Lmodelos;
lmodelos: Lmodelos[];
selectedPmodelos: Pmodelos;
pmodelos: Pmodelos[];

readonly URL_L = 'http://localhost:3000/api/login';
readonly URL_P = 'http://localhost:3000/api/proyecto';

   constructor(private http: HttpClient) {
     this.selectedLmodelos = new Lmodelos();
     this.selectedPmodelos = new Pmodelos();
   }

   getLmodelos() {
     return this.http.get(this.URL_L);
    }

   getPmodelos() {
    return this.http.get(this.URL_P);
  }

  // tslint:disable-next-line:no-shadowed-variable
  postLmodelos(Lmodelos: Lmodelos ) {
    return this.http.post(this.URL_L, Lmodelos);
  }

  // tslint:disable-next-line:no-shadowed-variable
  postPmodelos(Pmodelos: Pmodelos ) {
    return this.http.post(this.URL_P, Pmodelos);
  }

  putLmodelos(lmodelos: Lmodelos ) {
    return this.http.put(this.URL_L + `/${lmodelos._id}`,  lmodelos);
  }
  putPmodelos(pmodelos: Pmodelos ) {
    return this.http.put(this.URL_L + `/${pmodelos._id}`,  pmodelos);
  }

  delateLmodelos(_id: String ) {
    return this.http.delete(this.URL_L + `/${_id}`);
  }

  delatePmodelos(_id: String) {
    return this.http.delete(this.URL_L + `/${_id}`);
  }



}
