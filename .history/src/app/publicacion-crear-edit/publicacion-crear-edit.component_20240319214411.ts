import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Categorias, Datum } from "app/interfaces/cateogorias";
import { Datum_t, Tags } from "app/interfaces/tags";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Router } from "@angular/router";
@Component({
  selector: "app-publicacion-crear-edit",
  templateUrl: "./publicacion-crear-edit.component.html",
  styleUrls: ["./publicacion-crear-edit.component.scss"],
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule, MatSelectModule, MatInputModule, FormsModule],
})
export class PublicacionCrearEditComponent implements OnInit {
  publicacionForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}
  categorias: Datum[] = [];
  tags: Datum_t[] = [];
  cargandoCategorias: boolean = false;
  cargandoTags: boolean = false;
  ngOnInit(): void {
    this.publicacionForm = this.fb.group({
      titulo: [""],
      subTitulo: [""],
      descripcion: [""],
      categoriasPublicaciones_id: [""],
      tags: this.fb.array([]),
      users_id: [1],
    });
  //  this.obtenerCategorias();
   // this.obtenerTags();

  }
  async obtenerCategorias() : Promise<void> {
    this.cargandoCategorias = true; // Indicar que se están cargando las categorías
    this.http
      .get<Categorias>("http://127.0.0.1:8000/api/v1/categorias/")
      .subscribe((data) => {
        this.categorias = data.data; // Actualizamos las categorías con los datos recibidos
        this.cargandoCategorias = false; // Indicar que las categorías se han cargado
        console.log(data.data.map)
      });
  }
  async obtenerTags(): Promise<void>  {
    this.cargandoTags = true; // Indicar que se están cargando las categorías
    this.http
      .get<Tags>("http://127.0.0.1:8000/api/v1/tags/")
      .subscribe((data) => {
        this.tags = data.data; // Actualizamos las categorías con los datos recibidos
        this.cargandoTags = false; // Indicar que las categorías se han cargado
        console.log(data.data)
      });
  }

  onSubmit(event: Event) {
    console.log(this.publicacionForm)
    if (this.publicacionForm) {
      const publicacionData = this.publicacionForm.value;
      this.http
        .post("http://127.0.0.1:8000/api/v1/publicaciones/", publicacionData)
        .subscribe(
          (response) => {
            console.log("Publicación creada exitosamente:", response);
            // Aquí puedes redirigir a la página deseada
            this.router.navigateByUrl('/tags');
          },
          (error) => {
            console.error("Error al crear la publicación:", error);
          }
        );
    }
  }
}
