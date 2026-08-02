import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../core/models/agenthub.models';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);

  handleLogin(role: UserRole) {
    this.auth.login(role);
    const target = role === 'ADMIN' ? '/admin' : role === 'PUBLISHER' ? '/publisher' : '/agenthub';
    this.router.navigate([target]);
  }
}
