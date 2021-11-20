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
/*     this.http
      .mae<{ message: string }>(this.url, mae)
      .subscribe((response) => {
        console.log(response);
        this.maes.push(mae); // agrega los post a la lista posts
        // Generar notificacion de actualizacion a los componentes suscritos al Subject, por medio del metodo .next()
        this.maeUpdated.next([...this.maes]); // copia_lista = [...nombreListaOriginal]
        this.router.navigate(['/']);
      }); */
  }
}
