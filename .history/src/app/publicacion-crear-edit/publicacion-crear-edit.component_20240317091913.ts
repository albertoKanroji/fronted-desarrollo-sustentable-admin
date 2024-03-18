import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Datum } from 'app/interfaces/cateogorias';
import { Datum } from 'app/interfaces/tags' ;
@Component({
  selector: 'app-publicacion-crear-edit',
  templateUrl: './publicacion-crear-edit.component.html',
  styleUrls: ['./publicacion-crear-edit.component.scss']
})
export class PublicacionCrearEditComponent implements OnInit {
  publicacionForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  categorias: Datum[] = [];
  tags: Datum[] = [];
  ngOnInit(): void {
    this.publicacionForm = this.fb.group({
      titulo: [''],
      subTitulo: [''],
      descripcion: [''],
      categoriasPublicaciones_id: [''],
      tags: this.fb.array([]),
      users_id: ['']
    });
    this.http.get<any[]>('http://127.0.0.1:8000/api/v1/categorias/').subscribe(data => {
      this.categorias = data;
    });

    this.http.get<any[]>('http://127.0.0.1:8000/api/v1/tags/').subscribe(data => {
      this.tags = data;
    });
  }

  onSubmit() {
    if (this.publicacionForm.valid) {
      const publicacionData = this.publicacionForm.value;
      this.http.post('http://127.0.0.1:8000/api/v1/publicaciones/', publicacionData)
        .subscribe(response => {
          console.log('Publicación creada exitosamente:', response);
          // Aquí puedes redirigir a la página deseada
        }, error => {
          console.error('Error al crear la publicación:', error);
        });
    }
  }

}
