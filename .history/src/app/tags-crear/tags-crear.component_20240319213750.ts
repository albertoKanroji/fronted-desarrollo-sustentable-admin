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
    
      // Petición HTTP con `next` y `finally`
      this.http.post('http://127.0.0.1:8000/api/v1/tags/', { nombreTag })
        .pipe(
          // `next` se ejecuta cuando la petición se completa exitosamente
          next((response) => {
            console.log('Tag creado exitosamente:', response);
            this.router.navigateByUrl('/icons');
            // Redirigir a la ventana anterior o a otra ruta si es necesario
          }),
          // `finally` se ejecuta siempre, independiente del éxito o fracaso de la petición
          finally(() => {
            // Opcional: código a ejecutar al finalizar la petición, como limpiar variables o mostrar un mensaje al usuario
            console.log('Petición finalizada');
          })
        )
        .subscribe();
    }
    
  }

}
function next(arg0: (response: any) => void): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

