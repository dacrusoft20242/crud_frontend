import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

// Definir rutas
const routes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent }, // Ruta para el listado de usuarios
  { path: 'usuario/nuevo', component: UsuarioFormComponent }, // Crear usuario
  { path: 'usuario/editar/:id', component: UsuarioFormComponent }, // Editar usuario 
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' }, // Redireccionar a la ruta 'usuarios' al inicio
  { path: '**', redirectTo: '/usuarios', pathMatch: 'full' } // Rutas no existentes
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
