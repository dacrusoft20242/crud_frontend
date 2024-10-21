import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario = new Usuario();
  esEdicion: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.usuarioService.obtenerUsuarios().subscribe(data => {
        const usuarioEncontrado = data.find(u => u.id === +id);
        if (usuarioEncontrado) {
          this.usuario = usuarioEncontrado;
        }
      });
    }
  }

  guardarUsuario(): void {
    if (this.esEdicion) {
      this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}
