import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  login() {

    if (!this.email || !this.password) {
      alert('Por favor llena todos los campos');
      return;
    }

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Aquí después conectarás tu backend
    // Por ahora solo redirige al panel
    this.router.navigate(['/panel']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}