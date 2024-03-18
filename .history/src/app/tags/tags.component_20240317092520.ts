import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Datum_t, Tags } from "app/interfaces/tags";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.scss"],
})
export class TagsComponent implements OnInit {
  tags: Datum[] = []; // Variable para almacenar los usuarios
  loading: boolean = true; // Variable para indicar si se están cargando los datos

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerTags(); // Llama a la función para obtener usuarios cuando se inicialice el componente
  }
  editarTag(tagId: number) {
    // Redirige a la página de edición con el ID del tag
    // this.router.navigateByUrl(`/tags-editar/${tagId}`);
  }

  eliminarTag(tagId: number) {
    // Realiza la solicitud HTTP DELETE para eliminar el tag
    this.http.delete(`http://127.0.0.1:8000/api/v1/tags/${tagId}`).subscribe(
      () => {
        console.log(`Tag con ID ${tagId} eliminado exitosamente.`);
        // Actualiza la lista de tags después de eliminar
        this.obtenerTags();
      },
      (error) => {
        console.error(`Error al eliminar el tag con ID ${tagId}:`, error);
      }
    );
  }

  obtenerTags() {
    this.http.get<Tags>("http://127.0.0.1:8000/api/v1/tags/").subscribe(
      (data) => {
        if (data.success) {
          this.tags = data.data; // Asigna los datos de usuarios a la variable usuarios
          this.loading = false; // Indica que los datos han sido cargados correctamente
        } else {
          console.error("Hubo un error al obtener los usuarios:", data.message);
          this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
        }
      },
      (error) => {
        console.error("Error al hacer la solicitud:", error);
        this.loading = false; // Asegúrate de manejar los errores adecuadamente y cambiar el estado de loading
      }
    );
  }
  agregarUsuario() {}
}
