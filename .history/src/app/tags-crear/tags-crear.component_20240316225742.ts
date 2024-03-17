import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tags-crear',
  templateUrl: './tags-crear.component.html',
  styleUrls: ['./tags-crear.component.scss']
})
export class TagsCrearComponent implements OnInit {
  tagForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private snackBar: MatSnackBar) { }
  showSuccess(message: string, action: string = 'Cerrar') {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración en milisegundos
      panelClass: ['success-snackbar'] // Clase CSS para personalizar el estilo
    });
  }

  showError(message: string, action: string = 'Cerrar') {
    this.snackBar.open(message, action, {
      duration: 5000, // Duración en milisegundos
      panelClass: ['error-snackbar'] // Clase CSS para personalizar el estilo
    });
  }
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
          this.showSuccess('¡El tag se creó exitosamente!');
          // Redirigir a la ventana anterior o a otra ruta si es necesario
        }, error => {
          console.error('Error al crear el tag:', error);
        });
    }
  }

}
