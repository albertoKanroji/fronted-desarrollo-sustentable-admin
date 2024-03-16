import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  usuarios: Datum[] = []; // Variable para almacenar los usuarios

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerUsuarios(); // Llama a la función para obtener usuarios cuando se inicialice el componente
  }

  obtenerUsuarios() {
    this.http.get<UsuariosClientes>('http://127.0.0.1:8000/api/v1/usuarios/')
      .subscribe(data => {
        if (data.success) {
          this.usuarios = data.data; // Asigna los datos de usuarios a la variable usuarios
        } else {
          console.error('Hubo un error al obtener los usuarios:', data.message);
        }
      }, error => {
        console.error('Error al hacer la solicitud:', error);
      });
  }


}
