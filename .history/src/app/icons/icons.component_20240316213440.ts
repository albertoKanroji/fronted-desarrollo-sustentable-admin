import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Datum, Publicaciones } from 'app/interfaces/publicaciones';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  publicaciones: Datum[] = []; // Variable para almacenar las publicaciones
  loading: boolean = true; // Variable para indicar si se están cargando los datos
  @ViewChild(MatPaginator) paginator: MatPaginator;

  page: number = 1; // Página actual
  pageSize: number = 10; // Tamaño de página
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPublicaciones(); 
  }
  recargar() {
    this.loading = true; // Activar la carga
    this.publicaciones = []; // Vaciar las publicaciones
    this.obtenerPublicaciones(); // Volver a cargar las publicaciones
  }

  obtenerPublicaciones() {
    this.http.get<Publicaciones>('http://127.0.0.1:8000/api/v1/publicaciones/')
      .subscribe(data => {
        if (data.success) {
          this.publicaciones = data.data;
          this.totalItems = this.publicaciones.length;
          this.loading = false;
          // Asigna el paginador después de obtener los datos
          this.assignPaginator();
        } else {
          console.error('Hubo un error al obtener las publicaciones:', data.message);
          this.loading = false;
        }
      }, error => {
        console.error('Error al hacer la solicitud:', error);
        this.loading = false;
      });
  }

  // Método para asignar el paginador
  assignPaginator() {
    if (this.paginator) {
      this.paginator.length = this.totalItems;
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = 0;
      this.paginator.page.subscribe((event: PageEvent) => {
        // Aquí puedes manejar la paginación, por ejemplo, cargar los datos de la página actual
        console.log('Página cambiada:', event);
      });
    }
  }

}
