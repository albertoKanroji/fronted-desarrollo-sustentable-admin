import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TagsComponent } from './tags/tags.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { TagsCrearComponent } from './tags-crear/tags-crear.component';
import { PublicacionCrearEditComponent } from './publicacion-crear-edit/publicacion-crear-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    PublicacionCrearEditComponent 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TagsComponent,
    PublicacionCrearEditComponent,
   // TagsCrearComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
