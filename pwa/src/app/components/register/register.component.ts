import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username!: string;
  password!: string;
  name!: string;
  email!: string;
  role!: string;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password, this.name, this.email, this.role).subscribe(() => {
      // handle successful registration, maybe navigate to login
    });
  }
}
