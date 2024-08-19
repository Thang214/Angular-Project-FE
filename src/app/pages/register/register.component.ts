import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  toastr = inject(ToastrService);
  form = this.formBilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validator: (form: FormGroup) => {
        const password = form.get('password')?.value || '';
        const confirmPassword = form.get('confirmPassword')?.value || '';

        return password === confirmPassword ? null : { notMatch: true };
      },
    }
  );
  constructor(
    private formBilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) return;

    const formValue = this.form.value;
    const email = formValue.email!;
    const name = formValue.name!;
    const password = formValue.password!;
    const confirmPassword = formValue.confirmPassword!;
    const role = 'member' || 'admin';

    this.userService
      .register({ name, email, password, confirmPassword, role })
      .subscribe(
        () => {
          this.toastr.success('Đăng kí thành công');
          this.router.navigate(['/login']);
        },
        (error) => {
          this.toastr.error('Đăng kí thất bại');
        }
      );
  }
}
