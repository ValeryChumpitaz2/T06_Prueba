import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

  cerrarSesion(): void {
    localStorage.removeItem('fut_session');
    this.router.navigate(['/login']);
  }
}
