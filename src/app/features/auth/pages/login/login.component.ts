import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // ==========================================
  // CREDENCIALES DE PRUEBA
  // ==========================================

  readonly VALID_EMAIL = 'usuario@vallegrande.edu.pe';
  readonly VALID_PASSWORD = 'viviana123';


  // ==========================================
  // DATOS DEL FORMULARIO
  // ==========================================

  email = 'usuario@vallegrande.edu.pe';
  password = '';

  rememberSession = true;
  showPassword = false;

  loginMessage = '';
  isLoading = false;


  constructor(
    private router: Router
  ) {}


  // ==========================================
  // MOSTRAR / OCULTAR CONTRASEÑA
  // ==========================================

  togglePassword(): void {

    this.showPassword = !this.showPassword;

  }


  // ==========================================
  // INICIAR SESIÓN
  // ==========================================

  login(): void {

    this.loginMessage = '';

    const userEmail = this.email.trim().toLowerCase();
    const userPassword = this.password;

    // Validar campos
    if (!userEmail || !userPassword) {

      this.loginMessage =
        'Ingresa tu correo institucional y contraseña.';

      return;
    }


    // Activar estado de carga
    this.isLoading = true;


    // Simulación de validación
    setTimeout(() => {

      // ======================================
      // CREDENCIALES CORRECTAS
      // ======================================

      if (
        userEmail === this.VALID_EMAIL &&
        userPassword === this.VALID_PASSWORD
      ) {

        // Guardar sesión si está activado
        if (this.rememberSession) {

          localStorage.setItem(
            'fut_session',
            '1'
          );

        }


        localStorage.setItem(
          'fut_user',
          userEmail
        );


        this.loginMessage =
          'Acceso correcto. Ingresando al sistema...';


        // Ir al Dashboard
        setTimeout(() => {

          this.router.navigate(['/home']);

        }, 500);

      }

      // ======================================
      // CREDENCIALES INCORRECTAS
      // ======================================

      else {

        this.loginMessage =
          'Correo o contraseña incorrectos.';

        this.isLoading = false;

      }

    }, 500);

  }


  // ==========================================
  // RECUPERAR CONTRASEÑA
  // ==========================================

  forgotPassword(): void {

    this.loginMessage =
      'Comunícate con la administración de la institución para recuperar tu acceso.';

  }

}
