import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Datum, Tags } from 'app/interfaces/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {


 
  usuarios: Datum[] = []; // Variable para almacenar los usuarios
  loading: boolean = true; // Variable para indicar si se están cargando los datos

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerUsuarios(); // Llama a la función para obtener usuarios cuando se inicialice el componente
  }

  obtenerUsuarios() {
    this.http.get<Tags>('http://127.0.0.1:8000/api/v1/tags/')
      .subscribe(data => {
        if (data.success) {
          this.usuarios = data.data; // Asigna los datos de usuarios a la variable usuarios
          this.loading = false; // Indica que los datos han sido cargados correctamente
        } else {
          console.error('Hubo un error al obtener los usuarios:', data.message);
          this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
        }
      }, error => {
        console.error('Error al hacer la solicitud:', error);
        this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
      });
  }
  agregarUsuario(){

  }
}
