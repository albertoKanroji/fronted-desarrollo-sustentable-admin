import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tags-crear',
  templateUrl: './tags-crear.component.html',
  styleUrls: ['./tags-crear.component.scss']
})
export class TagsCrearComponent implements OnInit {
  nombreTag: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Verificar que el nombre del tag no esté vacío
    if (this.nombreTag.trim() !== '') {
      // Realizar la solicitud HTTP POST al endpoint
      this.http.post('http://127.0.0.1:8000/api/v1/tags/', { nombreTag: this.nombreTag })
        .subscribe(response => {
          // Manejar la respuesta del servidor aquí
          console.log('Tag creado exitosamente:', response);
          // Redirigir a la ventana anterior o a otra ruta si es necesario
          // Por ejemplo:
          // this.router.navigate(['/ruta-anterior']);
        }, error => {
          // Manejar errores de la solicitud
          console.error('Error al crear el tag:', error);
        });
    } else {
      console.error('El nombre del tag no puede estar vacío');
    }
  }

  ngOnInit(): void {
  }

}
