import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mae } from 'src/models/mae.models';

@Injectable({
  providedIn: 'root'
})
export class MaeService {
  url="http://localhost:3000/api/maes";
  maes: Mae[] = []; // variable o lista donde se almacenan los Post
  maeUpdated = new Subject<Mae[]>(); // variable = new Subject<tipo: arrglo de Post>()

  constructor(private router: Router, private http: HttpClient) {}

  addMae(mae: Mae) {
     this.http
      .post<{ message: string }>(this.url, mae)
      .subscribe((response) => {
        console.log(response);
        this.maes.push(mae); // agrega
        // Generar notificacion de actualizacion a los componentes suscritos al Subject, por medio del metodo .next()
        this.maeUpdated.next([...this.maes]); // copia_lista = [...nombreListaOriginal]
        this.router.navigate(['/']);
      });
  }

  getMaes() {
    this.http
      .get<any>(this.url)
      .pipe(
        map((maesData) => {
          return maesData.map(
            (mae: {
              _id: string;
              codigo: string;
              nombre: string;
            }) => {
              return {
                id: mae._id,
                codigo: mae.codigo,
                nombre: mae.nombre,
              };
            }
          );
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.maes = response;
        this.maeUpdated.next([...this.maes]);
      });
  }

  deleteMae(id: string) {
    this.http.delete(`${this.url}/${id}`).subscribe((response) => {
      console.log(response);
      const maesFiltered = this.maes.filter((mae) => mae.id != id);
      this.maes = maesFiltered;
      this.maeUpdated.next([...this.maes]);
    });
  }

  updateMae(mae: Mae, id: string) {
    this.http.put(`${this.url}/${id}`, mae).subscribe((response) => {
      const newMaes = [...this.maes];
      const oldMaeIndex = newMaes.findIndex((mae) => mae.id === id);
      newMaes[oldMaeIndex] = mae;
      this.maeUpdated.next([...this.maes]);
      this.router.navigate(['/']);
    });
  }

  getMaesUpdateListener(){
    return this.maeUpdated.asObservable();
  }

}
