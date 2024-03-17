import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tags-crear',
  templateUrl: './tags-crear.component.html',
  styleUrls: ['./tags-crear.component.scss']
})
export class TagsCrearComponent implements OnInit {
  tagForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.tagForm = this.formBuilder.group({
      nombreTag: ['', Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evitar la acción predeterminada de recargar la página

    if (this.tagForm.valid) {
      const nombreTag = this.tagForm.value.nombreTag;
      this.http.post('http://127.0.0.1:8000/api/v1/tags/', { nombreTag })
        .subscribe(response => {
          console.log('Tag creado exitosamente:', response);
          // Redirigir a la ventana anterior o a otra ruta si es necesario
        }, error => {
          console.error('Error al crear el tag:', error);
        });
    }
  }

}
