import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Datum, Publicaciones } from 'app/interfaces/publicaciones';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  publicaciones: Datum[] = []; // Variable para almacenar las publicaciones
  loading: boolean = true; // Variable para indicar si se están cargando los datos
  totalItems: number = 100; // Total de elementos
  pageSize: number = 10; // Tamaño de página inicial
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Opciones de tamaño de página
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPublicaciones(); 
  }

  obtenerPublicaciones() {
    this.http.get<Publicaciones>('http://127.0.0.1:8000/api/v1/publicaciones/')
      .subscribe(data => {
        if (data.success) {
          this.publicaciones = data.data; // Asigna los datos de publicaciones a la variable publicaciones
          this.loading = false; // Indica que los datos han sido cargados correctamente
        } else {
          console.error('Hubo un error al obtener las publicaciones:', data.message);
          this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
        }
      }, error => {
        console.error('Error al hacer la solicitud:', error);
        this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
      });
  }

}
