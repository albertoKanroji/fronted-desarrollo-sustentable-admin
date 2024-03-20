import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags-crear',
  templateUrl: './tags-crear.component.html',
  styleUrls: ['./tags-crear.component.scss']
})
export class TagsCrearComponent implements OnInit {
  tagForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.tagForm = this.formBuilder.group({
      nombreTag: ['', Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evitar la acción predeterminada de recargar la página

    if (this.tagForm.valid) {
      const nombreTag = this.tagForm.value.nombreTag;
    
      // Observable con la petición HTTP
      const observable = this.http.post('http://127.0.0.1:8000/api/v1/tags/', { nombreTag });
    
      // Suscripción al Observable con `next` y `finally`
      observable.subscribe({
        next: response => {
          console.log('Tag creado exitosamente:', response);
          this.router.navigateByUrl('/icons'); // Redirigir a la ventana anterior o a otra ruta si es necesario
        },
        error: error => {
          console.error('Error al crear el tag:', error);
        },
        finally: () => {
          // Código a ejecutar independientemente del éxito o fallo de la petición
          console.log('Petición finalizada');
          // Aquí puedes realizar acciones como:
          // - Deshabilitar un botón de envío
          // - Mostrar un mensaje informativo
        }
      });
    }
  }

}
